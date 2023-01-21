// <--------AddBtn------->

import {ReactComponent as bookmark} from '../../assets/icon/bookmark.svg'
import {ReactComponent as noLive} from '../../assets/icon/islive.svg'
import {ReactComponent as person} from '../../assets/icon/person.svg'
import {ReactComponent as chat} from "../../assets/icon/chat.svg"
import {ReactComponent as share} from "../../assets/icon/share.svg"


import styled, { css } from 'styled-components'

export const AddbtnC = styled.button`
width: 92px;
height: 46px;
background: #1754F2;
border-radius: 8px;
font-style: italic;
font-weight: 5;
font-size: 32px;
line-height: 35px;
text-align: center;
color: #FFFFFF;
border: none;
cursor: pointer;
`

// <-------------------ActionIcon--------------


export const Action = styled.div`
width: 40px;
height: 40px;
background: #F9F9F9;
border-radius: 20px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
${props => css`
   margin-right: ${props.mr16 ? "16px" : "8px"};
`
}
:hover{
    cursor: pointer;
}
`
Action.Bookmark = styled(bookmark)``
Action.Person = styled(person)``
Action.NoLive = styled(noLive)`
position:absolute;
top: 0px;
right: 0px
`
Action.Bookmark = styled(bookmark)`
`
Action.Chat = styled(chat)`
`
Action.Share = styled(share)``