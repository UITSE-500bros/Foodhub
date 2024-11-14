import { Button } from '@rneui/themed';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { signInWithGoogle } from '../../service/Auth/auth_google_signin';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../firebaseConfig';
const Login = () => {


    return (
        <View className='h-full w-full'>
            <Image source={require('../../../assets/maskgroup.png')} className='w-full h-[35%]' />
            <Text className='text-2xl text-center font-bold'>Get your groceries with Foodhub</Text>

            {/* <Text className='text-center mt-3'>Enter your email to get started</Text>
            <View className='h-[1px] bg-black mx-3 mt-3'/>
            <View className='h-[1px] bg-black mx-3 mt-3'/>

            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View className='bg-yellow-500 mx-4 mt-3 rounded-s-lg'>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            cursorColor={'black'}
                            className='border-[1px] border-black'
                        />
                        <Button onPress={handleSubmit as (e?: GestureResponderEvent) => void} title="Submit" />
                    </View>
                )}
            </Formik> */}
            <View className='mt-[160px]'>
                <Text className='text-center'>Continue with</Text>
                <Button
                    title="Sign in with google"
                    icon={
                        <Image source={require('../../../assets/google.png')} className='w-8 h-8' />
                    }
                    iconContainerStyle={{ marginRight: 50 }}
                    titleStyle={{
                        fontWeight: '700',
                        color: 'black',
                    }}
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderColor: '#889397',
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingVertical: 20, // Optional padding for box content
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                    }}
                    containerStyle={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                    }}
                    onPress={() => {
                        signInWithPopup(auth, provider)
                            .then((result) => {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                const credential = GoogleAuthProvider.credentialFromResult(result);
                                const token = credential ? credential.accessToken : null;
                                // The signed-in user info.
                                const user = result.user;
                                // IdP data available using getAdditionalUserInfo(result)
                                // ...
                            }).catch((error) => {
                                // Handle Errors here.
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // The email of the user's account used.
                                const email = error.customData.email;
                                // The AuthCredential type that was used.
                                const credential = GoogleAuthProvider.credentialFromError(error);
                                // ...
                            });

                    }}
                />

                <Button
                    title="Sign in with facebook"
                    icon={
                        <Image source={require('../../../assets/facebook.png')} className='w-8 h-8' />
                    }
                    iconContainerStyle={{ marginRight: 50 }}
                    titleStyle={{
                        fontWeight: '700',
                        color: 'black',
                    }}
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderColor: '#889397',
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingVertical: 20,

                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                    }}
                    containerStyle={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                    }}
                />
            </View>
        </View>
    )
}

export default Login