import React from 'react'
import './Searchresult.css'
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export default function Searchresult( { img,location,title,description,star,price,total}) {
    return (
        <div className="Searchresult">
        <img src={img}  alt=""/>
        <FavoriteBorderIcon className="searchresult_heart"/>
        <div className="searchresult_info">
            <div className="searchresult_infotop">
<p>{location}</p>
<h3> {title} </h3>
<p> _________ </p>
<p> {description} </p>

            </div>
            <div className="searchresult_infobottom">
                <div className="searchresult_star">
<StarIcon className="searchresult_staricon" />
<strong> {star} </strong>
                </div>
                <div className="searchresult_price">
                    <h2> {price} </h2>
                    <p>{total} </p>
                    </div>
                </div>
        </div>
        </div>
    )
}
