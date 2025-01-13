import React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Icon } from '@rneui/themed';
const Errors = () => {
    const [visible, setVisible] = React.useState(true);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle: ViewStyle = {
        backgroundColor: 'white',        
        borderRadius: 20,
        margin: 20,
        height: 600,
    };

    return (
        <PaperProvider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View className='w-full h-full'>
                        <Icon name="close" type="antdesign" style={
                            {
                                width: 24,
                                height: 24,
                                margin: 10,
                            }
                        }
                        onPress={hideModal}
                        />
                        <View className='flex items-center relative flex-1'>
                            <Image source={require('../../../assets/error.png')} />
                            <Text className='text-[28px] font-semibold mt-5'>Rất tiếc! Đặt hàng thất bại</Text>
                            <Text className='text-base font-black text-[#7C7C7C]'>Đã xảy ra lỗi nghiêm trọng.</Text>
                            <View className='flex items-center absolute bottom-10 right-0 left-0 '>
                                <TouchableOpacity
                                    className="h-[67px] w-[300px] flex items-center justify-center bg-[#53B175] rounded-2xl"
                                    onPress={() => console.log("Add to Cart")}
                                >
                                    <Text className="text-white">Hãy thử lại</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    className="h-[67px] w-[300px] flex items-center justify-center"
                                    onPress={() => console.log("Add to Cart")}
                                >
                                    <Text className="">Về trang chủ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Portal>
        </PaperProvider>
    );
}

export default Errors