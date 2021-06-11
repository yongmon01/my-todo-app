import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Calendar from './Calendar';
// import Dimensions from 'react-native-extra-dimensions-android'
import CalendarHook from './CalendarHook'

function ModalTester({due, onPutDue, handleDue, id}) {
  const [isModalVisible, setModalVisible] = useState(false);
  // const deviceWidth = Dimensions.get('window').width;
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title={due} onPress={toggleModal} style={{
       color: "white",
       fontSize: 2}}/>
      {/* <Text onPress={toggleModal} style={{flex:1, color:'black'}}>{due}</Text> */}
      {/* {console.log(due)} */}

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} 
        // deviceWidth={deviceWidth}>
      >
        <View style={{flex: 1}}>

          {/* <Button title="Hide modal" onPress={toggleModal} style={{width: 100, height: 100}}/> */}
          {/* <Text onPress={toggleModal} style={{backgroundColor:'white', width: 100, height: 100}}>Hide modal</Text> */}
          {/* <Calendar onPutDue={onPutDue} handleDue={handleDue} id={id}></Calendar> */}
          <CalendarHook onPutDue={onPutDue} handleDue={handleDue} id={id}></CalendarHook>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester