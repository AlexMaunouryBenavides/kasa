import React from 'react'
import Banner from '../Component/Banner';
/* import Button from '../Component/Button'; */
import BannerHome from "../Assets/Banner_home.svg"
import logements from "../Data/logements.json"
import Footer from '../Footer';
import "../styles.css/Cart.css"


export default function Home() {
    return (
        <div>
            <Banner img={BannerHome} texte="Chez vous, partout et ailleurs"/>
            <div className='cart-container'>
                {logements.map(logement => {        
                        return(            
                            <div className="cart" key={logement.id}>
                                <div className="cover-wrapper">
                                    <div className='shadow-cover'></div>
                                    <img src={logement.cover} alt='cover' className='cover' />
                                    <h3>{logement.title}</h3>
                                </div>
                            </div>         
                        )
                    })}
            </div>
        
            <Footer/>
        </div>
    )
}

