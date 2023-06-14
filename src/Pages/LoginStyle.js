import styled from "styled-components";

export const LoaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 115px);
    width: 100%;
`

export const Header = styled.div``

Header.Title = styled.h1`
    text-transform: capitalize;
    text-align: center;
    padding-top: 50px;
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    letter-spacing: 2px;
`
Header.Text = styled.p`
    color: #363636;
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 10px;
`
Header.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

Header.Col = styled.div`
    background-color: #fdc001;
    border-radius: 5%;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 500px;
    height: 650px;
    padding: 20px;
`
Header.Input = styled.div`
    margin-bottom: 20px;
    width: 100%;
    height: 60px;
    padding: 20px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    color: rgb(208, 208, 207);
    font-size: 15px;
    font-weight: normal;
    border: inherit;
    border-radius: 40px;
`

Header.Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

        /* CSS */

.button-86 {
    all: unset;
    width: 100px;
    height: 30px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-86::after,
.button-86::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all .4s;
}

.button-86::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
}

.button-86::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
}

.button-86:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
}

.button-86:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
}

.button-86:active::after {
    transition: 0s;
    transform: translate(0, 5%);
}
`
