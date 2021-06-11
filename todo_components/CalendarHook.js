import { template } from '@babel/core';
import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment'

export default function CalendarHook({onPutDue={onPutDue}, handleDue={handleDue}, id={id}}) {

    const [da, setDa] = useState('')
    const [tst, setTst] =useState('')

    useEffect(()=>{
        //console.log(id)
    }, [da])

    function tes(data){
        console.log('data;;',data)
        setDa(data)
    }

    function test(data){
        console.log('@',id,data)
        setTst(data)
        console.log('tst..', tst)
        var arr = data.toString().split(' ')
        var temp = arr[1]+arr[2]
        handleDue(id,temp)
        customDatesStyles.push({date: data, style:{backgroundColor:'yellow'}})
    }

    let customDatesStyles = [{date: "2021-06-30T00:00:00.000Z", style:{backgroundColor:'yellow'}}];

    // let today = moment();
    // let day = today.clone().startOf('month');
    // console.log('day: ',day)
    // let customDatesStyles = [];
    // while(day.add(1, 'day').isSame(today, 'month')) {
    //     console.log(day)
    //   customDatesStyles.push({
    //     date: day.clone(),
    //     // Random colors
    //     style: {backgroundColor: '#'+('#00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)},
    //     textStyle: {color: 'black'}, // sets the font color
    //     containerStyle: [], // extra styling for day container
    //     allowDisabled: true, // allow custom style to apply to disabled dates
    //   });
    // }

    return(
        <View style={styles.container}>
            <CalendarPicker
                // onDateChange={()=>{handleDue(id,'xx')}}
                onDateChange={test}
                // months={['1','2','3','4','5','6','7','8','9','10','11','12']}
                startFromMonday={false}
                selectedDayColor={'red'}
                customDatesStyles={customDatesStyles}
            />

            <View>
            <Text>SELECTED DATE:x</Text>
            </View>
        </View>
    )

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100, marginBottom: 120,
  },
});