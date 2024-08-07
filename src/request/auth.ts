import { useAppDispatch } from '@/redux/hooks'
import Axios from '../axios/Axios'
import { useRouter } from 'next/router'

type props_regsiter_type =
 {
    dispatch?:ReturnType<typeof useAppDispatch>,
    formData ?:{
        username: string;
        email: string;
        password: string;
      },
    navigate ?: ReturnType<typeof useRouter>,
    handleChangeLoading?: ()=>void
}
export  class Auth  {

    register =  async ({dispatch,formData,navigate,handleChangeLoading}:props_regsiter_type) =>{

           await Axios.post('account/register/',formData)
           .then((response)=>{
            console.log(response)
           })
           .catch((error)=>{
            console.log(error)
           })

    }

    login = async ({dispatch,formData,navigate,handleChangeLoading}:props_regsiter_type)=>{
        await Axios.post('account/login',formData)
        .then((response)=>{
         console.log(response)
        })
        .catch((error)=>{
         console.log(error)
        })
    }
}