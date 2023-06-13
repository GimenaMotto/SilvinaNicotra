import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (

        <Box sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            "& .MuiBottomNavigation-root": {
                backgroundColor: "rgba(255, 255, 255)"
            }

        }} >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}

            >
                <BottomNavigationAction label="341 3741119" icon={<LocalPhoneIcon />} />
                <BottomNavigationAction label="silvinanicotra1@gmail.com" icon={<EmailIcon />} />
                <BottomNavigationAction
                    label="/elmirar.desil"
                    icon={<InstagramIcon />}
                    href='https://www.instagram.com/elmirar.desil/'
                    target="_blank"
                    rel="noopener noreferrer"
                />
            </BottomNavigation>
        </Box>

    );
}