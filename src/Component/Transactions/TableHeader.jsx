
import styled from 'styled-components'

const TableItem = styled.th`
    text-transform: uppercase;
    text-align: center;
    border-right: 1px solid white;
`


export const TableHeader = () => {
    return <thead>
    <tr className='cyan lighten-2'>
        <TableItem className='grey-text text-lighten-5'>type</TableItem>
        <TableItem className='grey-text text-lighten-5'>amount</TableItem>
        <TableItem className='grey-text text-lighten-5'>currency</TableItem>
    </tr>
    </thead>
}