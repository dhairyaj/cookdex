import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FormStyle } from './StyledItems';

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