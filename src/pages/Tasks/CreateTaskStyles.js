import { StyleSheet } from "react-native";

const CreateTaskStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    title:{
        fontSize: 17,
        fontWeight: "bold",
        alignSelf: "flex-start",
        color: "#4e4848",
        paddingBottom: 5,
    },
    taskInput: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 5,
        marginBottom: 25,
        paddingLeft: 15,
        borderColor: "#a1a1a1"
    },
    btnCreateNewTask: {
        width: "45%",
        backgroundColor: "#e8850c",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 40
    },
    btnBackToTasks:{
        width: "45%",
        backgroundColor: "#5D5FEF",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginVertical: 20
    }
})

export default CreateTaskStyles;