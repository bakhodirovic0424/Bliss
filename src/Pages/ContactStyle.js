import styled from "styled-components";

export const LoaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 115px);
    width: 100%;
`

export const Content = styled.div`
    background: #fdc001;
    height: 700px;
    padding-top: 90px;
    padding-bottom: 90px;
    position: relative;
    top: 20%;
`

Content.Title = styled.h1`
    font-size: 45px;
    color: #2d2d2d;
    line-height: 50px;
    font-weight: bold;
    padding: 0;
    text-align: center;
`

Content.Text = styled.p`
    margin: 0px;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #2d2d2d;
    text-align: center;
    padding-top: 10px;
`

Content.Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
`

Content.Col = styled.div`
`

Content.Input = styled.div`
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

Content.SubInput = styled.div`
    padding: 0 25px;
    margin-bottom: 20px;
    width: 95%;
    height: 89px;
    padding: 25px;
    background: #ffffff;
    color: #d0d0cf;
    font-size: 15px;
    font-weight: normal;
    border: inherit;
    border-radius: 40px;
    margin: 0 auto;
`

Content.Btn = styled.button`
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

    :hover{
        background-color: #fdc001;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
   
 `

export const Footer = styled.div`
    margin-top: 170px;
    padding-top: 90px;
    background: #2d2d2d;
    height: 70vh;
    /* text-align: center; */
`

Footer.Row = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: space-around;
`

Footer.Col = styled.div``

Footer.Title = styled.h1`
    color: #fff;
    font-size: 23px;
    padding-bottom: 20px;
    line-height: 23px;
    font-weight: bold;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

Footer.Icon = styled.div`
    color: #fdc001;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    height: 168px;
`

Footer.Items = styled.li`
    font-size: 17px;
    line-height: 18px;
    padding-bottom: 10px;
    display: block;
    color: #979793;
    transition: ease-in all 0.5s;

    :hover{
        color: #fdc001;
    }
`

Footer.Input = styled.div``

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
        background-color: #fff;
        color: #fdc001;
    }
`

Footer.Phone = styled.p`
    padding-bottom: 4px;
    font-size: 16px;
    color: #979793;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10px;
`
Footer.SubImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
`

Footer.Email = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #979793;
    cursor: pointer;
    transition: ease-in all 0.5s;

    :hover{
        color: #fdc001;
    }
`

Footer.MailIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
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
Follow.Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
Follow.Items = styled.div`
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
    transition: ease-in all 0.5s;
    font-weight: normal;

    .text:hover{
        color: #fdc001;
        cursor: pointer;
    }
`