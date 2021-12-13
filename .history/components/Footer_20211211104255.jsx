import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import CopyrightIcon from '@mui/icons-material/Copyright';





const Footer = () => {
    return (
        <div className="px-24 py-16 border bg-gray-50 space-y-7">
            <div className="flex items-center justify-between upper">

            <div className="flex items-center md:space-x-7 justify-items-start footercontent">
                <a href="#">About Us</a>
                <a href="#">How it Works</a>
                <a href="#">Nagu Dooro</a>
                <a href="#">Register</a>
                
            </div>
            
            <div className="footericons space-x-7">
                <FacebookIcon sx={{ fontSize: 30, color: "#ff0000" }} />
                <InstagramIcon sx={{ fontSize: 30, color: "#ff0000" }} />
                <YouTubeIcon sx={{ fontSize: 30, color: "#ff0000" }} />
            </div>
            
            </div>
            <Divider className="text-red-600">Muraadso.com</Divider>

            <div className="flex items-center justify-between bottom">
                <a href="#"> <CopyrightIcon className="items-center" sx={{fontSize: 15}} /> 2021 Muraadso.All rights reserved. </a>
                <div className="space-x-8 term">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Service</a>
                </div>


            </div>

        </div>
    )
}

export default Footer
