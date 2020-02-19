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

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
    Register: RegisterScreen,
    Login: LoginScreen,
    Feed: FeedScreen,
    Forgot: ForgotPassword,
    Reset: ResetPassword,
    Errand: PostErrands,
    Location: LocationScreen,
    Category: CategoryScreen,
    Details: DetailsScreen,
    Reviews: ReviewScreen
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
