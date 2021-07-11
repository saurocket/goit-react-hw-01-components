import PropsTypes from 'prop-types'
import styled from 'styled-components';



const TableItem = styled.td`
    text-transform: uppercase;
    text-align: center;
    border-right: 1px solid #9e9e9e;
    color: #616161;
    font-weight: 600;
`
const TableRow = styled.tr`
    background: ${props => props.index % 2 === 0 ? '#fafafa' : '#e0e0e0'}
`


export const TransactionItem = ({id, type, amount, currency, index}) => {
    return (
        <TableRow id={id} index={index}>
            <TableItem>{type}</TableItem>
            <TableItem>{amount}</TableItem>
            <TableItem>{currency}</TableItem>
        </TableRow>
    )
}


TransactionItem.propsTypes = {
    id: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    amount: PropsTypes.string.isRequired,
    currency: PropsTypes.string.isRequired,
}

