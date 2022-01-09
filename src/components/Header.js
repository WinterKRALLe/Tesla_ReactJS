import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import { style } from '@mui/system'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                { cars && cars.map((car, index)=>(
                    <a key={index} href="#">{ car }</a>
                )) }
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                { cars && cars.map((car, index)=>(
                    <li key={index}><a href="#">{ car }</a></li>
                )) }
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}
export default Header

const Container = styled.div`
    min-height: 3.5rem;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: .5rem 1rem;
        flex-wrap: nowrap;
    
        :hover {
            background-color: rgba(0, 0, 0, .05);
            border-radius: 10px;
        }
    }

    @media screen and (max-width: 1100px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: .5rem 1rem;
        flex-wrap: nowrap;
        @media screen and (max-width: 468px) {
            display: none;
        }
    }
    a:hover {
        background-color: rgba(0, 0, 0, .05);
        border-radius: 10px;
    }

`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    display: flex;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #FFF;
    width: 18rem;
    list-style-type: none;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .4s;

    li {
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        padding: .5rem;
        
        a {
            font-weight: 600;
            padding: .25rem .5rem;
        }
        a:hover {
            background-color: rgba(0, 0, 0, .05);
            border-radius: 15px;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;

    :hover {
        background-color: rgba(0, 0, 0, .05);
        border-radius: 100px;
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`