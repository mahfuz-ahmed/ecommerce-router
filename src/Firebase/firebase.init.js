import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
Step For Authentication

Step-1: Initial Setup

1. FireBase: Create Project
2. Create web App
3. get configuration
4. initialize firebase
5. Enable Auth Method

Step-2: setup component

1. Create Login Component
2. Create Register Component
3. Create Route for Login Register

Step-3: Auth System

1. Signin Method
2. Setup sign out method
3. user state
4. special observer
5. return necessary methods and state from useFirebase

step-4: Create auth nad conrext hooks (useAuth)

1. create a auth context
2. create context provider
3. set Context provider
3. use Auth provider
4. create useAuth hooks

Step-5: create private route
1. Create private Route
2. Set private route

.....................Optional...................

Step-6: Redirect after login
1. after login redirect user to their desired destination

*/