import React from "react"
import { Button,Grid } from "@mui/material"

export const Navbar=()=>{
    return(
     <Grid container spacing={2}>
     <Grid item xs={7}>
      <Button variant="contained" color="primary" > Title </Button>
     </Grid>
     <Grid item xs={1}>
      <Button variant="contained" color="primary" > Home </Button>
     </Grid>
     <Grid item xs={1}>
      <Button variant="contained" color="primary" > About </Button>
     </Grid>
     <Grid item xs={1}>
      <Button variant="contained" color="primary" > Blog </Button>
     </Grid>
     <Grid item xs={1}>
      <Button variant="contained" color="primary" > Contact </Button>
     </Grid>
     <Grid item xs={1}>
      <Button variant="contained" color="primary" > Button </Button>
     </Grid>
     </Grid>
    )
}