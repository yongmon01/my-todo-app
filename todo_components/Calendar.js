import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {
  constructor(props) {
    console.log('id: ',props.id)
    super(props);
    this.state = {
      selectedStartDate: null,
      id: props.id
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date
    });
    //this.props.onPutDue(date) //
    // ()=>{this.props.handleDue(this.props.id, this.state.selectedStartDate)}
    //console.log(this.props.id, this.state.selectedStartDate)
  }

  te(data){
    console.log(data)
  }

  tee(data, a){
    // this.props.handleDue(this.props.id, data)
    console.log(data, a)
  }

  // test10(){
  //   this.props.handleDue(this.props.id, this.state.selectedStartDate)
  // }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        {console.log(this.props)}
        <CalendarPicker
          onDateChange={this.onDateChange}
          // this.props.onPutDue(startDate)
        />
        {/* {console.log(props.onPutDue)} */}

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100, marginBottom: 120,
    
  },
});