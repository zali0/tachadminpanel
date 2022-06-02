import { Text, useSx, View, H1, P, Row, A, Flex } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { styled } from 'dripsy'

const Container = styled(View)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 20,
})

const LogoName = styled(Text)({
  color: '$primary',
})

const User = styled(Text)({
  color: '$secondary',
})
const Navbar = () => {
  return (
    <Container>
      <LogoName>Tach</LogoName>
      <User>Welcome, Irfan</User>
    </Container>
  )
}
export default Navbar
