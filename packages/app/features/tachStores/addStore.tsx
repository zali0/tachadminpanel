import { Layout } from 'app/components/Layout'
import { SIZES } from 'app/constants'
import { View, Text, styled, Pressable, TextInput } from 'dripsy'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

const Container = styled(View)({
  // width: '200%',
})
const Title = styled(Text)({
  fontWeight: 'bold',
  fontSize: SIZES.$1,
})

const Form = styled(View)({})

const Field = styled(View)({})

const FieldName = styled(Text)({})

const FieldValue = styled(TextInput)({
  borderBottomWidth: SIZES.$1,
  borderBottomColor: '$black',
})

const AddStoreButton = styled(View)({
  bg: '$black',
})

const AddStoreButtonText = styled(View)({
  color: '$white',
  textAlign: 'center',
})

const optionsPerPage = [2, 3, 4]
export function addStore() {
  const [name, setName] = React.useState<string>('')
  const [owner, setOwner] = React.useState<string>('')
  const [address, setAddress] = React.useState<string>('')
  const handleAdd = () => {
    console.log('handleAdd')
    console.log(name)
    console.log(owner)
    console.log(address)
  }
  return (
    <Layout>
      <Container>
        <Title>Add a new Store</Title>
        <Form>
          <Field>
            <FieldName>Name</FieldName>
            <FieldValue onChangeText={(name) => setName(name)} />
          </Field>
          <Field>
            <FieldName>Owner</FieldName>
            <FieldValue onChangeText={(owner) => setOwner(owner)} />
          </Field>
          <Field>
            <FieldName>Address</FieldName>
            <FieldValue onChangeText={(address) => setAddress(address)} />
          </Field>
        </Form>
        <Pressable onPress={handleAdd}>
          <AddStoreButton>
            <AddStoreButtonText>Add Store</AddStoreButtonText>
          </AddStoreButton>
        </Pressable>
      </Container>
    </Layout>
  )
}
