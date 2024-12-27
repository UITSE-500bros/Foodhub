import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar'

export default function Search() {
  return (
    <SafeAreaView>
      <SearchBar/>
    </SafeAreaView>
  )
}