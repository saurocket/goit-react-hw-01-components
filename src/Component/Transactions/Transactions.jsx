
import PropsTypes from 'prop-types'
import styled from 'styled-components'
import {TransactionItem} from "./TransactionItem";
import React from "react";
import {TableHeader} from "./TableHeader";


const Table = styled.table`
  box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  border-radius: 5px;
  overflow: hidden;
`


export const Transactions = ({data}) => {
    return (
        <Table>
            <TableHeader/>
            <tbody>
            {data.map(({id, type, amount, currency}, index) =>  <TransactionItem
            index={index}
            key={id}
            id={id}
            type={type}
            amount={amount}
            currency={currency}
            />)}

            </tbody>
        </Table>
    )
}

Transactions.propsTypes = {
    data: PropsTypes.array.isRequired

}

