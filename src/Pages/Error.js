import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles.css/Error.css"

export default function Error () {
    return (
        <div className='error-wrapper'>
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    )
    
}