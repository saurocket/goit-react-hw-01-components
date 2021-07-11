import {Friend} from "./Friend";

import styled from 'styled-components'

const List  = styled.ul`
    margin: 20px 10px 20px 10px;
`



export const Friends = ({data}) => {
    return (
        <List>
            {data.map(({id, name, avatar, isOnline}) => <Friend
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline}
            />)
         }
        </List>

    )



}
// "avatar": "https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg",
//     "name": "Kiwi",
//     "isOnline": false,
//     "id": 1137