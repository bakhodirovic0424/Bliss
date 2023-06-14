import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Content = styled.div`
    border-top: 40px solid #fdc001;
    background: none;
    z-index: 999999;
    height: 74.15px;
`
export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    color: #363636;
    font-size: 41px;
    font-weight: 600;
    font-family: 'Poppins';
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 50px;
`

Menu.Items = styled.li`
    color: #363636;
    font-size: 17px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Poppins';
    padding-right: 50px;
    transition: .5s;
    cursor: pointer;

    :hover{
    color: #fdc001;
    font-size: 17px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Poppins';
    padding-right: 50px;
    cursor: pointer;
    }
`
