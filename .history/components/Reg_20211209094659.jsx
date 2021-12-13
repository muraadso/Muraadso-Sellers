import TextField from '@mui/material/TextField';

const Reg = () => {
    return (
        <div className="container mb-36 ">
            <h1 className="text-lg text-center md:text-3xl ">Nagu Soo Biir Macmiil</h1>
            <div className="px-24 py-10 bg-white rounded  gap-x-6 gap-y-7 formcontainer">
                <div className="grid grid-cols-2 form">
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
