import { Layout } from 'app/components/Layout'
import Widget from 'app/components/Widget'
import { SIZES } from 'app/constants'
import { Text, useSx, View, H1, P, Row, A, styled, ScrollView } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

const Container = styled(View)({
})

const Widgets = styled(View)({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
})
export function HomeScreen() {
  const sx = useSx()
  return (
    <Layout>
      <Container>
        <Widgets>
          <Widget
            title="Users"
            currentNumber={45}
            link={`/users`}
            linkText="See All users"
          />
          <Widget
            title="Orders"
            currentNumber={45}
            link={`/users`}
            linkText="See All Orders"
          />
          <Widget
            title="Earnings"
            currentNumber={45}
            link={`/users`}
            linkText="See All Earnings"
          />
          <Widget
            title="Balance"
            currentNumber={45}
            link={`/users`}
            linkText="See All Transactions"
          />
        </Widgets>
      </Container>
    </Layout>
  )
}
