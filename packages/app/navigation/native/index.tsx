import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from 'app/features/login/login'
import { TachStoresScreen } from 'app/features/tachStores/tachStores'
import { UsersScreen } from 'app/features/users/users'
import AddStore from '../../../../apps/next/pages/stores/addStore'

import { HomeScreen } from '../../features/home/screen'
// import { UserDetailScreen } from '../../features/users/users'

const Stack = createNativeStackNavigator<{
  login: undefined
  home: undefined
  users: undefined
  stores: undefined
  addStore: undefined
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
      <Stack.Screen
        name="stores"
        component={TachStoresScreen}
        options={{
          title: 'Stores',
        }}
      />
      <Stack.Screen
        name="addStore"
        component={AddStore}
        options={{
          title: 'AddStore',
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
