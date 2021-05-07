import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';


const RegisterComponent=({ onSubmit,onChange,form,loading,error,errors}) =>{
    const {navigate}=useNavigation();
    return(
        <Container>
            <Image height="40" width="40" source={require('../../assets/images/logo.png')} style={styles.logoImage}/>

            <View>
                <Text style={styles.title}>Welcome to  AS Contacts</Text>
                <Text style={styles.subTitle}>Create Free Account</Text>
           
           <View style={styles.form}>
         {error?.error && <Text>{error.error}</Text>}
    <Input
    label="Username"
    iconPosition="right"
    placeholder="Enter Username"
     error={errors.userName || error?.userName?.[0]}
    onChangeText={(value)=>{
         onChange({name: 'userName',value});
    }}
    />
           <Input
    label="First name"
    iconPosition="right"
    placeholder="Enter First name"
     error={errors.firstName || error?.first_name?.[0]}
     onChangeText={(value)=>{
         onChange({name: 'firstName',value});
     }}
    
    />
    
    <Input
    label="Last Name"
    iconPosition="right"
    placeholder="Enter Last name"
     error={errors.lastName || error?.last_name?.[0]}
     onChangeText={(value)=>{
     onChange({name: 'lastName',value});
     }}
    />
    
    <Input
    label="Email"
    iconPosition="right"
    placeholder="Enter Email"
     error={errors.email || error?.email?.[0]}
     onChangeText={(value)=>{
    onChange({name: 'email',value});
     }}
    />
     <Input
    label="Password"
    placeholder="Enter Password"
    secureTextEntry={true}
    icon={<Text>Show</Text>}
    iconPosition="right"
     error={errors.password || error?.password?.[0]}
     onChangeText={(value)=>{
         onChange({name: 'password',value});
     }}
    />
    <CustomButton loading={loading} onPress={onSubmit} disabled={loading} primary title="Submit"/>


<View style={styles.createSection}>
<Text style={styles.infoText}>Already have a  account?</Text>
<TouchableOpacity onPress={()=>
    {navigate(LOGIN);
}}>
<Text style={styles.linkBtn}>Login</Text>
</TouchableOpacity>
            </View>
    </View>
</View>
    </Container>

    )
}

export default RegisterComponent;