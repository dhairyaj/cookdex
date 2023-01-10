import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FormStyle = styled.form`

    margin: 3rem 10rem 0;

    div{
        position: relative;
        width: 100%;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        width: 100%;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 3rem;
        outline: none;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;
    }
`;

function Search() {

    const [searchInput, setSearchInput] = useState("");

    const redirect = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        redirect("/find/" + searchInput);
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input type="text" onChange={(e) => {
                    setSearchInput(e.target.value);
                }} value={searchInput}/>
            </div>
        </FormStyle>
    )
}

export default Search