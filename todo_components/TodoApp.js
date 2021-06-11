import React from 'react'
import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import FriendPage from '../components/FriendPage'
import AppBody from './AppBody'
import AppHeader from './AppHeader'
import Calendar from './Calendar'
import ModalTester from './ModalTester'
import ModalExample from './test'
import CalendarHook from './CalendarHook'

export default function() {
    const [todos, setTodos] = useState([{id: '123', textValue: 'this is test', checked: false, due: 'DUE'},
        {id: '1234', textValue: 'rksk ekfk aktkdk', checked: false, due: 'DUE' }])
    const addTodo = Text => {
        // 잘못된 예시.. 참조값이 변하지 않아서 컴포넌트가 다시 렌더링 되지않는다
        // const c = todos;
        // c.push({id: Math.random().toString(), textValue: Text, checked: false});
        // setTodos(c);
        // console.log(todos.length)

        setTodos([
            ...todos,
            {id: Math.random().toString(), textValue: Text, checked: false, due: 'DUE'}
        ])
    }
    const Remove = id => e => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    const Toggle = id => e => {
        // console.log(todos[0].checked)
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo
            )
        )
    }

    //우석님
    const handleToggle = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo
            )
        )
    }
    // const putDue = dd = e => {
    //     setTodos(
    //         todos.map(todo =>
    //             1 === 1 ? {...todo, due: dd} : todo
    //         )
    //     )
    // }
    const handleDue = (id, dDate) => {
        console.log(id, dDate,' from TodoApp.js handleDue')
        setTodos(
            todos.map( todo =>
                todo.id === id? {...todo, due: dDate} : todo
            )
        )
    }

    const putDue = id = dd => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, due: dd} : todo
            )
        )
    }
    
    return (
        <View style = {styles.container}>
            <AppHeader wrapperStyles={styles.flexOne}/>
            <AppBody wrapperStyles={styles.flexSix} 
                todos={todos} onAddTodo={addTodo} onRemove={Remove} onToggle={Toggle} due='DUE' onPutDue={putDue}
                handleToggle ={handleToggle} handleDue={handleDue}
            />
            {/* <ScrollView><Calendar></Calendar></ScrollView> */}

            {/* <ModalExample /> */}
            
            {/* <FriendPage/> */}
            
            {/* <ModalTester></ModalTester> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3143e8'
    },
    flexOne:{
        flex: 1
    },
    flexSix: {
        flex: 6
    }
})