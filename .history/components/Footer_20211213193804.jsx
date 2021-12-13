import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/material/Divider';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TextField from '@mui/material/TextField';






const Footer = () => {
    return (
        <> 
        <div className="subscribe bg-red-500 w-1/2 p-16 rounded shadow-xl items-center justify-center flex">
            <div className="subcontainer">

            <div className="subcontent grid grid-cols-2 bg-white ">
                <div className="subtext items-center justify-center">
                    <h1> Fadlan Noo reeb Emailkaaga macmiil </h1>

                </div>
                <div className="subform bg-blue-400 p-11">

                          <TextField sx={{backgroundColor: 'white'}} id="standard-basic" label="Standard" variant="standard" />
                </div>
                
            </div>

            </div>
        </div>

        <div className="px-2 py-8 border md:px-24 md:py-16 bg-gray-50 space-y-7">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row upper md-space-y-0">

            <div className="flex items-center space-x-5 md:space-x-7 justify-items-start footercontent">
                <a href="#">About Us</a>
                <a href="#">How it Works</a>
                <a href="#">Nagu Dooro</a>
                <a href="#">Register</a>
                
            </div>
            
            <div className="footericons space-x-7">
                <FacebookIcon sx={{ fontSize: 30, color: "#ff5e5b" }} />
                <InstagramIcon sx={{ fontSize: 30, color: "#ff5e5b" }} />
                <YouTubeIcon sx={{ fontSize: 30, color: "#ff5e5b" }} />
            </div>
            
            </div>
            <Divider className="text-red-600">Muraadso.com</Divider>

            <div className="flex flex-col items-center justify-between space-y-3 md:space-y-0 md:flex-row bottom">
                <a href="#"> <CopyrightIcon className="items-center" sx={{fontSize: 15}} /> 2021 Muraadso.All rights reserved. </a>
                <div className="space-x-8 term">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Service</a>
                </div>


            </div>

        </div>
        </>
    )
}

export default Footer
