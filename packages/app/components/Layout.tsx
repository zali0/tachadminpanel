import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { styled } from 'dripsy'
import { Platform, StatusBar } from 'react-native'
import Navbar from './Navbar'
import SideBar from './Sidebar'
import { SIZES } from 'app/constants'
// import NavBar from './NavBar'
// import SideBar from './Sidebar'
// import Dashboard from './Dashboard'

const Container = styled(View)({
  width: '100%',
  height: '100%',
  paddingTop: StatusBar.currentHeight,
})

const SubContainer = styled(View)({
  // width: '100%',
  display: 'flex',
  flexDirection: Platform.OS === 'web' ? 'row' : 'column',
})

const Content = styled(View)({
  margin: SIZES.$3,
})
export function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SideBar />
        <Content>{children}</Content>
      </SubContainer>
    </Container>
  )
}
