import { Text, useSx, View, H1, P, Row, A, Flex } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { styled } from 'dripsy'
import { SIZES } from 'app/constants'
import { Platform } from 'react-native'

const Container = styled(View)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 20,
  borderWidth: 0.5,
  bg: '$black',
  borderRadius: SIZES.$1,
  margin: SIZES.$2,
  width: Platform.OS === 'web' ? '' : '45%',
})

const Title = styled(Text)({
  fontWeight: 'bold',
  color: '$white',
})

const CurrentNumber = styled(Text)({
  fontSize: SIZES.$4,
  color: '$white',
})

const StyledText = styled(Text)({
  borderBottomWidth: SIZES.$xs,
  borderBottomColor: '$white',
  color: '$white',
  fontSize: 1,
})

const Widget = (props) => {
  const { title, currentNumber, link, linkText } = props
  return (
    <Container>
      <Title>{title}</Title>
      <CurrentNumber>{currentNumber}</CurrentNumber>
      <TextLink href={link}>
        <StyledText>{linkText}</StyledText>
      </TextLink>
    </Container>
  )
}
export default Widget
