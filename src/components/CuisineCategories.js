import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { List, StyledNavLink } from './StyledItems';

function CuisineCategories() {
    return (
        <List>
            <StyledNavLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </StyledNavLink>
            <StyledNavLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </StyledNavLink>
            <StyledNavLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </StyledNavLink>
            <StyledNavLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </StyledNavLink>
        </List>
    )
}

export default CuisineCategories