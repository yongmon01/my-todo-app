import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';

export default function(props) {
    return (
        <View style={styles.container}>
            {/* <Image style={styles.profile}
            source={{uri: 'https://reactjs.org/logo-og.png'}} 
            alt="any"></Image> */}
            <Octicons style={styles.profile} name="person" size={30} color="black" />
            {/* <Text style={styles.profile}>image</Text> */}
            <Text style={styles.userName}>{props.name}</Text>
            <Text style={styles.userTeam}>({props.team})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    profile: {
        flex: 2,
        // justifyContent: "center",
        // alignItems: "center"
    },
    userName: {
        flex: 3,
        fontWeight: 'bold'
    },
    userTeam: {
        flex: 7,
        color: 'gray'
    }
})