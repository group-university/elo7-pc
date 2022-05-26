import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        paddingBottom: "5%",
        fontSize: 30,
        color: "#5D5FEF",
        fontWeight: "bold",
    },
    subTitle:{
        color: "#e8850c",
        fontSize: 18,
    },
    inputEmail: {
        height: 40,
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 15,
        borderColor: "#a1a1a1",
    },
    inputPassword: {
        height: 40,
        width: "80%",
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 15,
        borderColor: "#a1a1a1",
    },
    messageCreateAccount: {
        paddingTop: "5%",
    },
    btnLogin: {
        alignItems: "center",
        backgroundColor: "#5D5FEF",
        width: "50%",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    btnRegister: {
        alignItems: "center",
        backgroundColor: "#e8850c",
        width: "50%",
        padding: 10,
        borderRadius: 20,
    },
    Text:{
        color: "white",
    }
});

export default Styles;