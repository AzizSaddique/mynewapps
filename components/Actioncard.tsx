import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Actioncard() {
  function openWebsite(websiteLink: string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card,styles.elivatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Im new in react native</Text>
        </View>
        <Image source={{uri:''}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{

  },
  card:{

  },
  elivatedCard:{

  },
  headerText:{

  },
  headingContainer:{

  }
})