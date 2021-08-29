import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Books() {
    return (
       <Grid container>
           <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>

           </Grid>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
               <Typography>LIBRARY APP</Typography>
               <TextField
               variant="outlined"
               label="Book title"
               fullWidth
               margin="normal"
               required
               />
               <TextField
               variant="outlined"
               label="Description"
               fullWidth
               margin="normal"
               required
               />
               <TextField
               variant="outlined"
               label="Publisher name"
               fullWidth
               margin="normal"
               required
               />
               <TextField
               variant="outlined"
               label="Author"
               fullWidth
               margin="normal"
               required
               />
               <TextField
               variant="outlined"
               label="Distributor name"
               fullWidth
               margin="normal"
               required
               />
               <Button
               margin="Normal"
               type="submit"
               fullWidth
               color="secondary"
               variant="contained"
               >SUBMIT</Button>


               

           </Grid>
           <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>

           </Grid>
           
           

       </Grid>
    )
}

