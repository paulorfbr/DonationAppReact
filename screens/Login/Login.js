import React, {useState} from 'react';
import {ScrollView, Pressable, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';

import LoginInput from '../../components/LoginInput/LoginInput';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.container}>
          <View style={globalStyle.marginBottom24}>
            <Header type={1} title={'Welcome Back'} />
          </View>
          <View style={globalStyle.marginBottom24}>
            <LoginInput
              keyboardType={'email-address'}
              label={'Email'}
              placeholder={'Enter your email...'}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <LoginInput
              secureTextEntry={true}
              label={'Password'}
              placeholder={'******'}
              onChangeText={value => setPassword(value)}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Button title={'Login'} />
          </View>
          <Pressable
            style={style.registrationButton}
            onPress={() => navigation.navigate(Routes.Registration)}>
            <Header
              color={'#156CF7'}
              type={3}
              title={"Don't have an account?"}
            />
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;
