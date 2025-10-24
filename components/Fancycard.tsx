import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
    </View>
  )
}

const styles = StyleSheet.create({
     headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,

    },
})