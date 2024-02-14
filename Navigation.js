import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import TwoD from './TwoDimension';
import Events from './Events';
import ThreeD from './ThreeDimension';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: [
          {
            display: 'flex',
          },
        ],
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconSize = 30; // Adjust the icon size here

          if (route.name === '2D Page') {
            iconName = 'map';
          } else if (route.name === 'Events Page') {
            iconName = 'calendar';
          } else if (route.name === '3D Page') {
            iconName = 'cube';
          }

          return <MaterialCommunityIcons name={iconName} size={iconSize} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="2D Page"
        component={TwoD}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          }
        }}
      />
      <Tab.Screen
        name="Events Page"
        component={Events}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          }
          
        }}
      />
      <Tab.Screen
        name="3D Page"
        component={ThreeD}
        options={{  
          headerTitleStyle: {
            fontSize: 20,
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

