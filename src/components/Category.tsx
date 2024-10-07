import { Text, View,Image } from 'react-native'
import React from 'react'

const Category = (pros:any) => {
  return (
    <View>
        <Image source={pros.img} />
        <Text>{pros.name}</Text>
    </View>
  )
}

export default Category

