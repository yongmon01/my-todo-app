import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
// import Search from '../asset/Icon/search.svg';
// import AddFriend from '../asset/Icon/add_friends.svg';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

export default function(props) {
    const {wrapperStyle} = props;

    // const mainHeaderRightAreaButtons = [
    //     {
    //       type: 'icon',
    //       comp: <Search width={20} height={20} margin={10} fill="black" />
    //     //   onPress: handleSearchPage,
    //     },
    //     {
    //       type: 'icon',
    //       comp: <AddFriend width={20} height={20} margin={10} fill="black" />
    //     //   onPress: handleAddPage,
    //     },
    // ];

    return (
        <View style = {{...wrapperStyle, ...styles.container}}>
            <View style={styles.flexFive}>
                <Text style ={styles.bold}>Friends</Text>
            </View>
            <Ionicons style={styles.flexOne} name="search" size={30} color="black" />
            <MaterialIcons style={styles.flexOne} name="person-add" size={30} color="black" />
            <Octicons style={styles.flexOne} name="pencil" size={30} color="black" />
            <Octicons style={styles.flexOne} name="person" size={30} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    flexFive: {
        flex: 5
    },
    flexOne: {
        flex: 1
    },
    bold: {
        fontWeight: 'bold'
    }
    // profile: {
    //     flex: 2,
    //     // justifyContent: "center",
    //     // alignItems: "center"
    // },
    // userName: {
    //     flex: 3,
    //     fontWeight: 'bold'
    // },
    // userTeam: {
    //     flex: 7
    // }
    // container: {
    //     flexDirection: 'row',
    //     paddingHorizontal: 10,
    //     alignItems: 'center'
    // },
    // profile: {
    //     flex: 2,
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    // description: {
    //     flex: 8,
    //     backgroundColor: 'gray'
    // }
})