import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Detail({title, description, backgroundImage}) {
    return (
        <Container>
            <Section bgImage={ backgroundImage }>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Specs>
                
            </Specs>
            </Section>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Section = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: ${ props => `url("/images/${props.bgImage}")` };
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`