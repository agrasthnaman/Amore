import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { blue } from '@mui/material/colors';

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header_icon' color="action" sx={{ color: blue[50] }}/>
      </IconButton>
  {/*<img className='header_logo' src="https://enzoescoba.de/shopee/2698-superlarge_default/men-organic-cotton-shirt-amore.jpg" alt="" />*/}

      <FavoriteTwoToneIcon fontSize='large' className='header_icon' sx={{ color: blue[50] }}/>
      <IconButton>
        <ForumIcon fontSize='large' className='header_icon' sx={{ color: blue[50] }}/>
      </IconButton>
    </div>
  )
}

export default Header
