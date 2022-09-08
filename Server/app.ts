import express from "express";
import compression from "compression";
import helmet from 'helmet';
import cors from 'cors';
import { Routes } from '@interfaces/routes.interface';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = 'development';
        this.port = 3000;

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
