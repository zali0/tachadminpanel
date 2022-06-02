import { SIZES } from 'app/constants'
import { Text, useSx, View, H1, P, Row, A, styled, TextInput } from 'dripsy'
import React from 'react'
import { Platform } from 'react-native'
import { Link, TextLink } from 'solito/link'

const Container = styled(View)({
  width: '100%',
  height: '100%',
  flexDirection: Platform.OS === 'web' ? 'row' : 'column',
})

const Showcase = styled(View)({
  flex: 1,
  bg: '$darkSecondary',
})

const Login = styled(View)({
  flex: 1,
  justifyContent: 'space-around',
})

const CompanyName = styled(Text)({
  color: '$primary',
  textAlign: 'center',
  fontSize: SIZES.$1,
  fontWeight: 'bold',
})

const Form = styled(View)({
  width: '75%',
  alignSelf: 'center',
})

const WelcomeText = styled(Text)({
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
})

const Field = styled(View)({
  width: '75%',
  alignSelf: 'center',
})
const FieldName = styled(Text)({
  marginTop: SIZES.$2,
})

const FieldValue = styled(TextInput)({
  borderBottomWidth: 2,
  fontSize: SIZES.$1,
})

const LoginButton = styled(View)({
  width: '50%',
  bg: '$primary',
  color: '#fff',
  padding: SIZES.$2,
  marginTop: SIZES.$4,
  borderRadius: SIZES.$2,
  alignSelf: 'center',
})

const LoginButtonText = styled(Text)({
  textAlign: 'center',
  fontSize: SIZES.$3,
  fontWeight: 'bold',
})
const Footer = styled(Text)({
  textAlign: 'center',
})

export function LoginScreen() {
  const sx = useSx()
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  return (
    <Container>
      <Showcase></Showcase>
      <Login>
        <CompanyName>Tach</CompanyName>
        <WelcomeText>Welcome To The Admin Panel</WelcomeText>
        <Form>
          <Field>
            <FieldName>Username</FieldName>
            <FieldValue
              onChangeText={(text) => {
                setUsername(text)
              }}
            />
          </Field>
          <Field>
            <FieldName>Password</FieldName>
            <FieldValue secureTextEntry={true} />
          </Field>
          <Link href="/">
            <LoginButton>
              <LoginButtonText selectable={false} sx={{ color: 'white' }}>
                Login
              </LoginButtonText>
            </LoginButton>
          </Link>
        </Form>
        <Footer>©Tach 2021, All rights Reserved</Footer>
      </Login>
    </Container>
  )
}
