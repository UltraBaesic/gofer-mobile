import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import PostErrands from '../screens/PostErrands';
import CategoryScreen from '../screens/CategoryScreen'
import LocationScreen from '../screens/LocationScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ReviewScreen from '../screens/ReviewScreen';
import ErrandScreen from '../screens/ErrandScreen';

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
    Feed: FeedScreen,
    Forgot: ForgotPassword,
    Reset: ResetPassword,
    Post: PostErrands,
    Location: LocationScreen,
    Category: CategoryScreen,
    Details: DetailsScreen,
    Reviews: ReviewScreen,
    Errand: ErrandScreen
  },
  {
    initialRouteName: "Home",
    headerMode: null,
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(Navigator);
