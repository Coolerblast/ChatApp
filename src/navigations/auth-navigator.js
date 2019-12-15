import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen, SignUpScreen } from '_scenes/login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  SignUp: SignUpScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
