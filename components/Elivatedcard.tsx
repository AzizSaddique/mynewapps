import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Elivatedcard() {
    return (
        <View>
            <Text style={styles.headingText}>Elivatedcard</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text>Tap</Text>
                </View><View style={[styles.card, styles.cardElivated]}>
                    <Text>me</Text>
                </View><View style={[styles.card, styles.cardElivated]}>
                    <Text>To</Text>
                </View><View style={[styles.card, styles.cardElivated]}>
                    <Text>scroll</Text>
                </View><View style={[styles.card, styles.cardElivated]}>
                    <Text>more...</Text>
                </View><View style={[styles.card, styles.cardElivated]}>
                    <Text>😊</Text>
                </View>
            </ScrollView>
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
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 10
    },
    cardElivated: {
        backgroundColor: 'gray',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'red',
        shadowOpacity:0.4,
        shadowRadius:2
    }
})