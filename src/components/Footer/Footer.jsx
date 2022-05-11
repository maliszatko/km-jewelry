import React from 'react'
import { StyledFooter, WebLink } from './StyledComponents'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
    return (
        <StyledFooter>
            <div style={{padding: isTabletOrMobile ? "2% 0" : "1% 0"}}>
                <WebLink href="https://www.facebook.com/maliszewska.jewelry/"><FacebookIcon sx={{width: "1.25em", height: "1.25em"}}/></WebLink>
                <WebLink href="https://instagram.com/kmjewelry20"><InstagramIcon sx={{width: "1.25em", height: "1.25em"}}/></WebLink>
                <WebLink href="mailto:kasia.mal@wp.pl"><MailOutlineIcon sx={{width: "1.25em", height: "1.25em"}}/></WebLink>
            </div>
        </StyledFooter>
    );
}