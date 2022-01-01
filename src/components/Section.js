import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={ backgroundImg }>
            <Fade botttom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        { rightBtnText &&
                            <RightButton>
                                { rightBtnText }
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}
export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: ${ props => `url("/images/${props.bgImage}")` };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    scroll-snap-align: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, .8);
    height: 2.5rem;
    width: 16rem;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: .85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: .5rem;
`
const RightButton = styled(LeftButton)`
    background-color: #FFF;
    color: #000;
    opacity: .65;
`
const DownArrow = styled.img`
    margin-top: 1.5rem;
    height: 2.5rem;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``
