import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Quantity from '../components/Quantity'


const Productdetail = () => {
  useEffect(() => {
    // fetch(`https://fakestoreapi.com/products/${product_id}`)
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => console.error(error))
  }, [])
  const [data, setData] = React.useState<{ image: string, title: string } | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <View className='relative flex flex-1 w-full'>
      <View className='flex items-center rounded-b-[25px] min-w-[300px] w-full max-h-1/3 px-[42px] pt-[100px] bg-[#F2F3F2]'>
        <Image source={require('../../assets/Vector.png')}/>
      </View>
      <View className='flex flex-1 gap-4  px-[20px]' >
        <View className='flex flex-row justify-between'>
          <View>
            <Text className='font-black text-2xl tracking-wide'>Naturel Red Apple</Text>
            <Text className='text-[#7C7C7C] text-base'>1kg, Price</Text>
          </View>

          <Image source={require('../../assets/bookmark.png')} className='' />
        </View>
        <View className='flex flex-row justify-between'>
          <Quantity />
          <Text className='font-black text-2xl tracking-wide	'>$4.99</Text>
        </View>
        <View className=' h-0.5 bg-black' />
        <View>
          <View className='flex flex-row justify-between items-center' >
            <Text className='font-black text-base tracking-wide'>Description</Text>
            <TouchableOpacity onPress={toggle}>
              <Image source={require('../../assets/open.png')} className='' />
            </TouchableOpacity>
          </View>
          {isOpen && (
            <Text >
              An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.
            </Text>
          )}
        </View>
        <View className=' h-0.5 bg-black' />
        <View className='flex flex-row justify-between items-center'>
          <Text className='font-black text-base tracking-wide'>Review</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/arrow.png')} className='' />
          </TouchableOpacity>
        </View>

      </View>
      <TouchableOpacity className='bg-[#53B175] h-[70px] flex justify-center items-center self-center absolute bottom-[20px] max-w-[367px] w-full rounded-3xl'>
          <Text className='text-white text-lg font-semibold'>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Productdetail