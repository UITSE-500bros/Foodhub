import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import Quantity from './Quantity'
import Button from './Button'

const Productdetail = () => {
  useEffect(() => {
    // fetch(`https://fakestoreapi.com/products/${product_id}`)
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => console.error(error))
  }, [])
  const [data,setData] = React.useState<{ image: string, title: string } | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <View className='flex'>
      <View className='rounded-b-[25px] min-w-[300px] w-full h-[360px] px-[42px] pt-[100px] bg-[#F2F3F2]'>
        <Image source={require('../../assets/Vector.png')} className='' />
      </View>
      <View>
        <Text className='font-black text-base tracking-wide	'>Naturel Red Apple</Text>
        <Text className='text-[#7C7C7C] text-sm'>1kg, Price</Text>
        <Image source={require('../../assets/bookmark.png')} className='' />
        <Quantity />
        <Text className='font-black text-2xl tracking-wide	'>$4.99</Text>
      </View>
      <View className=' h-0.5 bg-black mx-6'/>
      <View>
        <View className='flex flex-row justify-between items-center mx-[25px]' >
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
      <Button width={364} height={67} title={'Add to cart'} onPress={function (): void {
        throw new Error('Function not implemented.')
      } } />
    </View>
  )
}

export default Productdetail