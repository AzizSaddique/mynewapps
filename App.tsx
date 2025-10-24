import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import Elivatedcard from './components/Elivatedcard'
import Fancycard from './components/Fancycard'

const App = () => {
  return (
    <View>
      <ScrollView>
      <Flatcard/>
      <Elivatedcard/>
      <Fancycard/>
      </ScrollView>
    </View>
  )
}
export default App
