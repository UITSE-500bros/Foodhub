import { View, Text, FlatList,Image } from 'react-native'
import React, { useState } from 'react'

const ImageCarousel = () => {
  
  return (
    <View className='w-full mx-3'>
      <FlatList
       data={[1,2,3,4]}
       renderItem={()=>{
        return(
          <View>
            <Image
            source={{uri:`https://picsum.photos/300/115?random=${Math.random()}`}}
            className='w-[600] h-[200px] rounded-lg'
            />     
          </View>
        )
       }}
        keyExtractor={(item)=>item.toString()}
        horizontal
      />
      
    </View>
  )
}

export default ImageCarousel