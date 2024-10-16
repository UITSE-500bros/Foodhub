import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Quantity = () => {
    const [quantity, setQuantity] = React.useState(1)
    const increment = () => {
        setQuantity(quantity + 1)
    }
    const decrement = () => {
        setQuantity(quantity - 1)
    }
  return (
    <View className='flex flex-row gap-2 items-center '>
        <TouchableOpacity onPress={decrement}>
            <Image source={require('../../assets/minus.png')} className='' />
        </TouchableOpacity>
        <View className='rounded-2xl border-[1px] border-[#E2E2E2] w-[45px] h-[45px] flex items-center justify-center'>
            <Text className='text-[#7C7C7C] text-lg '>{quantity}</Text>
        </View>
        <TouchableOpacity onPress={increment}>
            <Image source={require('../../assets/plus.png')} className='' />
        </TouchableOpacity>
    </View>
  )
}

export default Quantity