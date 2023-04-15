import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='margin: 10px' to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;