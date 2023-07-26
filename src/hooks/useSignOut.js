import React, { useState } from 'react'
import { signOut} from 'firebase/auth'
import {auth} from '../firebase'

export default function useSignOut() {
  
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(false);

    const logOut = async ( email , password ) => {
       try {
        setLoading(true)
        let res =  await signOut( auth , email , password)
        setError('');
        setLoading(false);
        return res.user;
    } catch (error) {
        setLoading(false)
        setError(error.message);
       }
    }

    return { error , loading, logOut}
}
