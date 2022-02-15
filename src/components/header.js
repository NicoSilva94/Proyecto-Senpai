import React from "react";

class Header extends React.Component {
    render () {
        return (
            <header class="header-main">
                <a href="index.html" class="logo-link" alt="Logo placeholder">Ns Store</a>
                <div class="search-container">
                    <input type="text" placeholder="Search.." />
                </div>
                <nav class="nav-bar">
                    <ul>
                        <li><a href="store.html" class="nav-link">Products</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="login.html" class="nav-link">Profile</a></li>
                        <li><a href="cart.html" class="cart-link">MyCart</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;