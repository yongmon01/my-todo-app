import React from 'react'
import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import ModalTester from './ModalTester';

export default function(props) {
    
    const {id, txt, checked, onRemove, onToggle, due, onPutDue, handleToggle, handleDue} = props

    const test = aa => e=> {
        console.log(aa)
    }
    const test2 = () => {
        console.log('test2')
    }
    // function test3(vd){
    //     return e(
    //         console.log(vd)
    //     )
    // }
    // const onToggle = id => e => {
    //     // console.log(todos[0].checked)
    //     setTodos(
    //         todos.map(todo =>
    //             todo.id === id ? {...todo, checked: !todo.checked} : todo
    //         )
    //     )
    // }

    const next = e => {
        // console.log(todos[0].checked)
        setTodos(
            todos.map(todo =>
                todo.id === '12312' ? {...todo, checked: !todo.checked} : todo
            )
        )
    }

    return (
        <View style={styles.listItemContainer}>
            {/* <TouchableOpacity onPress={onToggle(id)}> */}
            <TouchableOpacity onPress={()=>{handleToggle(id)}}>
                {checked ? 
                    (
                        <Icon name="circledowno" size={30} color="#3143e8" style={styles.marginTwenty}/>
                    ):(
                        <View style={[styles.circle, styles.marginTwenty]}></View>
                    )
                }
                {/* <View style={styles.circle}>
                    <Icon name="circledowno" size={30} color="#3143e8" />
                </View> */}
            </TouchableOpacity>

            {/* onpress onpressout? */}

            <Text style={[styles.flexFive, checked ? styles.strikeTxt : styles.txt]}>{txt}</Text>
            {/* 텍스트 제한 기능도 넣어보기 */}
            {console.log('due: ',due,' (from listItem)')}
            {/* <Text style={{backgroundColor:'gray', flex:1}}>{dueDate}</Text> */}
            <ModalTester due={due} onPutDue={onPutDue} handleDue={handleDue} id={id}></ModalTester>

            <TouchableOpacity onPress={onRemove(id)} style={styles.flexOne} >
                <Text ><Icon name="delete" size={30} color="#e33057" /></Text>
                {/* <Icon name="delete" size={30} color="#e33057" /> */}
                {/* <Text style={styles.buttonText}>
                <Icon name="delete" size={30} color="#e33057" />
                </Text> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
    },
    marginTwenty: {
        marginRight: 20,
        marginLeft: 20
    },
    txt: {
        fontWeight: 'bold',
        color:'#000000'
    },
    strikeTxt: {
        fontWeight: 'bold',
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    remove:{
    },
    flexOne:{
        flex: 1
    },
    flexFive: {
        flex: 5
    }
})