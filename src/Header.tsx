import React from 'react';

function Header() {
    console.log("Header rendering")
    return (<div>
        <a href='#s'>Home</a>
        <a href='#s'>News Feed</a>
        <a href='#s'>Messages</a>
    </div>)
}

export default Header;