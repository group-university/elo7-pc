import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home/Home";
import Account from "./src/pages/Account/Account";
import Tasks from "./src/pages/Tasks/Tasks";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" component={Home}
        options={{title:"Elo7", headerTintColor: 'white', headerStyle: {
          backgroundColor: "#5D5FEF", 
        }}}
        />
        <Stack.Screen
        name="Account" component={Account}
        options={{title:"Crie sua conta Elo7", headerTintColor: "white", headerStyle: {
          backgroundColor: "#e8850c",
        }}}
        />
        <Stack.Screen
        name="Tasks" component={Tasks}
        options={{title:"Elo7 - Suas Tarefas", headerTintColor: "white", headerStyle: {
          backgroundColor: "#5D5FEF",
        }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}