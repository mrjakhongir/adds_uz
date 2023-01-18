// <-------Header----->
import styled from 'styled-components'
import {ReactComponent as bookmark} from '../../assets/icon/bookmark.svg'
import {ReactComponent as noLive} from '../../assets/icon/islive.svg'
import {ReactComponent as person} from '../../assets/icon/person.svg'
import {ReactComponent as search} from '../../assets/icon/search.svg'

export const HeaderC = styled.div`
width: 100%;
height: 70px;
padding: 12px 24px;
margin-bottom: 23px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
background: #FFFFFF;
border-radius: 8px;
.mark-personal{
    display: flex;
    :hover{
        cursor: pointer;
    }
}
.search{
    width: 48%;
    height: 100%;
    position: relative;
}
input{
    width: 100%;
    height: 100%;
    padding: 10px 24px;
    background: #F9F9F9;
    border-radius: 8px;
    outline: none;
    border: none;
}
.mark-personal{
display: flex;
align-items: center;
}
`
export const MarkPersonal = styled.div`
width: 40px;
height: 40px;
background: #F9F9F9;
border-radius: 20px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin-left: 16px;
`
MarkPersonal.Bookmark = styled(bookmark)``
MarkPersonal.Person = styled(person)``
MarkPersonal.NoLive = styled(noLive)`
position:absolute;
top: 0px;
right: 0px
`
export const Search = styled(search)`
position: absolute;
top: 16px;
right: 16px;
`