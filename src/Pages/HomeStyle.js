import styled from "styled-components";
import image from '../assets/image/banner.jpg'


export const Header = styled.div`
    padding-top: 130px;
    z-index: -1;
    position: absolute;
    top: -35px;
    right: 0;
    left: 0;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`
export const HomeContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderCol = styled.div`
`
Header.Title = styled.h1`
    font-size: 80px;
    line-height: 90px;
    color: #101010;
    font-weight: bold;
    font-family: 'Poppins';
`

Header.Text = styled.p`
    color: #101010;
    padding: 30px 0 55px 0;
    line-height: 30px;
    font-family: 'Poppins';
    width: 450px;
`
Header.Btns = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const BtnUS = styled.button`
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

export const BtnRead = styled.button`
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
    margin-left: 10px;

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
export const HeaderImg = styled.img`
    max-width: 100%;
    height: auto;
    filter: drop-shadow(4px 6px 5px #0d03034f);
`
export const HeaderImage = styled.img`
    max-width: 100%;
    height: auto;
    padding-left: 20px;
    filter: drop-shadow(4px 6px 5px #0d03034f);
`

export const ImgBtn = styled.div`
    position: relative;
`
export const Playe = styled.img`
    position: absolute;
    top: 37%;
    left: 40%; 
    cursor: pointer;
    transition: .5s;

    :hover{
        transform: scale(1.2);
        /* background-color: rgba(255, 255, 255, 0.5); */
    }
`
export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 40px;
`

export const ArrowIcon = styled.div`
    width: 76px;
    height: 76px;
    background-color: #fff;
    color: #000;
    font-size: 40px;
    opacity: 1;
    top: 109%;
    box-shadow: 0 0 10px rgba(13, 3, 3, 0.38);
    z-index: 999;
    border-radius: 50px;
    cursor: pointer;
    transition: .5s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    :hover{
        background-color:  #fdc001;
        cursor: pointer;
    }
`

export const ArrowIconRight = styled.div`
    width: 76px;
    height: 76px;
    background-color: #fff;
    color: #000;
    font-size: 40px;
    opacity: 1;
    top: 109%;
    box-shadow: 0 0 10px rgba(13, 3, 3, 0.38);
    z-index: 999;
    border-radius: 50px;
    cursor: pointer;
    transition: .5s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    :hover{
        background-color:  #fdc001;
        cursor: pointer;
    }
`

export const Make = styled.div`
    background: #fdc001;
    padding-top: 90px;
    padding-bottom: 90px;
    height: 690px;
`

Make.Title = styled.h2`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
`

Make.Text = styled.div`
    margin: 10px 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #2d2d2d;
    text-align: center;
`

Make.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

Make.Col = styled.div``

Make.Input = styled.div`
    padding: 0 25px;
    margin-bottom: 20px;
    width: 550px;
    height: 60px;
    padding: 20px;
    background: #ffffff;
    color: #d0d0cf;
    font-size: 15px;
    font-weight: normal;
    border: inherit;
    border-radius: 40px;
`

Make.SubInput = styled.div`
    padding: 0 25px;
    margin-bottom: 20px;
    width: 100%;
    height: 89px;
    padding: 25px;
    background: #ffffff;
    color: #d0d0cf;
    font-size: 15px;
    font-weight: normal;
    border: inherit;
    border-radius: 40px;
`

Make.Btn = styled.button`
    font-size: 16px;
    transition: ease-in all 0.5s;
    background-color: #363636;
    text-transform: uppercase;
    color: #fff;
    max-width: 204px;
    width: 100%;
    display: block;
    font-weight: bold;
    height: 61px;
    line-height: 61px;
    margin: 40px auto;
    border-radius: 40px;

    :hover {
    font-size: 16px;
    transition: ease-in all 0.5s;
    background-color:#fdc001;
    text-transform: uppercase;
    color: #fff;
    max-width: 204px;
    width: 100%;
    display: block;
    font-weight: bold;
    height: 61px;
    line-height: 61px;
    margin: 40px auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 40px;
    }
`

export const Service = styled.div`

`

Service.Title = styled.h2`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    margin-top: 50px;
    text-align: center;
`

Service.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
`
Service.Col = styled.div``

Service.ColTitle = styled.h4`
    color: #363636;
    font-size: 24px;
    line-height: 25px;
    font-weight: bold;
    padding-bottom: 25px;
`
Service.Img = styled.img``

Service.ColText = styled.p`
    width: 332px;
    line-height: 30px;
    padding-top: 23px;
    padding-bottom: 30px;
    font-family: 'Poppins';
`
Service.Btn = styled.button`
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

export const Price = styled.div`
    background: #2d2d2d;
    height: 850px;
    padding-bottom: 60px;
    padding-top: 90px;
    margin-top: 90px;
    position: relative;
`

Price.Title = styled.h2`
    font-size: 45px;
    color: #fff;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
    font-family: 'Poppins';
`

Price.Text = styled.p`
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    padding-top: 10px;
`

Price.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    color: #fff;
`

Price.Col = styled.div`
    background-color: #fff;
    color: #000;
    width: 40%;
    height: 422px;
    position: relative;
    top: 140px;
`
export const Card = styled.div`
    background-color: #fdc001;
    position: absolute;
    left: 23px;
    bottom: 50px;
    margin-bottom: 23px;
    width: 90%;
    height: 332px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 90%;
    padding-top: 10%;
`

