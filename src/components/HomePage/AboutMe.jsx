import React from 'react';
import { AboutWrapper, TextField, Image } from './StyledComponents'

const AboutMe = () => {
    return (
        <AboutWrapper>
            <Image style={{verticalAlign: "middle"}} src="https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fkasia.jpeg?alt=media&token=c2e086ff-a577-440f-a20b-bd4e9568031b"/>
            <TextField><h1 style={{ margin: "0 auto 10% auto", display: "block", textAlign: "center"}}>O mnie</h1><h4 style={{display: "inline"}}>Mieszkam i pracuję w Warszawie. Swoją przygodę z biżuterią rozpoczęłam w 2010, a inspiracją są liczne podróże. Biżuteria autorska, wykonana jest ręcznie ze srebra, złota i kamieni naturalnych, przy użyciu tradycyjnych technik złotniczych. Minerały są naturalne, wyselekcjonowane i wybrane osobiście. Wykonuję pojedyncze egzemplarze lub krótkie serie. Zapięcia wszystkich kolczyków wykonane są ze srebra próby 925 lub złota próby 585. Zapraszam do obejrzenia kolekcji.</h4></TextField>
        </AboutWrapper>
    );
}

export default AboutMe