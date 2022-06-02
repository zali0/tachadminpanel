import { Layout } from 'app/components/Layout'
import { View, Text, styled } from 'dripsy'
import React from 'react'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

const Container = styled(View)({})
export function UsersScreen() {

  return (
    <Layout>
      <Container>
        <Text>Hello world</Text>
      </Container>
    </Layout>
  )
}
