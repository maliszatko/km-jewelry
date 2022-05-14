import React from 'react'
import { StyledFooter, WebLink } from './StyledComponents'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
    return (
        <StyledFooter>
            <div style={{padding: isTabletOrMobile ? "2% 0" : "1% 0"}}>
                <WebLink href="https://www.facebook.com/maliszewska.jewelry/">{isTabletOrMobile ? <FacebookIcon sx={{width: "1.15rem", height: "1.15rem"}}/> : <FacebookIcon sx={{width: "1.75rem", height: "1.75rem"}}/>}</WebLink>
                <WebLink href="https://instagram.com/kmjewelry20">{isTabletOrMobile ? <InstagramIcon sx={{width: "1.15rem", height: "1.15rem"}}/> : <InstagramIcon sx={{width: "1.75rem", height: "1.75rem"}}/>}</WebLink>
                <WebLink href="mailto:kasia.mal@wp.pl">{isTabletOrMobile ? <MailOutlineIcon sx={{width: "1.15rem", height: "1.15rem"}}/> : <MailOutlineIcon sx={{width: "1.75rem", height: "1.75rem"}}/>}</WebLink>
            </div>
        </StyledFooter>
    );
}