import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contactlist() {
    const contacts = [
        {
            uid: '1',
            name: 'Alice Johnson',
            status: 'Online',
            imageUrl: 'https://wpengine.com/wp-content/uploads/2021/05/optimize-images.jpg',
        },
        {
            uid: '2',
            name: 'Bob Smith',
            status: 'Offline',
            imageUrl: 'https://wpengine.com/wp-content/uploads/2021/05/optimize-images.jpg',
        },
        {
            uid: '3',
            name: 'Charlie Lee',
            status: 'Busy',
            imageUrl: 'https://wpengine.com/wp-content/uploads/2021/05/optimize-images.jpg',
        },
        {
            uid: '4',
            name: 'Diana Prince',
            status: 'Away',
            imageUrl: 'https://wpengine.com/wp-content/uploads/2021/05/optimize-images.jpg',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contactlist</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{ uri: imageUrl }} style={styles.imageCard} />
                        <View>
                        <Text style={styles.nameCard}>{name}</Text>
                        <Text style={styles.statusCard}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontWeight:'bold',
        fontSize: 20,
        paddingHorizontal: 10,
    },
    container: {
        paddingHorizontal:10,

    },
    userCard: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#d7529dff',
        marginVertical:4,
        borderRadius:14
        
    },
    imageCard: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        margin:12
    },
    nameCard: {
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
    },
    statusCard: {
        fontSize:12,
        color:'#505450ff'
    },
})