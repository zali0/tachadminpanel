import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from 'app/features/login/login'
import { UsersScreen } from 'app/features/users/users'

import { HomeScreen } from '../../features/home/screen'
// import { UserDetailScreen } from '../../features/users/users'

const Stack = createNativeStackNavigator<{
  login: undefined
  home: undefined
  users: undefined
  // 'user-detail': {
  //   id: string
  // }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="users"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />

      <Stack.Screen
        name="users"
        component={UsersScreen}
        options={{
          title: 'Users',
        }}
      />
      {/* <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      /> */}
    </Stack.Navigator>
  )
}
