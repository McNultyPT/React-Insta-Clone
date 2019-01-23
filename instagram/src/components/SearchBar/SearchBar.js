import React from 'react';
// import PropTypes from 'prop-types';

import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className='searchContainer'>
            <div className='searchLeft'>
                <i class="fab fa-instagram fa-4x"></i>
                <h1>Instagram</h1>
            </div>
            <div className='searchMid'>
                <form onSubmit={ (e) => props.searchFilter(e)}>
                    <input 
                        type='search bar'
                        placeholder='Search'
                        name='searchInput'
                        value={props.searchInput}
                        onChange={props.handleChanges}
                    />
                </form>
            </div>
            <div className='searchRight'>
                <i class="far fa-compass fa-3x"></i>
                <i class="far fa-heart fa-3x"></i>
                <i class="far fa-user fa-3x"></i> 
            </div>
        </div>
    )
}

// SearchBar.propTypes = {
//     searchFilter: PropTypes.function,
//     searchInput: PropTypes.string,
//     handleChanges: PropTypes.function
// }

export default SearchBar;