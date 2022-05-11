import React from 'react';
import { TextField, Image, TextTitle, TextContent } from './StyledComponents'
import { Grid } from "@material-ui/core/";
import {useMediaQuery} from "react-responsive";

const AboutMe = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
    return (
            <Grid style={{ textAlign: "center", margin:isTabletOrMobile?  "5% auto 8% auto" : "5% auto 5% auto" }} container>
                <Grid item xs={12} sm={12} md={6} style={{ display: "block" }}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fkasia.jpeg?alt=media&token=c2e086ff-a577-440f-a20b-bd4e9568031b"/>
                </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{ display: "block" }}>
                    <TextField><TextTitle>O mnie</TextTitle><TextContent>Mieszkam i pracuję w Warszawie. Swoją przygodę z biżuterią rozpoczęłam w 2010, a inspiracją są liczne podróże. Biżuteria autorska, wykonana jest ręcznie ze srebra, złota i kamieni naturalnych, przy użyciu tradycyjnych technik złotniczych. Minerały są naturalne, wyselekcjonowane i wybrane osobiście. Wykonuję pojedyncze egzemplarze lub krótkie serie. Zapięcia wszystkich kolczyków wykonane są ze srebra próby 925 lub złota próby 585. Zapraszam do obejrzenia kolekcji.</TextContent></TextField>
                </Grid>
            </Grid>
    );
}

export default AboutMe