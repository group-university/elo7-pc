import { Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import Styles from "./Styles";
import register from "../assets/Images/register.png";
import { Alert } from "react-native";

export default function Account({navigation}){
    return (
        <ScrollView contentContainerStyle={{ 
            flexGrow: 1, justifyContent: 'center', alignItems: "center" }} style={Styles.container}>
            <Image source={register} style={{width: 150, height: 150}}/>
            <Text style={Styles.textRegistry}>Vamos cadastrar suas informações</Text>
            <TextInput placeholder="Digite seu nome"
            style={Styles.inputs}/>
            <TextInput placeholder="Digite seu melhor e-mail"
            style={Styles.inputs}/>
            <TextInput placeholder="Crie sua senha" secureTextEntry={true}
            style={Styles.inputs}/>
            <TouchableOpacity style={Styles.btnCadastrar}>
                <Text style={Styles.Text} onPress={
                    () => Alert.alert('Sucesso', 'Conta criada com sucesso')}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.btnBackLogin} onPress={() => navigation.navigate('Home')}>
                <Text style={Styles.Text}>Voltar para o Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}