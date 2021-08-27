import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Chats from './Chats';
import Status from './Status';
import Calls from './Calls';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  
  return (
    <>
      <View style={styles.header}>
         <Text style={styles.header_title}>WhatsApp Clone</Text>
      </View>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Chats" component={Chats} />
          <Tab.Screen name="Status" component={Status} />
          <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
      </NavigationContainer>

       
    </> 
    
  );
};

const styles = StyleSheet.create({
 
  header: {
   
    padding: 20,
    backgroundColor: "#212529"
  },
  header_title:{
    fontSize: 25,
    color: '#adb5bd'
  },
});

export default App;
