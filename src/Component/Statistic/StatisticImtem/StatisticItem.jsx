import PropsTypes from 'prop-types'
import styled from 'styled-components'

const StyledItem = styled.li`
 border: 2px solid #b0bec5;
 height: 100px;
 box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
 background: ${props => props.color};
`
const Title = styled.h1`
    text-align: center;
    font-size: 1.2rem;
    color:#546e7a;
    margin: 10px 0;
    font-weight: 700;
`
const Percent = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 10px;
    text-align: center;
    color: #212121;
`


const color = () => "#" + ((1<<24)*Math.random() | 0).toString(16)

export const StatisticItem = ({label, percentage}) => {
    return <StyledItem color={color()}>
            <Title>{label}</Title>
            <Percent>{percentage}%</Percent>
    </StyledItem>
}

StatisticItem.propsType = {
    label: PropsTypes.string.isRequired,
    percentage: PropsTypes.string.isRequired
}