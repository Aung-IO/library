import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default function useSignUp() {

    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(false);
  

    const signUp = async (email,password) => {
   try {
    setLoading(true);
    let res = await createUserWithEmailAndPassword ( auth , email , password)
    setError('');
    setLoading(false);
    return res.user;
} catch (error) {
       setLoading(false);
    setError( error.message);
   }
        


}     
    return { error , loading, signUp}
}
