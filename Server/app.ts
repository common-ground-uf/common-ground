import express, { NextFunction, Request, Response } from 'express';
import compression from "compression";
import cors from 'cors';
import mongoose from 'mongoose';
import passport from '@middlewares/passport.middleware';
import { Routes } from '@interfaces/routes.interface';
import { MONGODB_URI, SESSION_SECRET } from "./config";
import session, {Session} from 'express-session';
import {Server} from 'socket.io';
import * as http from 'http';
import SocketConnection from '@middlewares/socket.middleware';
import { Socket } from 'socket.io/dist/socket';


declare module "http" {
    interface IncomingMessage {
        session: Session & {
            authenticated: boolean
        },
        user?: {
            _id: string;
            email: string;
            password: string;
            firstname: string;
            lastname: string;
            role: string;
        }
    }
}

class App {
    public app: express.Application;
    public server: http.Server;
    public env: string;
    public port: string | number;
    public sessionMiddleware = session({
        secret: SESSION_SECRET!,
        resave: false,
        saveUninitialized: true,
        cookie : { 
            //secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        }
    });

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = 'development';
        this.port = 3000;

        this.initializeMongoDB();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.server = http.createServer(this.app);
        this.initializeSockets();
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log("======= ENV: " + this.env + " =======");
            console.log("🚀 App listening on the port " + this.port);
          });
    }

    public getServer() {
        return this.server;
    }

    private initializeMongoDB() {
        mongoose.connect(MONGODB_URI!);
    }


    private initializeMiddlewares() {
        this.app.use(cors({origin:'*'}));
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(this.sessionMiddleware);
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }

    private initializeSockets() {

        global.io = new Server(this.server);
        const wrap = (middleware:any) => (socket: Socket, next: any) => middleware(socket.request, {}, next);
        global.io.use(wrap(this.sessionMiddleware));
        global.io.use(wrap(passport.initialize()));
        global.io.use(wrap(passport.session()));
        global.io.use((socket, next)=> {
            if(socket.request.user) {
                next();
            } else {
                next(new Error("unauthorized"));
            }
        });
        global.io.on('connection', SocketConnection.connection);
        
    }
}

export default App;
