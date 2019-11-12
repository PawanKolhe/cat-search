import React from 'react';

import './search-box.styles.css'

const SearchBox = (props) => {
    return (
        <div className="search-box-container">
            <input className="search-box" type="search" placeholder={props.placeholder} onChange={props.handleChange} />
        </div>
    );
}

export default SearchBox;