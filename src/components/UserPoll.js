import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import './UserPoll.css'


const UserPoll = ({ dishData }) => {
  const [buttonState,setButtonState] = useState([{
    elementState:null,
    dishState:null,
  }])

  const rankArray = [1, 2, 3];

  // function to add the selected card item in the array
  const handleRankSelectMenu = (element,event) => {
      setButtonState(current => [...current, {elementState:element,
                                    dishState:parseInt(event.target.getAttribute("box-id"))}])
  }


 // Function to set the data in the local storage according to the selected item 

  function filterResult(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < dishData.length; j++){
        if(arr[i].dishState === dishData[j].id){
          result.push([dishData[j],{elementRank:arr[i].elementState}]);
        }
      }
    }
    return result;
  }

  // Function to select the particular rank item button 
  function findElement(arr,element,id){
    let flag = false;
    if(arr.length <= 4){
      localStorage.setItem("users", JSON.stringify(filterResult(arr)));
      for(let i = 1; i < arr.length; i++){
        if( arr[i].elementState === element && arr[i].dishState === id){
          return true
        }
      }
    }
    else{
      let newArr = arr.slice(arr.length - 3, arr.length);
      localStorage.setItem("users", JSON.stringify(filterResult(newArr)));
      for(let i = 0; i < 3; i++){
        if( newArr[i].elementState === element && newArr[i].dishState === id){
          return true
        }
      }
    }
    if(flag){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <Box className='card-container'>
      {
        dishData.map((singleDish) => {
          return (
            <Box key={singleDish.id} className='cardItem-container'>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="150"
                image={singleDish.image}
                alt={singleDish.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {singleDish.dishName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {singleDish.description}
                </Typography>
                <Box className='rating-label'>Rate Your Favourite Dishes!!!</Box>
                <hr />
                <Box className="rank-container">
                  {rankArray.map((element) => {
                    return <Box box-id = {singleDish.id} key={element} className={
                       (findElement(buttonState,element,singleDish.id)) ? "rank-item-select" : "rank-item"}
                        onClick={(event) => {handleRankSelectMenu(element,event)}}
                       >{element}</Box>;
                  })}
                </Box>
              </CardContent>
            </Card>
            </Box>
          )
        })
      }
    </Box>
  )
}

export default UserPoll;