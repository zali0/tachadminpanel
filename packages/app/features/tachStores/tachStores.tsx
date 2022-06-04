import { Layout } from 'app/components/Layout'
import { SIZES } from 'app/constants'
import { useGetStoresQuery } from 'app/generated/graphql'
import { View, Text, styled, Pressable } from 'dripsy'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { createParam } from 'solito'
import { Link, TextLink } from 'solito/link'

const Container = styled(View)({
  // width: '200%',
})
const Title = styled(Text)({
  fontWeight: 'bold',
  fontSize: SIZES.$1,
})
const Table = styled(DataTable)({
  width: '100%',
  marginTop: SIZES.$3,
})

const HeadRow = styled(DataTable.Header)({
  flexDirection: 'row',
  bg: '$black',
  color: '$white',
  borderTopLeftRadius: SIZES.$1,
  borderTopRightRadius: SIZES.$1,
})
const HeadCol = styled(Text)({
  marginLeft: SIZES.$1,
  fontWeight: 'bold',
  color: '$white',
})

const Row = styled(DataTable.Row)({})

const Cell = styled(DataTable.Cell)({
  marginLeft: SIZES.$1,
})
const AddStoreButton = styled(Pressable)({
  bg: '$black',
  width: 100,
  padding: SIZES.$1,
  marginTop: SIZES.$3,
  borderRadius: SIZES.$2,
  alignSelf: 'center',
})
const AddStoreButtonText = styled(Text)({
  color: '$white',
  textAlign: 'center',
})
const optionsPerPage = [2, 3, 4]
export function TachStoresScreen() {
  const [page, setPage] = React.useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0])
  const [storeArrays, setStoreArrays] = React.useState()
  React.useEffect(() => {
    setPage(0)
  }, [itemsPerPage])

  const {
    data: stores,
    loading,
    error,
  } = useGetStoresQuery({
    variables: {},
  })

  const displayColumns = (values) => {
    const cells = values.map((value) => {
      return <Cell>{value}</Cell>
    })
    return cells
  }
  const displayRows = (storesData) => {
    let rows = storesData.map((store) => {
      console.log('store')
      console.log(store)
      const { __typename, products, ...filteredStoreData } = store
      const values = Object.values(filteredStoreData)
      console.log(values)
      return <Row>{displayColumns(values)}</Row>
    })
    return rows
  }
  if (
    typeof stores?.getStores !== 'undefined' &&
    typeof stores.getStores !== 'undefined'
  ) {
    const metaData = stores.getStores![0]
    const { __typename, products, ...filteredMetaData } = metaData!
    const storeProperties = Object.keys(filteredMetaData!)
    const storesData = stores.getStores
    return (
      <Layout>
        <Container>
          <Title>TachStores</Title>
          <Text>Total number of stores: 20</Text>
          <Table>
            <HeadRow>
              {storeProperties.map((property) => {
                return (
                  <DataTable.Title>
                    <HeadCol>{property}</HeadCol>
                  </DataTable.Title>
                )
              })}
            </HeadRow>
            {displayRows(storesData)}
            <Row>
              <Cell>1</Cell>
              <Cell>Mohammed Altaf</Cell>
              <Cell>9390016592</Cell>
              <Cell>altaf@gmail.com</Cell>
            </Row>

            <Row>
              <Cell>2</Cell>
              <Cell>Mohamed Zeeshan Ali</Cell>
              <Cell>9390016592</Cell>
              <Cell>zee@gmail.com</Cell>
            </Row>
          </Table>
          {/* <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6" 
          // optionsPerPage={optionsPerPage}
          // itemsPerPage={itemsPerPage}
          // setItemsPerPage={setItemsPerPage}
          // showFastPagination
          // optionsLabel={'Rows per page'}
        />*/}
          <Link href="/stores/addStore">
            <AddStoreButton>
              <AddStoreButtonText>Add Store</AddStoreButtonText>
            </AddStoreButton>
          </Link>
        </Container>
      </Layout>
    )
  } else {
    return <Text>Loading...</Text>
  }
}
