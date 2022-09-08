import express from "express";
import compression from "compression";
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import { Routes } from '@interfaces/routes.interface';
import { MONGODB_URI } from "./config";

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
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
}

export default App;
