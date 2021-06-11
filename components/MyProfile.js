import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';

export default function(props) {
    return (
        <View style={styles.container}>
            <Octicons style={styles.profile} name="person" size={30} color="black" />
            <View style={styles.description}>
                <Text style={styles.bold}>{props.name}  ({props.team})</Text>
                <Text>{props.stateMessage}</Text>
            </View>
            {/* <Text style={styles.userName}>{props.name}</Text>
            <Text style={styles.userTeam}>({props.team})</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    description: {
        flex: 11
    },
    profile: {
        flex: 2,
        // justifyContent: "center",
        // alignItems: "center"
    },
    bold: {
        fontWeight: 'bold'
    },
    userTeam: {
        flex: 7,
        color: 'gray'
    }
})