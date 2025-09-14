import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import style from "./style";
import globalStyle from "../../assets/styles/globalStyle";

import LoginInput from '../../components/LoginInput/LoginInput';

const Login = () => {
    const [email, setEmail] = React.useState('');
    return (
    <SafeAreaProvider>
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
           <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={style.container}>
                <LoginInput
                keyboardType={'email-address'}
                label={'Email'}
                placeholder={'Enter your email...'}
                onChangeText={value => setEmail(value)}
                />
            </ScrollView>
            </SafeAreaView>
    </SafeAreaProvider>
    );
}

export default Login;