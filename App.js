import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileProvider } from './components/ProfileContext';
import AssignmentRoll from './components/AssignmentRoll';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ProfileProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Arvonta" component={AssignmentRoll} />
      </Tab.Navigator>
    </NavigationContainer>
    </ProfileProvider>
  );
}
