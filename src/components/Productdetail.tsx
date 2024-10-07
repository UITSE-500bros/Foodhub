import { View, Text ,Image} from 'react-native'
import React from 'react'

const Productdetail = (prop: any) => {
  return (
    <View>
      <Image source={prop.image}/>
      <Text>productdetail</Text>
    </View>
  )
}

export default Productdetail