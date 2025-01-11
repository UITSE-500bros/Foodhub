import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Active from './Active'
import Completed from './Completed'
import Canceled from './Canceled'
import { TabView, SceneMap } from 'react-native-tab-view'
export default function Orders() {
    const [index, setIndex] = React.useState(0)
    const layout = useWindowDimensions()
    const renderScene = SceneMap({
        active: Active,
        completed: Completed,
        canceled: Canceled,
    })
    const routes=[
        { key: 'active', title: 'Active' },
        { key: 'completed', title: 'Completed' },
        { key: 'canceled', title: 'Canceled' },
    ]
  return (
    <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}

       
    />
  )
}