import React, { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'

export default function useSignIn() {
  
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(false);

    const signIn = async ( email , password ) => {
       try {
        setLoading(true)
        let res =  await signInWithEmailAndPassword( auth , email , password)
        setError('');
        setLoading(false);
        return res.user;
    } catch (error) {
        setLoading(false)
        setError(error.message);
       }
    }

    return { error , loading, signIn}
}
