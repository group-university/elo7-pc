import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Alert } from "react-native";
import Styles from "./Styles";
import logo from "../assets/Images/logo.png";

export default function Home({navigation}) {

    return (
        <View style={Styles.container}>
            <Image
               source={logo} style={{width: 100, height: 90}}
            />
            <TextInput style={Styles.inputEmail} placeholder="Digite seu email"/>
            <TextInput style={Styles.inputPassword} 
            placeholder="Digite sua senha" secureTextEntry={true} />
            <TouchableOpacity style={Styles.btnLogin} onPress={
                () => Alert.alert('Aviso!', 'usuário ou senha incorreto')}>
                <Text style={Styles.Text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btnRegister}>
                <Text style={Styles.Text} onPress={
                    () => navigation.navigate("Account")}>
                    Criar uma conta</Text>
            </TouchableOpacity>
        </View>
    );
}
