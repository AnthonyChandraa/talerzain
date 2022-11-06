import React, {useState, useContext, createContext, useEffect} from 'react';
import {auth} from './../config/config';
import {onAuthStateChanged} from 'firebase/auth';
import firebase from "firebase/compat/app";


interface IUserContext{
  user: firebase.User
}

type Props = {
  children?: React.ReactNode;
}

const UserContext = createContext<firebase.User | null>(null);
function UserProvider({children}:Props) {
  const [currentUser, setCurrentUser] = useState<firebase.User|null>(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (firebaseUser)=>{
       if(firebaseUser!=null){
        // setCurrentUser(firebaseUser);
       }
    })
  }, []);


  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}

export default UserProvider;