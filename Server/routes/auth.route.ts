import { Router, Request, Response, NextFunction} from 'express';
import UserModel from "@models/user.models";
import { User } from "@interfaces/user.interface";
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';
import { passport} from 'passport';
import { LocalStrategy } from 'passport-local';
import { bcrypt } from 'bcrypt';

const saltRounds : Number = 10;


passport.use(new LocalStrategy(function verify(username : string, password : string, cb : any) {
    UserModel.findOne({ username: username }, function (err: any, user: User) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false, { message: 'Email not found.' }); }

        bcrypt.compare(password, user.password, function(err: any, res: boolean) {
            if (err) { return cb(err); }
            if (!res) { return cb(null, false, { message: 'Incorrect password.' }); }
            return cb(null, user);
        });
    });
}));


passport.serializeUser(function(user: User, cb: any) {
    cb(null, { _id: user._id, email: user.email });
});
  
passport.deserializeUser(function(user: User, cb : any) {
    return cb(null, user);
});


export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if(req.isAuthenticated())
        return next();

    res.redirect("/login");
};


Router.post('/auth/signup', function(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    bcrypt.hash(password, saltRounds, function(err: any, hash: string) {
        const user = new UserModel({ email, password: hash });
        user.save(function(err: any) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    });
});