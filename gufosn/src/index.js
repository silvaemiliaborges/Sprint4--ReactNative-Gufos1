import  MainScreen from './pages/main';
import ProfileScreen from './pages/profile';

import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './pages/signin';
// import { Colors } from 'react-native/Libraries/NewAppScreen';


//criar a navegação

const AuthStack = createStackNavigator({
    Sign: {screen: SignInScreen},

});

const MainNavegator= createBottomTabNavigator({
    Main: {
        screen: MainScreen,
        },
        Profile: {
            screen: ProfileScreen,
        }
});

//container
export default createAppContainer(
    createStackNavigator(
        {
            MainNavegator,
            AuthStack,
        },
        {
    initialRouteName: 'AuthStack'
},
));