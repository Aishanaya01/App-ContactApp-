import React ,  {useContext} from 'react';
import  {useState , useEffect} from  'react';
import {NavigationContainer} from "@react-navigation/native";

 import AuthNavigator from './AuthNavigator';

import DrawerNavigator from './DrawerNavigator ';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

const AppNavContainer=()=>{
    const {
        authState: {isLoggedIn},
    }  = useContext(GlobalContext);
    
    const [isAuthenticated, setIsAuthenticated]= React.useState(false);
    const [authLoaded, setAuthLoaded]=React.useState(false);
    const getUser=async()=>{
        
        try {
           const user = await AsyncStorage.getItem('user');

           if(user){
            setAuthLoaded(true);

           setIsAuthenticated(true);
           }else{
            setAuthLoaded(true);

               setIsAuthenticated(false);
           }
            
        } catch (error) {
            
        }
    };
useEffect(() =>{
    getUser();
} , []);


    // console.log('isLoggedIn :>> ', isAuthenticated);
   return (
       <>
    {authLoaded ? (
       <NavigationContainer>
     {isLoggedIn || isAuthenticated ? <DrawerNavigator/> : <AuthNavigator/>}
   </NavigationContainer>
  ) : (
    <ActivityIndicator />
  )}
</>
   ); 
};

export default AppNavContainer;