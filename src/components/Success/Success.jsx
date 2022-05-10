import React from 'react'
import { Wrapper, SuccessMessage, Buttons, Button } from './StyledComponents'
import { Link } from "react-router-dom";

const Success = (props) => {
    return (
        <Wrapper>
            <SuccessMessage>Dodano nowy produkt!</SuccessMessage>
        <Buttons>
            <Link to='/kasia' >
                <Button onClick={() => {props.resubmitForm(false)}}>Dodaj kolejny</Button>
            </Link>
            <Link to='/' >
                <Button>Wróć na stronę główną</Button>
            </Link>
            </Buttons>
        </Wrapper>
    );
}

export default Success