import TextField from '@mui/material/TextField';

const Reg = () => {
    return (
        <div className="container px-16 mb-36 ">
            <h1 className="text-lg text-center md:text-3xl ">Nagu Soo Biir Macmiil</h1>
            <div className="flex items-center justify-center px-24 py-10 bg-white rounded formcontainer">
                <div className="grid w-2/3 grid-cols-2 gap-x-6 gap-y-7 form">
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
            </div>


                  

            
        </div>
    )
}

export default Reg
