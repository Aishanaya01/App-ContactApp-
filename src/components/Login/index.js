import { useNavigation } from '@react-navigation/core';
import React from 'react'
import {View,Text,TextInput,Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';

const LoginComponent=()=>{
    const {navigate}=useNavigation();
    return(
        <Container>
            <Image height="40" width="40" source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.title}>Welcome to HVContacts</Text>
                <Text style={styles.subTitle}>Please Login here</Text>
           
           <View style={styles.form}>
            <Input
    label="Username"
    iconPosition="right"
    placeholder="Enter Username"
    //error={'This feild is required'}
    />
     <Input
    label="Password"
    placeholder="Enter Password"
    secureTextEntry={true}//password not shown 
    icon={<Text>Show</Text>}
    iconPosition="right"
    />
    <CustomButton primary title="Submit"/>
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

    )
}

export default LoginComponent;