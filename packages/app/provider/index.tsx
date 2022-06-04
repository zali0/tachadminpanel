import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { Provider as PaperProvider } from 'react-native-paper'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query ping {
        ping
      }
    `,
  })
  .then((result) => console.log('ping', result.data.ping))
  .catch((err) => console.log(err))
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <ApolloProvider client={client}>
        <PaperProvider>
          <Dripsy>{children}</Dripsy>
        </PaperProvider>
      </ApolloProvider>
    </NavigationProvider>
  )
}