Card.Title = styled.h3`
    color: #2d2d2d;
    font-size: 26px;
    line-height: 26px;
    font-weight: bold;
    padding-bottom: 35px;
    padding-top: 30px;
`

Card.Number = styled.h2`
    color: #fff;
    font-size: 68px;
    line-height: 68px;
    font-weight: bold;
`
Card.Span = styled.span`
    color: #fff;
    font-size: 26px;
    line-height: 16px;
    font-weight: bold;
    padding-bottom: 25px;
`

Card.Text = styled.p`
    line-height: 30px;
    padding-top: 23px;
    padding-bottom: 30px;
    color: #fff;
    width: 358px;
    height: 150px;
    margin: 0 auto;
`
Price.Btn = styled.button`
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
    position: absolute;
    top: 93%;
    left: 30%;

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
    position: absolute;
    top: 93%;
    left: 30%;
    }
`

export const Blog = styled.div`   
`

Blog.Title = styled.h2`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
    margin-top: 10%;
`

Blog.Text = styled.p`
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #2d2d2d;
    text-align: center;
`

Blog.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

Blog.Col = styled.div`
    margin-top: 70px;
    background: #fff;
    padding: 10px;
    height: 590px;
    box-shadow: 0 0 69px rgba(13, 3, 3, 0.06);
    margin-bottom: 55px;
    margin-right: 10px;
    position: relative;
`

Blog.Img = styled.img`
`

export const ImgTitle = styled.h2`
    color: #333333;
    font-size: 22px;
    line-height: 30px;
    font-weight: bold;
    padding: 20px;
`

export const ImgText = styled.p`
    padding: 10px 0 40px 0;
    color: #272727;
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    width: 300px;
    height: 140px;
    padding-left: 20px;
`

Blog.Btn = styled.button`
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
    position: absolute;
    top: 95%;
    left: 20%;

    :hover{
        background-color: #fdc001;
    }
`

export const About = styled.div`
    background: #fdc001;
    padding-top: 90px;
    padding-bottom: 90px;
`
About.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
About.Content = styled.div`
    background-color: #fff;
    width: 361px;
    height: 510px;
    position: relative;
    left: -51px;
`

About.Col = styled.div`

`

About.Img = styled.img`
    position: absolute;
    left: 5%;
    padding: 30px 0;
`
export const AboutTexts = styled.div`
    position: relative;
    left: 50px;
    width: 550px;
`
export const AboutTitle = styled.h2`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
`

export const AboutText = styled.p`
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #2d2d2d;
    padding-top: 20px;
`

export const AboutBtn = styled.button`
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
    box-shadow: 0 0 16px 3px #635d5d38;
    margin-left: 10%;
    margin-top: 5%;

    :hover{
        background-color: #fdc001;
        box-shadow: 0 0 16px 3px #635d5d38;
    }
`

export const Says = styled.div`

`

Says.Title = styled.h2`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
    padding-top: 5%;
`
Says.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10%;
`

Says.Col = styled.div``

Says.Img = styled.img`
`

Says.Text = styled.h5`
    margin-top: 10px;
    color: #2d2d2d;
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SubText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    font-size: 15px;
    color: #fdc001;
`
export const Texts = styled.p`
    color: #2d2d2d;
    font-size: 17px;
    line-height: 30px;
    border: #bcbcbb solid 1px;
    padding: 60px 30px;
    border-radius: 10px;
    margin-left: 5%;
`
export const SaysBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

Says.Btn = styled.button`
    width: 76px;
    height: 76px;
    background-color: #fff;
    color: #000;
    font-size: 40px;
    opacity: 1;
    top: 119%;
    box-shadow: 0 0 10px rgba(13, 3, 3, 0.38);
    z-index: 999;
    border-radius: 50px;
    margin: 0 10px;
    transition: ease-in all 0.5s;

    :hover{
        background-color: #fdc001;
    }
`

export const Footer = styled.div`
    margin-top: 90px;
    padding-top: 90px;
    background: #2d2d2d;
    text-align: center;
    height: 571px;
`
Footer.Row = styled.div`
    display: flex;
    justify-content: space-between;
`

Footer.Col = styled.div`

`
Footer.Title = styled.h2`
    color: #fff;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

Footer.Icon = styled.div`
    color: #fdc001;
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: ease-in all 0.5s;
    cursor: pointer;

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

Footer.SubTitle = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10px;
`

Footer.Icons = styled.div`
    color: #fdc001;
    font-size: 20px;
    padding-right: 5px;
`
Footer.Texts = styled.div`
    padding-bottom: 4px;
    display: block;
    font-size: 16px;
    color: #979793;
    cursor: pointer;
    transition: ease-in all 0.5s;

    :hover{
    padding-bottom: 4px;
    display: block;
    font-size: 16px;
    color: #fdc001;
    cursor: pointer;
    }
`

export const Follow = styled.div`
    margin-top: 90px;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
`
Follow.Title = styled.h2`
    color: #fdc001;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
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

Follow.Text = styled.p`
    color: #252525;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    padding-top: 35px;
    font-weight: normal;
    transition: ease-in all 0.5s;
`