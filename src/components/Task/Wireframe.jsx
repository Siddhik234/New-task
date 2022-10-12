import React, { useState } from "react"
import "./task.css"
import Data from "./Data.json"
import { Button,Card, CardContent, Grid } from "@mui/material"

export const  Wireframe=()=>{



    return(
        <React.Fragment>
        <Card>
            <CardContent >
            <h1 className="sk" > title </h1>
        <p className="tt" > Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Repellat, eligendi? </p>
           <Button id="but"  variant="contained" color="primary" > Read More </Button>
            </CardContent>
        </Card>

         <Grid container spacing={3}>    
       { Data.map((item)=>{
        return(
          <Grid item xs={4}>
             <Card>
                <CardContent>
                <img src={item.ImageUrl} alt="" />
                <h1> {item.Name} </h1>
                <h3>{item.ShortDesc} </h3>
                </CardContent>
             </Card>
          </Grid>
        )
       })}
   </Grid>
        </React.Fragment>
    )

}