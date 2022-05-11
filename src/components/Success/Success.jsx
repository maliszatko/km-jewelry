import React from 'react'
import { Wrapper, SuccessMessage, Buttons, Button, StyledLink } from './StyledComponents'

const Success = (props) => {
    return (
        <Wrapper>
            <SuccessMessage>Dodano nowy produkt!</SuccessMessage>
        <Buttons>
            <StyledLink to='/kasia' >
                <Button onClick={() => {props.resubmitForm(false)}}>Dodaj kolejny</Button>
            </StyledLink>
            <StyledLink to='/' >
                <Button>Wróć na stronę główną</Button>
            </StyledLink>
            </Buttons>
        </Wrapper>
    );
}

export default Success