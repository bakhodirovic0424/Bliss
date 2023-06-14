import styled from "styled-components";

export const FooterContent = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
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