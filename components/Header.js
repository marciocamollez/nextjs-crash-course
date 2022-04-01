import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return ( 
        <>
            <div>
                <h1 className={headerStyles.title}>WebDev News</h1>
                <p className={headerStyles.description}>Notícias</p>
            </div>
        </>
    );
}
 
export default Header;