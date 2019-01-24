import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './SearchBar.css';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 20px;
    margin-bottom: 50px;
`;

const LogoHeader = styled.div`
    display: flex;
    margin: 25px 0 0 30px;
`;

const SearchH1 = styled.h1`
    font-size: 40px;
    margin: 10px 0 0 45px;
    padding-left: 45px;
    border-left: 1px solid black;
    padding-top: 15px;
`;

const SearchImg = styled.img`
    height: 125px;
    width: 125px;
    margin-top: -10px;
`;

const SearchMid = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 4px;
    border: 2px solid lightgrey;
    font-size: 22px;
    text-align: center;
    margin-right: 50px;
`;

const SearchRight = styled.div`
    display: flex;
    justify-content: space-around;
    width: 325px;
    margin: 30px 15px 0 0;
`;

function SearchBar(props) {
    return (
        <Header>
            <LogoHeader >
                <i class="fab fa-instagram fa-3x"></i>
                <SearchH1>Insta</SearchH1>
                <SearchImg src='https://static1.fjcdn.com/comments/Victim+blam+_1e769e2bbdc2c42861767356de0be360.jpg' />
            </LogoHeader>
            <SearchMid>
                <form onSubmit={ (e) => props.searchFilter(e)}>
                    <SearchInput 
                        type='search bar'
                        placeholder='Search'
                        name='searchInput'
                        value={props.searchInput}
                        onChange={props.handleChanges}
                    />
                </form>
            </SearchMid>
            <SearchRight>
                <i class="far fa-compass fa-2x"></i>
                <i class="far fa-heart fa-2x"></i>
                <i class="far fa-user fa-2x"></i> 
            </SearchRight>
        </Header>
    )
}

SearchBar.propTypes = {
    searchFilter: PropTypes.function,
    searchInput: PropTypes.string,
    handleChanges: PropTypes.function
}

export default SearchBar;