import { useNavigation } from '@react-navigation/core';
import React from 'react'
import {View,Text,Image, TouchableOpacity } from 'react-native';

import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';
import Message from '../../components/common/Message';

const LoginComponent=(error, onChange , onSubmit, loading)=>{
    const {navigate}=useNavigation();
    return (
        <Container>
            <Image height="40" width="40" source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.title}>Welcome to  AS Contacts</Text>
                <Text style={styles.subTitle}>Please Login Here</Text>


           <View style={styles.form}>
           {error && !error.error&&(
                <Message  onDismiss ={()=> {}} danger  message="invalid credential"/>
               )}
           {error?.error && <Message   danger onDismiss Message={error?.error}
            />
               }
            <Input
    label="Username"
    iconPosition="right"
    placeholder="Enter Username"
    onChangeText={(value)=>{
         onChange({name: 'userName',value});
    }}
    />
     <Input
    label="Password"
    placeholder="Enter Password"
    secureTextEntry={true}//password not shown 
    icon={<Text>Show</Text>}
    iconPosition="right"
    onChangeText={(value)=>{
         onChange({name: 'password',value});
    }}
    />
    <CustomButton 
    disabled={loading}
    onPress={onSubmit} 
    loading={loading}
    primary title="Submit"/>
<View style={styles.createSection}>
<Text style={styles.infoText}>Need a new account?</Text>
<TouchableOpacity onPress={()=>
    {navigate(REGISTER);
}}>
<Text style={styles.linkBtn}>Register</Text>
</TouchableOpacity>
            </View>
    </View>
</View>
    </Container>

    );
}

export default LoginComponent;