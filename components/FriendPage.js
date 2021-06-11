import React from 'react'
import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import FriendBlock from './FriendBlock'
import Top from './Top'
import MyProfile from './MyProfile'

export default function() {
    // const [Friends, setFriends] = useState([]);
    const friends = [
        {name: 'cheese', team: 'A&C', id:'123'},
        {name: 'kim', team: 'A&C', id:'124'},
        {name: 'kay', team: 'A&C', id:'125'},
        {name: 'lee', team: 'A&C', id:'126'},
        {name: 'park', team: 'A&C', id:'127'},
        {name: 'soo', team: 'A&C', id:'128'},
        {name: 'min', team: 'A&C', id:'193'},
        {name: 'chul', team: 'Soft', id:'1231'},
        {name: 'goo', team: 'Soft', id:'1232'},
        {name: 'summer', team: 'Soft', id:'1233'},
        {name: 'jeong', team: 'Soft', id:'1234'},
        {name: 'mom', team: 'Soft', id:'1235'},
        {name: 'dad', team: 'Soft', id:'1236'},
    ]

    const friendCards = friends.map((friend, key)=>{
        return <FriendBlock key={key} name={friend.name} team={friend.team}/>
    })

    return (
        <View style = {styles.container}>
            {/* <View style = {styles.top}><Top/></View> */}
            <Top wrapperStyle={styles.top}/>
            <View style = {styles.myProfile}><MyProfile name={'Hoyong Lee'} team={'A&C'} stateMessage={'abcdefghi jklmn'}/></View>
            <View style = {styles.padding}><Text>Friends {friendCards.length}</Text></View>
            <View style = {styles.scrollContainer}>
                {/* <ScrollView>
                    {friendCards}
                </ScrollView> */}
                <FlatList
                    keyExtractor={item => item.id}
                    data={friends}
                    // renderItem={({item}) => <Item num={item}/>}
                    renderItem={({item}) => <FriendBlock name={item.name} team={item.team}/>}
                    windowSize={2}
                />
                {/* export default React.memo(Item); <- 불필요하게 재 랜더링 안함 */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // ,justifyContent: "center"
        // ,alignItems: "center"
    },
    top: {
        flex: 1,
        borderWidth:2
    },
    myProfile: {
        flex: 1,
        backgroundColor: 'gray'
    },
    scrollContainer: {
        flex: 11
    },
    padding:{
        paddingHorizontal: 10
    }
})