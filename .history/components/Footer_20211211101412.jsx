import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import CopyrightIcon from '@mui/icons-material/Copyright';





const Footer = () => {
    return (
        <div className="px-24 py-16 border bg-gray-50 space-y-7">
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,170.7C840,181,960,235,1080,240C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <div className="flex items-center justify-between upper">

            <div className="flex items-center md:space-x-7 justify-items-start footercontent">
                <a href="#">About Us</a>
                <a href="#">How it Works</a>
                <a href="#">Nagu Dooro</a>
                <a href="#">Register</a>
                
            </div>
            
            <div className="footericons space-x-7">
                <FacebookIcon sx={{ fontSize: 30 }} />
                <InstagramIcon sx={{ fontSize: 30 }} />
                <YouTubeIcon sx={{ fontSize: 30 }} />
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
