import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 4rem 0;
`;

export const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 5;
    left: 50%;
    bottom: 5%;
    transform: translate(-50%, -5%);
    color: white;
    width: 90%;
    text-align: center;
    font-weight: 800;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
`;

export const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

export const StyledNavLink = styled(NavLink)`
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

export const FormStyle = styled.form`

    margin: 0rem 10rem;

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

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const CuisineCard = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  
  h2 {
    margin-bottom: 2rem;
  }

  h4{
    margin: 1rem 0;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: 600;
  }

  ul{
    margin-top: 2rem;
  }
`;

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2rem;
  outline: none;
`;

export const Info = styled.div`
  margin-left: 10rem;
`;

export const RecipeCard = styled.div`
  img{
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;