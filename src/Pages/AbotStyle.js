import styled from "styled-components";
import { Follow } from "./HomeStyle";

export const Header = styled.div`
    background: #fdc001;
    padding-top: 90px;
    padding-bottom: 90px;
    height: 650px;
    width: 100%;
    margin-top: 15%;   
`
Header.Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`
Header.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
Header.Col = styled.div`
    width: 44%;
`

Header.Content = styled.div`
    background-color: #fff;
    width: 361px;
    height: 510px;
    position: relative;
    left: -51px;
`

Header.Img = styled.img`
    position: absolute;
    left: 4%;
    padding: 30px 0;
`

Header.Title = styled.h1`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* text-align: center; */
`

Header.Text = styled.p`
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #2d2d2d;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

Header.Btn = styled.button`
    margin-top: 35px;
    font-size: 16px;
    background: #363636;
    max-width: 204px;
    width: 100%;
    transition: ease-in all 0.5s;
    color: #fff;
    display: block;
    height: 61px;
    line-height: 61px;
    text-align: center;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: bold;

    :hover{
    margin-top: 35px;
    font-size: 16px;
    background: #fdc001;
    max-width: 204px;
    width: 100%;
    transition: ease-in all 0.5s;
    color: #fff;
    display: block;
    height: 61px;
    line-height: 61px;
    text-align: center;
    border-radius: 30px;
    text-transform: uppercase;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: bold;
    }
`

export const Footer = styled.div`
    margin-top: 150px;
    padding-top: 90px;
    background: #2d2d2d;
    /* text-align: center; */
`

export const AboutConatiner = styled.div`
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
`
Footer.Row = styled.div`
    display: flex;
    justify-content: space-between;
`

Footer.Col = styled.div``

Footer.Icon = styled.div`
    color: #fdc001;
    margin-right: 5px;
`
Footer.Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
    text-align: left;
`
Footer.Text = styled.p`
    color: #fff;
    text-align: left;
    margin-bottom: 15px;
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    width: 312px;
    height: 169px;
`

Footer.Items = styled.li`
    color: #979793;
    font-size: 17px;
    line-height: 18px;
    padding-bottom: 10px;
    display: block;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    transition: ease-in all 0.5s;
    cursor: pointer;

    :hover{
        color: #fdc001;
    }
`

Footer.Input = styled.div`

`

Footer.Btn = styled.button`
    font-size: 16px;
    transition: ease-in all 0.5s;
    background-color: #fdc001;
    text-transform: uppercase;
    color: #fff;
    display: block;
    font-weight: normal;
    line-height: 51px;
    height: 51px;
    max-width: 191px;
    width: 100%;
    display: block;
    border: #fff solid 2px;
    border-radius: 10px;

    :hover{
    font-size: 16px;
    transition: ease-in all 0.5s;
    background-color: #fff;
    text-transform: uppercase;
    color: #fdc001;
    display: block;
    font-weight: normal;
    line-height: 51px;
    height: 51px;
    max-width: 191px;
    width: 100%;
    display: block;
    border: #fff solid 2px;
    border-radius: 10px;
    }
`

export const CopyRight = styled.div`
    margin-top: 90px;
    padding-top: 50px;
    padding-bottom: 50px;
    background: #fefefd;
`

CopyRight.Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

CopyRight.Title = styled.h3`
    color: #fdc001;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
    text-align: center;
`

CopyRight.Icons = styled.div`
    font-size: 17px;
    color: #fff;
    transition: ease-in all 0.5s;
    background: #2d2d2d;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50px;
    text-align: center;
    margin: 0 10px;
    cursor: pointer;

    :hover{
    font-size: 17px;
    color: #fff;
    transition: ease-in all 0.5s;
    background: #fdc001;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50px;
    text-align: center;
    margin: 0 10px;
    cursor:pointer;
    }
`

CopyRight.Text = styled.p`
    color: #252525;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    padding-top: 35px;
    font-weight: normal;
`