import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Calendar } from 'react-native-calendars';

function Events() {
  return (
    <View style={styles.container}>
   
    <Calendar
          style={{
              borderWidth: 5,
              borderColor: 'white',
              height: 350,
          }}
          theme={{
              textSectionTitleColor: 'black',
              selectedDayBackgroundColor: 'yellow',
              selectedDayTextColor: 'black',
              todayTextColor: 'white',
              todayBackgroundColor: 'purple',
              dayTextColor: 'black',
              dayBackgroundColor: 'white',
          }}/>
           <Text>{"\n"}</Text>
          <Button title="Show Events" color={'purple'}/></View>
  );
}

export default Events;

const styles = StyleSheet.create({

  text : {
    textAlign: 'center',
    padding: 20,
  }
 
});