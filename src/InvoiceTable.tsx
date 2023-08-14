 import React from 'react';
import { Divider, Button, Grid, Typography } from '@mui/material';

function InvoiceTable() {
  return (
    <Grid item container direction='column' sx={{ backgroundColor: "white", width:"300px", ml:"2rem"}}>
      <Grid item sx={{my:"2rem", mx:"1rem"}}>
        <Typography variant='h5' sx={{color: "#AB2218"}}>
          Invoice
         </Typography>
      </Grid>
         <Grid item container direction="row">
          <Grid item direction="column" sx={{flexGrow:2, ml:"1rem"}}>
            <Typography>Item</Typography>
            <Divider/>
            <Typography>Item</Typography>
            <Divider/>
            <Typography>Item</Typography>
            <Divider/>
            <Typography>Tax:</Typography>
            <Divider/>
            <Typography>Total:</Typography>
          </Grid>
          <Grid item direction="column" sx={{flexGrow: 1}}>
            <Typography>$X.XX</Typography>
            <Typography>$X.XX</Typography>
            <Typography>$X.XX</Typography>
            <Typography>$X.XX</Typography>

            <Typography>$X.XX</Typography>
          </Grid>
         </Grid>
         <Grid item sx={{my:"2rem", mx:"1rem"}}>
          <Button variant='contained' sx={{
            backgroundColor: "#AB2218",
            '&:hover': {
            backgroundColor: "#441501",
            }
          }}>
            Order now
          </Button>
         </Grid>
     </Grid>
  );
}

export default InvoiceTable;
