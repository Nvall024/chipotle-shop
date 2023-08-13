 import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

function InvoiceTable() {
  return (
    <Grid item container direction='column' sx={{ backgroundColor: "white", flexGrow: 1, ml:"2rem", justifyContent:"center", alignContent:"center"}}>
         <Typography variant='h5'>
          Invoice
         </Typography>
         <Grid item container direction="row">
          <Grid item direction="column">
            <Typography>Item</Typography>
            <Typography>Item</Typography>
            <Typography>Item</Typography>
            <Typography>Tax:</Typography>
            <Typography>Total:</Typography>
          </Grid>
          <Grid item direction="column">
            <Typography>$X.XX</Typography>
            <Typography>$X.XX</Typography>
            <Typography>$X.XX</Typography>
            <Typography>$X.XX</Typography>

            <Typography>$X.XX</Typography>
          </Grid>
         </Grid>
         <Button variant='contained'>
          Order now
         </Button>
     </Grid>
  );
}

export default InvoiceTable;
