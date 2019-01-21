import React from 'react';

import './SearchBar.css';

function SearchBar() {
    return (
        <div>
            <div>
                <i class="fab fa-instagram fa-3x"></i>
                <h1>Instagram</h1>
            </div>
            <div>
                <form>
                    <input 
                        type='search bar'
                        placeholder='Search'
                    />
                </form>
            </div>
            <div>
                <i class="far fa-compass fa-2x"></i>
                <i class="far fa-heart fa-2x"></i>
                <i class="far fa-user fa-2x"></i> 
            </div>
        </div>
    )
}

export default SearchBar;