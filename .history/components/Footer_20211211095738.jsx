import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';




const Footer = () => {
    return (
        <div className="px-24 py-16 bg-gray-100 border">
            <div className="flex upper ">

            <div className="flex items-center md:space-x-7 justify-items-start footercontent">
                <a href="#">About Us</a>
                <a href="#">How it Works</a>
                <a href="#">Nagu Dooro</a>
                <a href="#">Register</a>
                
            </div>
            <div className="footericons">
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
            </div>


            </div>

        </div>
    )
}

export default Footer
