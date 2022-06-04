import { Layout } from 'app/components/Layout'
import { SIZES } from 'app/constants'
import { View, Text, styled, Pressable } from 'dripsy'
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


const optionsPerPage = [2, 3, 4]
export function TachStoreDetail() {
  const { useParam } = createParam()
  const [id, setId] = useParam('id')
  const [page, setPage] = React.useState<number>(0)
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0])

  React.useEffect(() => {
    setPage(0)
  }, [itemsPerPage])
  return (
    <Layout>
      <Container>
        <Title>TACH STORE DETAIL {id}</Title>
        <Text>Total number of stores: 20</Text>
        <Table>
          <HeadRow>
            <DataTable.Title>
              <HeadCol>ID</HeadCol>
            </DataTable.Title>
            <DataTable.Title>
              <HeadCol>OrderId</HeadCol>
            </DataTable.Title>
            <DataTable.Title>
              <HeadCol>User</HeadCol>
            </DataTable.Title>

            <DataTable.Title>
              <HeadCol>Email</HeadCol>
            </DataTable.Title>
          </HeadRow>

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
      </Container>
    </Layout>
  )
}
