import { NextFunction, Request, Response } from 'express';

export const loggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (req.user)
    {
        next();
    } else {
        res.status(401).json({message:"not logged in"});
    }
}

export const hasRole = (req: Request, res: Response, next: NextFunction, role : string) => {
    if (role != req.user?.role) {
        res.status(403).json({message:"user not authorized"});
    }
    next();
}