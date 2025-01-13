import { View, Text } from 'react-native'
import React from 'react'
import { OrdersProps } from './Orders'

export default function Canceled({ orders }: OrdersProps) {
  return (
    <View>
      <Text>Canceled</Text>
    </View>
  )
}