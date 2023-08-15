import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { riceMenu, proteinMenu, toppingsMenu } from './lib/MenuItems';
import Menu from './Menu';
import InvoiceTable from './InvoiceTable';
import { calculateTotalOfBowlPrice } from './lib/MenuPrices';

function App() {

   
  console.log("DOBBIE PAYS: ",calculateTotalOfBowlPrice(["whiteRice", "blackBeans", "chicken"]))

  return (
    <Grid container direction="row" sx={{display:"flex", flexWrap:"nowrap"}}>
      <Menu/>
      <InvoiceTable/>
      
    </Grid>
  );
}

export default App;