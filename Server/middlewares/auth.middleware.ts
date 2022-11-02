import { NextFunction, Request, Response } from 'express';

export const loggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (req.user)
    {
        next();
    } else {
        res.status(401).json({message:"not logged in"});
    }
}

export const logginInWithUserId = (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
        if (req.user._id == req.params.id || req.user.role == "admin") {
            next();
        }
        else {
            res.status(401).json({message:"not logged in with this user"});
        }
    }
    else {
        res.status(401).json({message:"not logged in"});
    }
}

export const hasRole = (req: Request, res: Response, next: NextFunction, role : string) => {
    if (role != req.user?.role) {
        res.status(403).json({message:"user not authorized"});
    }
    next();
}