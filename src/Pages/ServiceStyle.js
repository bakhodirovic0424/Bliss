import styled from "styled-components";
import bg from '../assets/image/banner.jpg'

export const Main = styled.div`
    max-width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 40px;
    z-index: -1;
    left: 0;
    right: 0;
    height: calc(100vh - 40px);
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const Container = styled.div`
    max-width: 100%;
    height: 80vh;
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    top: 75px;
    right: 0;
    left: 0 ;
`
export const Content = styled.div`
    padding-top: 100px;
`
export const ServiceContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`

Content.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Content.Col = styled.div`
    margin-top: 50px;
`

Content.CardTitle = styled.h3`
    color: #363636;
    font-size: 24px;
    line-height: 25px;
    font-weight: bold;
    padding-bottom: 25px;
`

Content.Img = styled.img``

Content.CardText = styled.p`
    width: 332px;
    line-height: 30px;
    padding-top: 23px;
    padding-bottom: 30px;
    font-family: 'Poppins';
`

Content.Title = styled.h1`
    font-size: 60px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
`

Content.Btn = styled.button`
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
    font-weight: bold;
    }
`

export const LoaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 115px);
    width: 100%;
`

export const Footer = styled.div`
    margin-top: 90px;
    padding-top: 90px;
    padding-bottom: 90px;
    background: #2d2d2d;
    width: 100%;
    text-align: center;
`

Footer.Row = styled.div`
    display: flex;
    justify-content: space-between;
`

Footer.Col = styled.div``

Footer.Title = styled.h3`
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

Footer.Icon = styled.div`
    color: #fdc001;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

Footer.Texts = styled.p`
    color: #fff;
    text-align: left;
    margin-bottom: 15px;
    width: 312px;
    height: 168px;
`

Footer.Items = styled.li`
    color: #979793;
    font-size: 17px;
    line-height: 18px;
    padding-bottom: 10px;
    display: block;
    text-align: left;
    transition: ease-in all 0.5s;

    :hover{
        color: #fdc001;
    }
`

Footer.Input = styled.div``

Footer.Btn = styled.button`
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
    transition: ease-in all 0.5s;

    :hover{
        background-color: #fff;
        color: #fdc001;
    }
`

Footer.SubTitle = styled.p`
    padding-top: 15px;
    padding-bottom: 4px;
    font-size: 16px;
    color: #979793;
    text-align: left;
`

Footer.Mail = styled.p`
    padding-top: 15px;
    padding-bottom: 4px;
    font-size: 16px;
    color: #979793;
    transition: ease-in all 0.5s;
    text-align: left;


    :hover{
        color: #fdc001;
        cursor: pointer;
    }
`

export const Follow = styled.div`
    margin-top: 90px;
    padding-top: 50px;
    padding-bottom: 50px;
    background: #fefefd;
`

Follow.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
Follow.Title = styled.h2`
    color: #fdc001;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
    text-align: center;
`

Follow.Icon = styled.div`
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
        background-color: #fdc001;
    }
`
Follow.Text = styled.p`
    text-align: center;
    padding-top: 15px;
    transition: ease-in all 0.5s;
    cursor: pointer;

    .text:hover{
        color: #fdc001;
        transition: ease-in all 0.5s;
    }
`