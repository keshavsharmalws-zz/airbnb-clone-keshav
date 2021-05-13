import React from 'react'
import Banner from './Banner'
import img1 from '../images/1.jpg'

import img2 from '../images/2.jpg'

import img3 from '../images/3.jpg'




import Card from './Card'
import './Home.css'
export default function Home() {
    return (
        <div className="home">
          
            <Banner />
            
           <div className="home_section">
               <Card src={img1} title="Online Experiences" description="Spaces that are more than just a place to sleep."/>
               <Card src={img2} title="Unique Stays" description="Unique activities we can do together, led by a world of hosts." />
               <Card src={img3} title="Happy Customers" description="Comfortable private places, with room for friends or family." />
           </div>
           <div className="home_section">
               <Card src={img3} title="Lifetime Experiences" description="Spaces that are more than just a place to sleep."/>
               <Card src={img1} title="Best Rooms" description="Comfortable private places, with room for friends or family." />
               <Card src={img2} title=" Adventure Tour" description="Meet people all over the world while trying something new." />
           </div>
          
        </div>
    )
}
