import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from '@mui/material';



const Reg = () => {
    return (
        <div className="container flex flex-col items-center justify-center md:w-screen md:px-11 mb-36 ">
            <h1 className="text-lg font-bold text-center md:text-3xl ">Nagu Soo Biir Macmiil</h1>
            <div className="flex flex-col items-center justify-center py-10 mt-24 bg-white rounded md:w-9/12 md:px-11 space-y-7 formcontainer">
            <h1 className="text-lg font-bold text-center md:text-3xl ">Is Diiwaan Geli</h1>
                <div className="grid w-5/6 grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7 form">
                  <TextField id="outlined-basic" label="First Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Magaalada" variant="outlined" />
                  <TextField id="outlined-basic" label="Address" variant="outlined" />
                  <TextField type="number" id="outlined-basic" label="Phone Number" variant="outlined" />
                  <TextField id="outlined-basic" label="Magaca Ganasiga" variant="outlined" />
                  <TextField id="outlined-basic" label="Noca Ganasiga" variant="outlined" />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <FormControlLabel className="mb-2" control={<Checkbox /> ,<Radio />} label="I accept the privacy and policy" />
                   <button
                    className="items-center justify-center px-24 py-3 text-sm text-white bg-red-600 md:text-center md:text-lg md:px-24 md:py-4 ">
                        Register Now
                    </button>
        </div>
            </div>


                  

            
        </div>
    )
}

export default Reg
