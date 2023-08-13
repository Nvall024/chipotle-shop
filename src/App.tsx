import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { riceMenu, proteinMenu, toppingsMenu } from './lib/MenuItems';
import Menu from './Menu';
import InvoiceTable from './InvoiceTable';

function App() {
  return (
    <Grid direction="row" sx={{display:"flex", flexWrap:"nowrap"}}>
      <Menu/>
      <InvoiceTable/>
    </Grid>
  );
}

export default App;