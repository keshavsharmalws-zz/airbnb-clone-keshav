import React from 'react'
import room1 from '../images/room1.jpg'

import room2 from '../images/room2.jpg'
import './Searchpage.css'
import Button from '@material-ui/core/Button';
import Searchresult from './Searchresult';
export default function Searchpage() {
    return (
        <div className="searchpage">
          <div className="searchpage_info">
              <p> 62 stays . 26august to 30 august. 2 guest </p>
              <h1>Stays nearby</h1>
              <Button variant='outlined'>Cancellation Flexibility </Button>
              <Button variant='outlined'>Type of place </Button>
              <Button variant='outlined'>Price </Button>
              <Button variant='outlined'> Rooms & Beds</Button>
              <Button variant='outlined'>More filters </Button>
          </div>
          <Searchresult img={room1}
           location="private room in london" 
           title="Stay at this Edwartan House"
                        description="2 guests · 1 bedroom · 1 bed · 2.5 shared bathrooms
            Wifi · Kitchen · Washing machine "
            star={2.3}
            price="$30/night"
            total="$117 total"
            />
            <Searchresult img={room2}
                    location="private room in bangkok" 
                    title="Stay at this Bangkok House"
                        description="4 guests · 2 bedroom · 1 bed · 2.5 shared bathrooms .Wifi  · Washing machine "
                    star={4.73}
                    price="$50/night"
                    total="$197 total"
            />
            <Searchresult img={room1}
                    location="private room in london" 
                    title="Stay at this Edwartan House"
                        description="2 guests · 1 bedroom · 1 bed ·
            Wifi · Kitchen · Washing machine "
            star={5.0}
            price="$300/night"
            total="$267 total"
            />
             <Searchresult img={room2}
                    location="private room in bangkok" 
                    title="Stay at this Bangkok House"
                        description="4 guests · 2 bedroom · 1 bed · 2.5 shared bathrooms .Wifi  · Washing machine "
                    star={4.73}
                    price="$50/night"
                    total="$197 total"
            />
            <Searchresult img={room1}
                    location="private room in london" 
                    title="Stay at this Edwartan House"
                        description="2 guests · 1 bedroom · 1 bed ·
            Wifi · Kitchen · Washing machine "
            star={5.0}
            price="$300/night"
            total="$267 total"
            />
        </div>
    )
}
