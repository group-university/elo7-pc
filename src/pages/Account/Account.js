import react, { Component } from "react";
import { Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import Styles from "./Styles";
import register from "../assets/Images/register.png";
import { Alert } from "react-native";

export default class Account extends Component {

    constructor(props){
        super(props)
        this.state={
            username: "",
            email: "",
            password: "",
        }
    }

    validate_field=()=>{
        const {username, email, password} = this.state
        if(username == ''){
            Alert.alert('Aviso', 'preencha o campo de nome')
            return false
        }else if(email == ''){
            Alert.alert('Aviso', 'preencha o campo de email')
            return false
        }else if(password == ''){
            Alert.alert('Aviso', 'preencha o campo de senha')
            return false
        }
        return true
    }

    making_api_call=() => {
        if(this.validate_field()){
            Alert.alert('Sucesso', 'Cadastro de ' + `${this.state.username}` + ' realizado com sucesso!')
            return this.props.navigation.navigate("Home")
        }
    }

    render(_navigation){
        return(
            <ScrollView contentContainerStyle={{
                flexGrow: 1, justifyContent: 'center', alignItems: "center"
            }} style={Styles.container}>
                <Image source={register} style={{ width: 150, height: 150 }} />
                <Text style={Styles.textRegistry}>Vamos cadastrar suas informações</Text>
                <TextInput placeholder="Digite seu nome" style={Styles.inputs}  
                onChangeText={(value) => this.setState({username: value})}/>
                <TextInput placeholder="Digite seu melhor e-mail"
                    style={Styles.inputs} 
                    onChangeText={(value) => this.setState({email: value})} />
                <TextInput placeholder="Crie sua senha" secureTextEntry={true}
                    style={Styles.inputs} onChangeText={(value) => this.setState({password: value})} />
                <TouchableOpacity style={Styles.btnCadastrar}
                onPress={() => this.making_api_call()}>
                    <Text style={Styles.Text}>Cadastrar</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={Styles.btnBackLogin} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={Styles.Text}>Voltar para o Login</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}