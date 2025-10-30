import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Actioncard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elivatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Im new in react native</Text>
        </View>
        <Image source={{ uri: 'https://wpengine.com/_next/image/?url=https%3A%2F%2Fwpmktgatlas.wpengine.com%2Fwp-content%2Fuploads%2F2024%2F12%2Fhp-support-sbs-1.jpg&w=1200&q=80' }} style={styles.imageCard} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam inventore vitae provident. Eveniet tempore aspernatur blanditiis harum error, repellat commodi labore consequatur vel, accusamus ut maiores magni quae explicabo facilis cumque.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.button1}>
            <TouchableOpacity onPress={() => openWebsite('https://wpengine.com/')}>
              <Text>Read more</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button2}>
            <TouchableOpacity onPress={() => openWebsite('https://instagram.com/')}>
              <Text>Follow me</Text>
            </TouchableOpacity>
          </View>
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
    width: 340,
    height: 380,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
    backgroundColor: '#c46e6eff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }

  },
  elivatedCard: {
    marginVertical: 10
  },
  headerText: {
    color: '#ffff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageCard: {
    height: 180,

    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16,
    backgroundColor: '#ffff',
    paddingVertical: 6,
    width: 100
  },
  button2: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16,
    backgroundColor: '#ffff',
    paddingVertical: 6,
    width: 100
  }
})