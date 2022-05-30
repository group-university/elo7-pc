import react, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Alert } from "react-native";
import Styles from "./Styles";
import logo from "../assets/Images/logo.png";

export default class Home extends react.Component {

    constructor (props){
        super(props)
        this.state={
            username: "",
            password: "",
        }
    }

    validate_field=()=>{
        const {username, password} = this.state
        if(username == ''){
            Alert.alert('Aviso', 'preencha o campo de nome')
            return false
        }else if(password == ''){
            Alert.alert('Aviso', 'preencha o campo de senha')
            return false
        }
        return true
    }

    making_api_call=() => {
        if(this.validate_field()){
            Alert.alert('Sucesso', 'Login realizado com sucesso')
            return this.props.navigation.navigate("Tasks")
        }
    }

    render(_navigation) {
        return (
            <View style={Styles.container}>
                <Image
                    source={logo} style={{ width: 100, height: 90 }}
                />
                <TextInput style={Styles.inputEmail} placeholder="Digite seu email"
                onChangeText={(value) => this.setState({username: value})} />
                <TextInput style={Styles.inputPassword} placeholder="Digite sua senha" secureTextEntry={true} 
                onChangeText={(value) => this.setState({password: value})} />

                <TouchableOpacity style={Styles.btnLogin} 
                onPress={() => this.making_api_call()}
                >
                    <Text style={Styles.Text}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.btnRegister}>
                    <Text style={Styles.Text} onPress={
                        () => this.props.navigation.navigate("Account")}>
                        Crie sua conta</Text>
                </TouchableOpacity>
            </View>
        );
    }

}
