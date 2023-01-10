import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import React from 'react'

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    margin-right: 2rem;

    h4{
        color: white;
        font-size: 0.8rem;
        padding: 0.4rem 0;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }
    
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4{
            color: white;
        }
    }
`;

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