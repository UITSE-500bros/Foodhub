import {BottomSheetModal , BottomSheetModalProvider, BottomSheetView} from '@gorhom/bottom-sheet'
import { Icon } from '@rneui/themed'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Image, ScrollView, TouchableOpacity, View, Text, FlatList } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Checkbox } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ExploreCard from '../components/Cards/ExploreCard'
import {ProductCardSquare} from "../components";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query: string) => setSearchQuery(query);
    const onChangeClear = () => setSearchQuery('');

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    useEffect(() => {

    }, []);

    const filterBottomSheetModal = useRef<BottomSheetModal>(null);
    const [filterVisible, setFilterVisible] = useState(false);

    const snapPoints = useMemo(() => ['25%', '50%'], []);
    // callbacks
    const handleFilterPress = useCallback(() => {
        filterBottomSheetModal.current?.present();
    }, []);
    const onClose = () => {
        // Logic to handle when modal is dismissed
        setFilterVisible(false);
        filterBottomSheetModal.current?.dismiss();
    };
    return (
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <View className='flex flex-row mt-11 pl-6 items-center'>
                    <TextInput
                        className='rounded-2xl h-14 ml-3 flex flex-row w-4/5 items-center bg-[#F2F3F2]'
                        placeholder="Search"
                        value={searchQuery}
                        cursorColor='#000'
                        onChangeText={onChangeSearch} 
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                        left={
                            <TextInput.Icon
                            icon={() => (
                            <Image
                                source={require('../../assets/search.png')}
                                className='w-5 h-5'
                            />
                            )}
                        />
                        }
                        right={
                            <TextInput.Icon
                            icon={() => (
                            <Icon name='x-circle' type='feather' onPress={onChangeClear} style={{width:24,height:24}}/>
                            )}
                        />
                        }
                        />
                    <TouchableOpacity className='mx-auto' onPress={handleFilterPress} >
                        <Image source={require('../../assets/filter.png')} className='w-6 h-6'/>
                    </TouchableOpacity>
                </View>
                {
                    data && (
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.toString()}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <View className=" m-3">
                                    <ProductCardSquare />
                                </View>
                            )}
                        />
                    )
                }
                <BottomSheetModal
                    ref={filterBottomSheetModal}
                    index={1}
                    snapPoints={snapPoints} // Adjust the height as needed
                    onDismiss={onClose}
                >
                    <BottomSheetView >
                        <Checkbox
                            status={'checked'}
                            onPress={() => {
                            
                            }}
                            />
                    </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
  )
}

export default Search