import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import Elivatedcard from './components/Elivatedcard'
import Fancycard from './components/Fancycard'
import Actioncard from './components/Actioncard'

const App = () => {
  return (
    <View>
      <ScrollView>
      <Flatcard/>
      <Elivatedcard/>
      <Fancycard/>
      <Fancycard/>
      <Fancycard/>
      <Actioncard/>
      </ScrollView>
    </View>
  )
}
export default App
