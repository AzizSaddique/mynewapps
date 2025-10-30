import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
          uri: 'https://wpengine.com/wp-content/uploads/2021/05/optimize-images.jpg'
        }}
          style={styles.cardImage} />
        <View style={[styles.cardBody]}>
        <Text style={[styles.cardTitle]}>React icon</Text>
        <Text style={[styles.cardLable]}>For react native app</Text>
        <Text style={[styles.cardDescription]}>For react native app For react native app
          For react native app For react native app
          For react native app

        </Text>
        <Text style={[styles.cardFooter]}>React native series</Text>
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
  card: {
    width:340,
    height:360,
    borderRadius:10,
    marginVertical:12,
    marginHorizontal:10
  },
  cardElevated: {
    backgroundColor:'#ffff',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    }
  },
  cardImage: {
    height: 180,
    marginBottom:8,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12,
    
  },
  cardTitle:{
    color:'#0000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4,
  },
  cardDescription:{
    color:'#369bd5',
    fontSize:12,
    marginBottom:12,
    marginTop:6,
    flexShrink:1
    

  },
  cardFooter:{
    color:'#0000'
  },
  cardLable:{
    color:'#0000',
    fontSize:14,
    marginBottom:6,
  }

})