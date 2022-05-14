import passport from "passport";
import  {   DbModel }   from    '../modules/db.models.js'
import {Strategy}  from "passport-facebook";
import  dotenv  from    'dotenv';

let usrID   =   '';

dotenv.config();


export function    lastUserInfo(){
    return  usrID
}

passport.use(
    new Strategy(
        {
            clientID:   process.env.FACEBOOK_ID,
            clientSecret:   process.env.FACEBOOK_SECRET,
            callbackURL:    '/api/auth/facebook/callback',
            profileFields:['id',    'displayName'],
            scope:  ['email']
        },
        (accessToken,  refreshToken,   userProfile,    done)  =>  {
            
            console.log(userProfile);
            
            return  done(null,  userProfile);
            
        }
    )  
);

passport.serializeUser((user,   done)   =>  {
    done(null,  user.id);
    //console.log(`El user es:${user.id}`);
    usrID   =   user;
});

passport.deserializeUser((id, done) =>  {
    DbModel.findById(id,    done);
});

export  default passport;