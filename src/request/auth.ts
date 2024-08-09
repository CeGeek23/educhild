import { useAppDispatch } from '@/redux/hooks'
import Axios from '../axios/Axios'
import { useRouter } from 'next/navigation'
import { login } from '@/redux/slices/authSlice';

type props_regsiter_type =
 {
    dispatch?:ReturnType<typeof useAppDispatch>,
    formData ?:{
        username?: string;
        email: string;
        password: string;
      },
    navigate ?: ReturnType<typeof useRouter>,
    handleChangeLoading?: (state:boolean)=> void | boolean
}
export  class Auth  {

    register =  async ({dispatch,formData,navigate,handleChangeLoading}:props_regsiter_type) =>{
            
        handleChangeLoading? handleChangeLoading(true):null

           await Axios.post('account/register/',formData)
           .then((response)=>{
            console.log('datatatatatatatatatatatta',response.data)
            
            dispatch? dispatch(login(response.data)):null
            handleChangeLoading? handleChangeLoading(false):null
            navigate?.push('/')

        })
           .catch((error)=>{
            console.log(error)
            handleChangeLoading? handleChangeLoading(false):null

        })

    }

    login = async ({dispatch,formData,navigate,handleChangeLoading}:props_regsiter_type)=>{
        handleChangeLoading? handleChangeLoading(true):null

           await Axios.post('account/login',formData)
           .then((response)=>{
            console.log('datatatatatatatatatatatta',response.data)
            
            dispatch? dispatch(login(response.data)):null
            console.log(dispatch)
            handleChangeLoading? handleChangeLoading(false):null
            navigate?.push('/')
            
            
        })
           .catch((error)=>{
            console.log(error)
            handleChangeLoading? handleChangeLoading(false):null

        })
    }
}