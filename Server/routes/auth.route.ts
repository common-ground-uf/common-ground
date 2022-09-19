// import { Router, Request, Response, NextFunction} from 'express';
// import UserModel from "@/models/users.models";
// import { User } from "@/interfaces/users.interface";
// import IndexController from '@controllers/index.controller';
// import { Routes } from '@interfaces/routes.interface';
// import passport from 'passport';
// import passportLocal from 'passport-local';
// import bcrypt from 'bcrypt';

// const saltRounds : Number = 10;


// // export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
// //     if(req.isAuthenticated())
// //         return next();

// //     res.redirect("/login");
// // };

// // Router.post('/auth/signup', function(req: Request, res: Response, next: NextFunction) {
// //     const { email, password } = req.body;
// //     bcrypt.hash(password, saltRounds, function(err: any, hash: string) {
// //         const user = new UserModel({ email, password: hash });
// //         user.save(function(err: any) {
// //             if (err) { return next(err); }
// //             res.redirect('/');
// //         });
// //     });
// // });