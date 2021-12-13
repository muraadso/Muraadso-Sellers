import TextField from '@mui/material/TextField';

const Reg = () => {
    return (
        <div className="container px-16 mb-36 ">
            <h1 className="text-lg font-bold text-center md:text-3xl ">Nagu Soo Biir Macmiil</h1>
            <div className="flex flex-col items-center justify-center px-24 py-10 mt-24 bg-white rounded formcontainer">
            <h1 className="text-lg text-center md:text-3xl mb-11 ">Is Diiwaan Geli</h1>
                <div className="grid w-2/3 grid-cols-2 gap-x-6 gap-y-7 form">
                  <TextField id="outlined-basic" label="First Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Magaalada" variant="outlined" />
                  <TextField id="outlined-basic" label="Address" variant="outlined" />
                  <TextField type="number" id="outlined-basic" label="Phone Number" variant="outlined" />
                </div>
            </div>


                  

            
        </div>
    )
}

export default Reg
