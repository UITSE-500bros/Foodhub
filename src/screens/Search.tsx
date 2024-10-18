import { Icon } from '@rneui/themed'
import React, { useEffect } from 'react'
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { TextInput } from 'react-native-paper'

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: string) => setSearchQuery(query);
    const onChangeClear = () => setSearchQuery('');

    const [data, setData] = React.useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);
  return (
    <View>
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
                    <Icon name='x-circle' type='feather' onPress={onChangeClear} className='w-6 h-6'/>
                    )}
                />
                }
                />
            <TouchableOpacity className='mx-auto' onPress={() => console.log('Search')} >
            <Image source={require('../../assets/filter.png')} className='w-6 h-6'/>
            </TouchableOpacity>
        </View>
        <ScrollView>
            {
                data && data.map((item: any, index: number) => (
                    <View key={index} className='flex flex-row items-center justify-between p-5 border-b border-gray-100'>
                        <View className='flex flex-col'>
                            <Text className='text-lg font-bold'>{item.title}</Text>
                            <Text className='text-sm'>{item.body}</Text>
                        </View>
                        
                    </View>
                ))
            }
        </ScrollView>
    </View>
  )
}

export default Search