import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {useFocusEffect} from '@react-navigation/native';
import  { useContext , useState } from 'react';
import { GlobalContext } from '../../context/Provider';
import { LOGIN } from '../../constants/routeNames';
import  register, { clearAuthState } from '../../context/actions/auth/register';
import RegisterComponent from '../../components/Signup';
const Register=()=>{
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
const {authDispatch,
  authState:{error,loading,data},
} = useContext(GlobalContext);


useFocusEffect(
  React.useCallback(() => {
    return () => {
      // it shows the error like something went wrong , try again
        if (data || error) {
         clearAuthState()(authDispatch);
       }
    
    };
  }, [data, error]),
);



  const onChange = ({name ,value})=>{
    setForm({...form,[name]: value});



    if (value !== ''){
      if(name === 'password'){
        if(value.length<6){
          setErrors(prev=>{
            return {...prev,[name]:'minimum 6 character'}
          });
        }else{
          setErrors(prev=>{
            return {...prev,[name]:null};
          });
        }
      }else{
      setErrors(prev=>{
        return {...prev,[name]:null}
      });
    }
    }else{
      setErrors(prev=>{
        return {...prev,[name]:'This field is required'}
      });
    }
  };
  const onSubmit = () =>{
    if(!form.userName){
      setErrors(prev=>{
        return {...prev,userName:"Please add a username"}
      })
    }
    if(!form.firstName){
      setErrors(prev=>{
        return {...prev,firstName:"Please add a firstname"}
      })
    }
    if(!form.lastName){
      setErrors(prev=>{
        return {...prev,lastName:"Please add a lastname"}
      })
    }
    if(!form.email){
      setErrors(prev=>{
        return {...prev,email:"Please add a email"}
      })
    }
    if(!form.password){
      setErrors(prev=>{
        return {...prev,password:"Please add a Password"}
      })
    }


if(Object.values(form).length===5 &&
Object.values(form).every(item=>item.trim().length>0) &&
Object.values(errors).every((item)=>!item)){
  

  register(form)(authDispatch);
}



};
    return (
 <RegisterComponent
 onSubmit={onSubmit}
 onChange={onChange}
 form={form}
 errors={errors}
 error={error}
 loading={loading}
 />
    );
};
export default Register;