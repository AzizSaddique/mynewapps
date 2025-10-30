import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import Elivatedcard from './components/Elivatedcard'
import Fancycard from './components/Fancycard'
import Actioncard from './components/Actioncard'

const App = () => {
  return (
    <View style={styles.allBody}>
      <ScrollView>
      <Flatcard/>
      <Elivatedcard/>
      <Fancycard/>
      <Actioncard/>
      </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
  allBody:{
    backgroundColor:'#ffff'
  }
})
export default App
