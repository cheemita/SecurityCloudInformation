import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TopicsScreen from "./screens/TopicsScreen"; // Cambiado de HomeScreen a TopicsScreen
import TaskFormScreen from "./screens/TaskFormScreen";
import ChapterScreen from "./screens/ChapterScreen";
import cap1Screen1 from "./screens/cap1Screen1";
import cap1Screen2 from "./screens/cap1Screen2";
import cap1Screen3 from "./screens/cap1Screen3";
import cap1Screen4 from "./screens/cap1Screen4";
import cap1Screen5 from "./screens/cap1Screen5";
import cap1Screen6 from "./screens/cap1Screen6";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChapterScreen">
        <Stack.Screen
          name="ChapterScreen"
          component={ChapterScreen}
          options={{
            title: 'Chapters',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: 'Phishing',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="cap1Screen1"
          component={cap1Screen1}
          options={{
            title: 'Cap 1 - Nombre del Tema',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="cap1Screen2"
          component={cap1Screen2}
          options={{
            title: 'Cap 1 - Nombre del Tema 2',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="cap1Screen3"
          component={cap1Screen3}
          options={{
            title: 'Cap 1 - Nombre del Tema 3',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="cap1Screen4"
          component={cap1Screen4}
          options={{
            title: 'Cap 1 - Nombre del Tema 4',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="cap1Screen5"
          component={cap1Screen5}
          options={{
            title: 'Cap 1 - Nombre del Tema 5',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="cap1Screen6"
          component={cap1Screen6}
          options={{
            title: 'Cap 1 - Nombre del Tema 6',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="TopicsScreen"
          component={TopicsScreen}
          options={{
            title: 'Topics',
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#ffffff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
