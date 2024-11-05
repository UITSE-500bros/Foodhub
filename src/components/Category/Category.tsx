
import React from 'react'
import { Image, Text,TouchableOpacity } from 'react-native'
interface CategoryProps {

  color: string;

}


const Category: React.FC<CategoryProps> = ({ color }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: color, 
      }} 
    className='rounded-2xl border border-solid border-rose-500 flex justify-center items-center gap-2 px-7 py-3 w-44 h-48' >
        <Image source={require('../../../assets/oil.png')} />
        <Text className='text-center text-xs font-semibold'>Thịt cá trứng, hải sản</Text>
    </TouchableOpacity>
  )
}

export default Category