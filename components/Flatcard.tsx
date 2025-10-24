import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Flatcard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatcard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
        
         
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding:8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 100,
    borderRadius: 4,
    margin: 10
  },
  cardOne: {
    backgroundColor: 'red'
  }, cardTwo: {
    backgroundColor: 'blue'
  }, cardThree: {
    backgroundColor: 'green'
  }
})

export default Flatcard