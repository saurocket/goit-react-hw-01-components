import PropsTypes from 'prop-types'
import {StatisticItem} from "./StatisticImtem/StatisticItem";

import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    color:#212121;
    margin-top: 80px;
    margin-bottom: 80px;
`
const List = styled.ul`
     display: grid;
     grid-template-columns: repeat(${props => props.length}, 1fr);
     margin: 0 5px;
`




export const Statistics = ({data}) => {
    return <>
            <Title>UPLOAD STATS</Title>
            <List length={data.length}>
                {data.map(item => <
                    StatisticItem
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}
                />)}
            </List>
        </>

}

Statistics.propsType = {
    data: PropsTypes.array.isRequired
}