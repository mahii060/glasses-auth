import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { createContext } from "react";

// Social providers
export const AuthContext = createContext(null)
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const twitterProvider = new TwitterAuthProvider();