
import { useEffect, useState } from 'react';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';
import useAuth from '../UseAuth/useAuth';
import useAxiosSecure from '../UseAxiosSecure/useAxiosSecure';

const useUser = () => {
    const { user,setLoading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [userInfo, setUserInfo] = useState(null);
    // const [loading, setLoading] = useState(true);
    // console.log(user?.email)

   useEffect(()=>{
    setLoading(true)
    console.log('from inside of useEffect of useUser')
    axiosSecure.get(`/userInfo?email=${user.email}`)
    // axiosSecure.get('/userInfo')
    .then(res=>{
        console.log(res.data)
        setUserInfo(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
    setLoading(false);
   },[axiosSecure,user.email])

    return { userInfo};
};

export default useUser;
