import React from 'react';
import styled from 'styled-components'
import { AccountButton } from '../AccountButton/AccountButton';
import { NavLink } from "react-router-dom";

const TopBar = () => {
    return (
    <NavBar>
        <LeftNav>
            <p>open compound</p>
        </LeftNav>
        <MidNav>
              <StyledLink activeClassName='is-active' to="/">Dashboard</StyledLink>
              <StyledLink activeClassName='is-active' to="/vote">Vote</StyledLink>
        </MidNav>
        <RightNav>
            <AccountButton/>
        </RightNav>
    </NavBar>
    );
  }

export default TopBar;


const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    min-height: 50px;
    background-color: #1a1a1a;
    padding: 0px 20px;
`
const LeftNav = styled.div`
    display: flex;
    align-items: center;
    color: #FFBF00;
    background-color: #1a1a1a;
`
const MidNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #1a1a1a;
    width: 200px;
    font-size: 16px;
`
const RightNav = styled.div`
    display: flex;
    background-color: #1a1a1a;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #FFBF00;
    font-size: 16px;
    &:hover {
        color: #ffd700;
    }`