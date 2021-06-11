import React from 'react'
import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import TodoInsert from './TodoInsert'
import ListItem from './ListItem'

export default function(props) {

    const {todos, wrapperStyles, onAddTodo, onRemove, onToggle, due, onPutDue, handleToggle, handleDue} = props

    const todoCards = todos.map((card, key)=>{
        return <ListItem 
                key={card.id} id={card.id} txt={card.textValue} 
                checked={card.checked} onRemove={onRemove} onToggle={onToggle}
                handleToggle={handleToggle} 
                due={card.due} onPutDue={onPutDue} handleDue={handleDue}>
                    {console.log('card.due: ',card.due, ' (from AppBody)')}
                </ListItem> //
    })

    return (
        <View style = {{...wrapperStyles, ...styles.bodyContainer}}>
            <TodoInsert wrapperStyles={styles.flexOne} onAddTodo={onAddTodo}/>
            <View style={styles.flexEight}>
                <ScrollView>
                    {/* <ListItem/>
                    <ListItem/> */}
                    {todoCards}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyContainer:{
        flex: 6,
        backgroundColor: 'white',
        // paddingHorizontal: 60,
        marginLeft: 10,
        marginRight: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    flexOne: {
        flex: 1
    },
    flexEight: {
        flex: 8
    }
})