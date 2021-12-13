import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';





const Footer = () => {
    return (
        <div className="px-24 py-16 border bg-gray-50">
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

        </div>
    )
}

export default Footer
