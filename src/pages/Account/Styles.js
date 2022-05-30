import { StyleSheet, StatusBar } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: StatusBar.currentHeight,
    },
    textRegistry: {
        paddingTop: "5%",
        paddingBottom: "5%",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: "#e8850c"
    },
    inputs: {
        height: 40,
        width: "80%",
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 5,
        paddingLeft: 15,
        borderColor: "#a1a1a1",
    },
    btnCadastrar: {
        marginVertical: "5%",
        alignItems: "center",
        backgroundColor: "#e8850c",
        width: "50%",
        padding: 10,
        borderRadius: 20,
    },
    btnBackLogin: {
        alignItems: "center",
        backgroundColor: "#5D5FEF",
        width: "50%",
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    Text: {
        color: "#fff",
    }
})

export default Styles;