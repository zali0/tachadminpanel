import { Text, useSx, View, H1, P, Row, A, Flex } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { styled } from 'dripsy'
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons'
import { Platform } from 'react-native'
import { SIZES } from 'app/constants'

const Container = styled(View)({
  //   width: '15%',
  display: 'flex',
  flexDirection: Platform.OS === 'web' ? 'column' : 'row',
  justifyContent: 'space-between',
  padding: 20,
  borderRightWidth: 2,
  borderRightColor: '#000',
  //   borderRightWidth: '2px',
  //   borderRightColor: 'black',
})

const SidebarLink = styled(View)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: SIZES.$3,
})

const LinkName = styled(Text)({
  color: '$secondary',
  marginLeft: SIZES.$3,
  display: Platform.OS === 'web' ? 'inline' : 'none',
})

const SideBar = () => {
  return (
    <Container>
      <Link href="/">
        <SidebarLink>
          <MaterialCommunityIcons
            name="desktop-mac-dashboard"
            size={24}
            color="black"
          />
          <LinkName>Dashboard</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/users">
        <SidebarLink>
          <FontAwesome name="users" size={24} color="black" />
          <LinkName>Users</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <MaterialIcons name="store" size={24} color="black" />
          <LinkName>Tach Stores</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <Ionicons name="logo-dropbox" size={24} color="black" />
          <LinkName>Delivery Partners</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <Ionicons name="grid" size={24} color="black" />
          <LinkName>Categories</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <Ionicons name="logo-dropbox" size={24} color="black" />
          <LinkName>Products</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <Entypo name="list" size={24} color="black" />
          <LinkName>Orders</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <MaterialCommunityIcons
            name="view-dashboard-variant"
            size={24}
            color="black"
          />
          <LinkName>System Health</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <AntDesign name="user" size={24} color="black" />
          <LinkName>Profile</LinkName>
        </SidebarLink>
      </Link>
      <Link href="/login">
        <SidebarLink>
          <AntDesign name="poweroff" size={24} color="black" />
          <LinkName>Log Out</LinkName>
        </SidebarLink>
      </Link>
    </Container>
  )
}
export default SideBar
