import React, { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'

export default function useSignIn() {
  
    const [ error , setError ] = useState('');
    const [ loading , setLoading ] = useState(false);

    const signIn = async ( email , password ) => {
       try {
        setLoading(true)
        let res =  await signInWithEmailAndPassword( auth , email , password)
        setLoading(false);
        setError('');
        return res.user
    } catch (error) {
        setLoading(false)
        setError(error.message);
       }
    }

    return { error , loading, signIn}
}
