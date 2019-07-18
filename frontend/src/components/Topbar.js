import React, { useContext } from 'react';
import { AppContext } from '../context';
import styled from "styled-components";

const Topbar = () => {
    const value = useContext(AppContext);

    return (
        <TopbarWrapper>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1>R6 Classes <span role="img" aria-label="Folder">📁</span></h1>
            </Link>
            <button>
                {value.state.type}
            </button>
        </TopbarWrapper>
    )
}

export default Topbar
