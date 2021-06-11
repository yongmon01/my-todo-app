import React from 'react'
import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput, Button} from 'react-native'

export default function(props) {

    const {wrapperStyles, onAddTodo} = props;

    const [newItem, setNewItem] = useState('');
    const addTodoHandler = () => {
        onAddTodo(newItem)
        setNewItem('')
    }
    const todoInputHandler = tt => {
        setNewItem(tt)
    }
    
    return (
        <View style={{...wrapperStyles, ...styles.container}}>
            <TextInput style={[styles.flexThree, styles.input]}
                placeholder = "Add an todo list!"
                value = {newItem}
                onChangeText = {todoInputHandler}
            />
            {/* {console.log(onAddTodo)} */}
            <Button style={styles.flexOne} title={'ADD'} color='#3143e8' onPress={addTodoHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    flexThree:{
        flex: 3,
    },
    flexOne:{
        flex: 1
    },
    input: {
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: 'red',
        borderBottomWidth: 2
    }
})