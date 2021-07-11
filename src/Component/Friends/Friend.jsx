import avaDefault from '../../assets/avatar.jpg'
import PropsTypes from 'prop-types'

import styled from 'styled-components'

const FriendStyled = styled.li`
    border: 2px solid #757575;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow:7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    display: flex;
    align-items: center;
`
const IsOnlineStyled = styled.span`
    display: block;
    margin: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.isOnline ? '#388e3c' : '#f4511e'}
`
const ImageWrapper = styled.div`
    padding: 20px;
    background: #bdbdbd;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    overflow: hidden; 
    margin-right: 20px;
`
const Discription = styled.p`
    font-size: 2rem;
    font-weight: 600;
    
`

export const Friend = ({avatar=avaDefault, name='noname', isOnline=false}) => {
   return <FriendStyled>
        <IsOnlineStyled isOnline={isOnline}></IsOnlineStyled>
        <ImageWrapper><img src={avatar} alt="avatar" width="48"/></ImageWrapper>
        <Discription>{name}</Discription>
    </FriendStyled>
}
Friend.propsTypes = {
    avatar: PropsTypes.string,
    name: PropsTypes.string,
    isOnline: PropsTypes.bool,
}