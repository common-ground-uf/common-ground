import express from "express";
import compression from "compression";
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from '@middlewares/passport.middleware';
import { Routes } from '@interfaces/routes.interface';
import bodyparser from 'body-parser';
import { MONGODB_URI, SESSION_SECRET } from "./config";
import session from 'express-session';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = 'development';
        this.port = 3000;

        this.initializeMongoDB();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("======= ENV: " + this.env + " =======");
            console.log("🚀 App listening on the port " + this.port);
          });
    }

    public getServer() {
        return this.app;
    }

    private initializeMongoDB() {
        mongoose.connect(MONGODB_URI!);
    }


    private initializeMiddlewares() {
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(bodyparser.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(session({
            secret: SESSION_SECRET!,
            resave: false,
            saveUninitialized: true,
            cookie : { 
                //secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
            }
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
}

export default App;
