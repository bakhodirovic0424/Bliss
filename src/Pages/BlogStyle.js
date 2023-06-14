import styled from "styled-components";

export const LoaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 115px);
    width: 100%;
`

export const BlogContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Header = styled.div`
    background: #fff;
    padding-top: 90px;
    padding-bottom: 60px;
`

Header.Title = styled.h1`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
`

Header.Text = styled.p`
    text-align: center;
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #2d2d2d;
`

Header.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Header.Col = styled.div`
    margin-top: 50px;
    background: #fff;
    padding: 10px;
    box-shadow: 0 0 69px rgba(13, 3, 3, 0.06);
    margin-bottom: 55px;
    height: 560px;
`

Header.Img = styled.img``


Header.ImgText = styled.p`
    position: relative;
    display: block;
    background: #121212;
    width: 98px;
    height: 43px;
    margin: 0 auto;
    text-align: center;
    z-index: 999999;
    line-height: 43px;
    color: #fff;
    margin-top: -46.5px;
`

Header.Active = styled.p`
    position: relative;
    display: block;
    background: #fdc001;
    width: 98px;
    height: 43px;
    margin: 0 auto;
    text-align: center;
    z-index: 999999;
    line-height: 43px;
    color: #fff;
    margin-top: -46.5px;
`

Header.CardTitle = styled.h1`
    color: #333333;
    font-size: 22px;
    line-height: 30px;
    font-weight: bold;
    padding: 20px;
    padding-top: 10px;
`

Header.CardText = styled.p`
    padding: 0px 20px;
    color: #272727;
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    width: 300px;
    height: 140px;
`

Header.Btn = styled.button`
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
    margin-top: 25%;
    margin-left: 20%;

    :hover{
        background-color: #fdc001;
    }
`

export const Footer = styled.div`
    margin-top: 90px;
    padding-top: 90px;
    background: #2d2d2d;
    text-align: center;
`

Footer.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Footer.Col = styled.div``

Footer.Title = styled.h1`
    color: #fff;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
    text-align: left;
`

Footer.Icon = styled.div`
`

Footer.Texts = styled.p`
    color: #fff;
    text-align: left;
    margin-bottom: 15px;
`

Footer.Items = styled.li`
`

Footer.Input = styled.div`
`

Footer.Btn = styled.button``

Footer.SubTitile = styled.p``

Footer.Mail = styled.p`
`

export const Follow = styled.div`
    margin-top: 90px;
    padding-top: 50px;
    padding-bottom: 50px;
    background: #fefefd;
`

Follow.Title = styled.h1`
    color: #fdc001;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
    text-align: center;
`

Follow.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

Follow.Icons = styled.div`
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
    color: #252525;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    padding-top: 35px;
    font-weight: normal;
    transition: ease-in all 0.5s;
    cursor: pointer;

    span:hover{
        color: #fdc001;
    }
`
