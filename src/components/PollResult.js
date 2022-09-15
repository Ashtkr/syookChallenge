import React from 'react'
import Header from './Header'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import './PollResult.css'

const PollResult = () => {
    // Get data from the local Storage to display in the poll result
    let  pollResultData = JSON.parse(localStorage.getItem("users"));

    // Sort according to rank selected by the users
    pollResultData.sort(function(a,b) {return a[1].elementRank - b[1].elementRank});


    return (
        <>
            <Header />
            <Box className='card-container'>
                {
                    pollResultData.map((singleDish,index) => {
                        return (
                            <Box key={singleDish[0].id} className='cardItem-container'>
                                <Box className='rankResult-container'>{index+1}</Box>
                                <Card sx={{ maxWidth: 300 }}>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={singleDish[0].image}
                                        alt={singleDish[0].image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {singleDish[0].dishName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {singleDish[0].description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default PollResult