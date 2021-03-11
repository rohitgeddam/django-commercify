import { React } from 'react'
import  './Header.scss'

const Header = () => {
    return(
        <div class="header-container">
            <ul>
                <li class="header-site-icon">Geddam</li>
                <li><i class="fa fa-shopping-cart header-cart-icon">Cart</i></li>
            </ul>
        </div>
    )
}

export default Header;