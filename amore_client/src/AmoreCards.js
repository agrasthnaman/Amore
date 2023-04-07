import React,{useEffect, useState} from 'react'
import "./AmoreCards.css"
import TinderCard from "react-tinder-card"
// import AmoreCard from './AmoreCard';
// import axios from "./axios"
// export class AmoreCards extends Component {
function AmoreCards(){
    const [people, setPeople] = useState([
        {
            name: "Ayush Anand",
            url: "https://instagram.fccu4-2.fna.fbcdn.net/v/t51.2885-15/309540085_136839595755669_2231559718475532977_n.webp?stp=dst-jpg_e35_s320x320&_nc_ht=instagram.fccu4-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=NizKLfSgNbYAX8eGTqB&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCdKquB7xSbDPHQOk83pGNYejob7vujtv-oy405HI3d2A&oe=64344303&_nc_sid=8fd12b"
        },
        {
            name: "Aditya Nigam",
            url: "https://instagram.fccu4-2.fna.fbcdn.net/v/t51.2885-15/329778411_148462841361322_5745323730748529603_n.webp?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fccu4-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=XXgU_EJ97iIAX-dttx5&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAzNTAyMDk3MjEzMTIwNzk2MQ%3D%3D.2-ccb7-5&oh=00_AfCk05u5F9AcAbDMb847Zb17YySRmq3PQNWGzZjDirRdxA&oe=6435A1E4&_nc_sid=1527a3"
        },
        {
            name: "Vartika",
            url: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
        },
        
        
    ])

    // useEffect(() => {
    //     async function fetchData(){
    //         const req = await axios.get("")
    //     }
    // })

    const swiped  = (direction, nameToDelete, url) => {
        console.log("removing: "+ nameToDelete + url);
    }

    const outOfFrame  = (name) => {
        console.log(name + "left the screen!");
    }
    

    return (
      <div className="AmoreCards">
        <div className='tinderCards_cardContainer'>
        {people.map((person) => (
        
        
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe = {(dir) => swiped(dir, person.name, person.url)}
                onCardLeftScreen = {() => outOfFrame(person.name)}
            >
            <div
                // style={{backgroundImage: "url(" + person.url +"}" }}
                style={{backgroundImage: `url(${person.url})`}}
                className='card'
            ></div>
            </TinderCard>
        ))}
        </div>
      </div>
    );
//   }
}

export default AmoreCards
