import React from "react";
import {View,Text} from "react-native";

import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack"

import home from './src/pages/home'
import dig from "./src/pages/dig";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen 
        name='home' 
        component={home}
        options={{
          title: "BEM VINDO AO DIGIMON CARDS",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff"
        }

        }
       
        />
      
      <Stack.Screen 
        name='digimon' 
        component={dig}
        />

      </Stack.Navigator>
    </NavigationContainer>
    // <Text>nmnbjkbjbj   hjhh jhg</Text>
  );
};
 