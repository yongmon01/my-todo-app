import React from 'react'
import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'

export default function(props) {

    return (
        <View style = {{...props.wrapperStyles,...styles.headerContainer}}>
            <Text style = {styles.txt}>Hello Todolist</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 64
    },
    txt: {
        fontSize: 32,
        color: "white"
    }
})