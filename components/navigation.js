import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/homescreen';
import CourseLibrary from '../components/courselibrary';
import QuizScreen from '../components/quizscreen'

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CourseLibrary" component={CourseLibrary} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
    </Stack.Navigator>
  );
}
