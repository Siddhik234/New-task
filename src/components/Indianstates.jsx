import { Button, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import data from "./data.json";

const Indianstates = () => {

    return (
        <Grid container spacing={3}> 
            { data.map((item,ind)=>{
                return(
                <Grid item xs={12}> 
                    <Card >
                        <CardContent class='mapdata'>
                            <h1>{item.state} </h1>
                            <h1>{item.population} </h1>
                            <Button > View City </Button>
                        </CardContent>
                    </Card>
                </Grid>
                
                )
            }) }
            </Grid>
    );
};

export default Indianstates;