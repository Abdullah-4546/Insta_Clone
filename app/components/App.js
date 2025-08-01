import { createStackNavigator } from '@react-navigation/stack';



import EditProfileScreen from '../components/EditProfileScreen';
import FollowersScreen from '../components/FollowersScreen';
import FollowingScreen from '../components/FollowingScreen';
import FollowRequestScreen from '../components/FollowRequestScreen';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import MessagesScreen from '../components/MessagesScreen';
import PostScreen from '../components/PostScreen';
import ProfileManagementScreen from '../components/ProfileManagementScreen';
import ProfileScreen from '../components/ProfileScreen';
import ReelsScreen from '../components/ReelsScreen';
import RegisterScreen from '../components/RegisterScreen';
import SearchScreen from '../components/SearchScreen';
import StoriesScreen from '../components/StoriesScreen';
import WelcomeScreen from '../components/WelcomeScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen.js';


const Stack = createStackNavigator();

export default function App() {
  return (

      <Stack.Navigator
        initialRouteName="Welcome" 
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Home' }} 
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Followers" component={FollowersScreen} />
        <Stack.Screen name="Following" component={FollowingScreen} />
        <Stack.Screen name="FollowRequest" component={FollowRequestScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Reels" component={ReelsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Stories" component={StoriesScreen} />
        <Stack.Screen name="ProfileManagement" component={ProfileManagementScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
      </Stack.Navigator>

  );
}
