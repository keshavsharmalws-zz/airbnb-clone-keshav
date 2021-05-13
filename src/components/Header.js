import React from 'react'
import logo from '../images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import {Link } from 'react-router-dom'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Header.css'
import Avatarmenu from './Avatar';
export default function Header() {
    return (
       
        <div className="header">
         <Link to='/' style={{textDecoration:'none', color:'black'}}>    <img className="header_icon img-fluid"  src={logo} alt=""/></Link>
            <div className="header_center">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
<LanguageIcon/>
<ExpandMoreIcon/>
<Avatarmenu />
            </div>
        </div>
       
    )
}
