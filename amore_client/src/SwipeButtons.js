import React from 'react'
import "./SwipeButtons.css"

import IconButton from '@mui/material/IconButton';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';

function SwipeButtons(){
    return (
      <div className='swipeButtons'>
        <IconButton  className='swipeButtons_repeat'>
            <ReplayRoundedIcon fontSize='large'/>
        </IconButton>

        <IconButton  className='swipeButtons_left'>
            <CloseRoundedIcon fontSize='large'/>
        </IconButton>

        <IconButton  className='swipeButtons_star'>
            <StarRateRoundedIcon fontSize='large'/>
        </IconButton>

        <IconButton  className='swipeButtons_right'>
            <FavoriteRoundedIcon fontSize='large'/>
        </IconButton>

        <IconButton  
            className='swipeButtons_lightning'>
            <FlashOnRoundedIcon fontSize='large'/>
        </IconButton>
      </div>
    )
}


// function SwipeButtons(){
//     return (
//       <div className='swipeButtons'>
//         <IconButton  className='swipeButtons_repeat'>
//             <ReplayRoundedIcon fontSize='large'/>
//         </IconButton>

//         <IconButton  className='swipeButtons_left'>
//             <CloseRoundedIcon fontSize='large'/>
//         </IconButton>

//         <IconButton  className='swipeButtons_star'>
//             <StarRateRoundedIcon fontSize='large'/>
//         </IconButton>

//         <IconButton  className='swipeButtons_right'>
//             <FavoriteRoundedIcon fontSize='large'/>
//         </IconButton>

//         <IconButton  
//             className='swipeButton_lighting'>
//             <FlashOnRoundedIcon fontSize='large'/>
//         </IconButton>
//       </div>
//     )
// }

export default SwipeButtons
