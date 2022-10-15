import passport from "passport";
import userModel from '@/models/users.models';
import { Strategy as LocalStrategy } from "passport-local";

passport.use(new LocalStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

export default passport;