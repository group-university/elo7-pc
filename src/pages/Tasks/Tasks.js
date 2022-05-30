import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import tasks from "../../data/tasks";
import no_found from "../assets/Images/no_found.png";
import Styles from "./Styles";
import { TouchableOpacity } from "react-native";

export default class Task extends Component {
    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.messageWithNoTasks}>Você não possui nenhuma tarefa</Text>
                <Image
                    source={no_found} style={{ width: 150, height: 150 }}
                />
                <TouchableOpacity style={Styles.btnCreateTask}>
                    <Text style={StyleSheet.create({color: "#fff"})}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}