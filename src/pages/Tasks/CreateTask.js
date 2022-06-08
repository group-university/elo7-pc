import { ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import react, { Component } from 'react';
import CreateTaskStyles from './CreateTaskStyles';
import list from "../assets/Images/list.png";

export default class CreateTask extends react.Component {

    constructor(props){
        super(props)
        this.state={
            newTask: ""
        }
    }

    validate_field=() => {
        
    }

    render(_navigation){
        return(
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: "center"}} 
            style={CreateTaskStyles.container}>
                <Text style={CreateTaskStyles.title}>Descrição da sua tarefa</Text>
                <TextInput placeholder='Digite sua tarefa' style={CreateTaskStyles.taskInput}></TextInput>
                <Image
                    source={list} style={{width: 150, height: 130}}
                />
                <TouchableOpacity style={CreateTaskStyles.btnCreateNewTask}>
                    <Text style={StyleSheet.create({color: "#fff"})}>Salvar Tarefa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={CreateTaskStyles.btnBackToTasks} onPress={
                    () => {this.props.navigation.navigate("Tasks")}}>
                    <Text style={StyleSheet.create({color: "#fff"})}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}