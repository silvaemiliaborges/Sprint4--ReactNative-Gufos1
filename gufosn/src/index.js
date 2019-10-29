

import  MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//criar a navegação
const MainNavegator= createBottomTabNavigator({
    Main: {
        screen: MainScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
});

    const styles = StyleSheet.create({
        backgroundColor: Colors.dark,s
        
    }) 
// const styles = StyleSheet.create({
//     tabela: {
//         backgroundColor: Colors.dark,
//         color: 'pink',

//         // color:blue,
//     },
//     tabela1: {
//         backgroundColor: Colors.black,
//         color: 'white',
//     },

//container
export default createAppContainer(MainNavegator);