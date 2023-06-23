import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View,Text,Button} from "react-native";

export default function home({navigation}){
    return(
        <View>
        <Text> home </Text>
        <Button
        title="digimon"
        onPress={() => navigation.navigate("digimon")}
        />
        </View>
    );
}