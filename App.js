import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import FeedScreen from './src/screens/FeedScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
    Feed: FeedScreen,
    Forgot: ForgotPassword,
    Reset: ResetPassword
  },
  {
    initialRouteName: "Home",
    headerMode: null,
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
