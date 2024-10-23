import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import ProductCard from '../components/Cards/ProductCard'

const Favorite = () => {
  const [data, setData] = React.useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
  })
  return (
    <View className='relative'>
      <Text className='text-center absolute'>Favorite</Text>
      <View className='h-[1px] w-full bg-[#E2E2E2] absolute'/>
      <ScrollView className=''>
        {
          data && (
            data.map((item: any, index: number) => (
              <ProductCard key={index} adjust={false} />
            ))
          )
        }
      </ScrollView>
      <TouchableOpacity className='absolute bottom-0  bg-red-500' onPress={() => console.log('Add to Cart')} >
          <Text>Add to Cart</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Favorite