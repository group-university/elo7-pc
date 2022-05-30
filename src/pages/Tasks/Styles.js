import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff"
    },
    messageWithNoTasks:{
        fontSize: 30,
        textAlign: "center",
        color: "#4E4848"
    },
    btnCreateTask: {
        marginTop: "30%",
        backgroundColor: "#5D5FEF",
        width: "13%",
        padding: 12,
        borderRadius: 20,
        alignItems: "center"
    }
})

export default Styles;