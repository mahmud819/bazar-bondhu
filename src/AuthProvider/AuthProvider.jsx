import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic();

    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // sign in with google 
    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

     useEffect(() => {
        setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup Firebase listener
    return () => {
      unsubscribe();
    };
  }, []);
   
    // useEffect(()=>{

    //     let isMounted = true;
        
    //     const unsubscribe = onAuthStateChanged(auth,async(currentUser)=>{
    //         if(isMounted){
    //             setLoading(true);
    //             setUser(currentUser);
    //         }
            
    //         const userInfo = {email:currentUser?.email};
    //         if(currentUser){
    //             await axiosPublic.post('/jwt',userInfo,{withCredentials:true})
    //             .then((res)=>{
    //                 console.log(res.data);
    //                 // if(res.data.token){
    //                 //     localStorage.setItem('accesToken',res.data.token)
    //                 // }
    //             })
    //         }
    //         else{
    //             // localStorage.removeItem('accesToken')
    //             await axiosPublic.post('/tokenLogOut',{},{withCredentials:true})
    //             .then(res=>{
    //                 console.log(res?.data)
    //             })
    //         }
    //         setLoading(false);
    //     })
    //     return ()=>{
    //          isMounted = false;
    //         unsubscribe();
    //     }
    // },[])
    
     const userLogOut=()=>{
        // setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        setUser,
        userLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;