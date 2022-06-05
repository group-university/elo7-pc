import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex: 3,
        flexDirection: 'column',
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
        alignSelf: 'flex-start',
        marginTop: "30%",
        backgroundColor: "#5D5FEF",
        width: "13%",
        padding: 12,
        borderRadius: 20,
        alignItems: "center"
    },
    btnLogOut:{
       alignSelf: 'flex-end',
       backgroundColor: '#e8850c',
       width: '40%',
       padding: 12,
       alignItems: 'center',
       borderRadius: 20
    }
})

export default Styles;