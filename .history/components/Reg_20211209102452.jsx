import TextField from '@mui/material/TextField';

const Reg = () => {
    return (
        <div className="container flex flex-col items-center justify-center w-full md:px-16 mb-36 ">
            <h1 className="text-lg font-bold text-center md:text-3xl ">Nagu Soo Biir Macmiil</h1>
            <div className="flex flex-col items-center justify-center py-10 mt-24 bg-white rounded md:w-3/5 md:px-11 formcontainer">
            <h1 className="text-lg text-center md:text-3xl mb-11 ">Is Diiwaan Geli</h1>
                <div className="grid w-4/5 grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7 form">
                  <TextField id="outlined-basic" label="First Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Magaalada" variant="outlined" />
                  <TextField id="outlined-basic" label="Address" variant="outlined" />
                  <TextField type="number" id="outlined-basic" label="Phone Number" variant="outlined" />
                  <TextField id="outlined-basic" label="Magaca Ganasiga" variant="outlined" />
                  <TextField id="outlined-basic" label="Noca Ganasiga" variant="outlined" />
                </div>
                
            </div>


                  

            
        </div>
    )
}

export default Reg
