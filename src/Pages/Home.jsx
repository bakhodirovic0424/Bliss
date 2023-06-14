import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import image from '../../src/assets/image/img1.png'
import img from '../../src/assets/image/img2.png'
import iconply from '../assets/image/play_icon.png'
import spaImg1 from '../assets/image/service1.jpg'
import spaImg2 from '../assets/image/service2.jpg'
import spaImg3 from '../assets/image/service3.jpg'
import blog1 from '../assets/image/blog1.jpg'
import blog2 from '../assets/image/blog2.jpg'
import blog3 from '../assets/image/blog3.jpg'
import about from '../assets/image/about_img.jpg'
import says from '../assets/image/test2.png'
import Loader from '../components/Loader'
import { Header, Row, HomeContainer, BtnUS, HeaderImg, HeaderImage, BtnRead, HeaderCol, ImgBtn, Playe, ArrowIcon, ArrowIconRight, Make, Arrow, Service, Price, Card, Blog, ImgTitle, ImgText, About, AboutTitle, AboutText, AboutTexts, AboutBtn, Says, SubText, Texts, SaysBtn, Footer, Follow } from './HomeStyle'
import { Container } from '../components/Loader/style'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoad(false);

        }, 500);
    })

    return (
        <Container>
            {
                load ? <Loader />
                    :
                    <Header>
                 <HomeContainer>
                 <Row>
                     <HeaderCol>
                         <Header.Title>
                             Spa <br />
                             Center
                         </Header.Title>
                         <Header.Text>
                             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                         </Header.Text>
                         <Header.Btns>
                             <BtnUS>
                                 contact us
                             </BtnUS>
                             <BtnRead>
                                 read more
                             </BtnRead>
                         </Header.Btns>
                     </HeaderCol>
                     <HeaderCol>
                         <ImgBtn>
                             <HeaderImg src={image} />
                             <Link to={'/about'}>
                                 <Playe src={iconply} />
                             </Link>
                         </ImgBtn>
                     </HeaderCol>
                     <HeaderCol>
                         <ImgBtn>
                             <HeaderImage src={img} />
                             <Link to={'/service'}>
                                 <Playe src={iconply} />
                             </Link>
                         </ImgBtn>
                     </HeaderCol>
                 </Row>
                 <Arrow>
                     <ArrowIcon>
                         <i class="ri-arrow-left-s-line"></i>
                     </ArrowIcon>
                     <ArrowIconRight>
                         <i class="ri-arrow-right-s-line"></i>
                     </ArrowIconRight>
                 </Arrow>
             </HomeContainer>
             <Make>
                 <HomeContainer>
                     <Make.Title>
                         Make Appointment
                     </Make.Title>
                     <Make.Text>
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     </Make.Text>
                     <Make.Row>
                         <Make.Col>
                             <Make.Input>
                                 <input type="text" placeholder='Your Name' />
                             </Make.Input>
                             <Make.Input>
                                 <input type="text" placeholder='Phone Number' />
                             </Make.Input>
                             <Make.Input>
                                 <input type="text" placeholder='Time' />
                             </Make.Input>
                         </Make.Col>
                         <Make.Col>
                             <Make.Input>
                                 <input type="email" placeholder='Email' />
                             </Make.Input>
                             <Make.Input>
                                 <input type="text" placeholder='Select Massage spa' />
                             </Make.Input>
                             <Make.Input>
                                 <input type="text" placeholder='Select Data' />
                             </Make.Input>
                         </Make.Col>
                     </Make.Row>
                     <Make.SubInput>
                         <input type="text" placeholder='message' />
                     </Make.SubInput>
                     <Make.Btn>
                         send now
                     </Make.Btn>
                 </HomeContainer>
             </Make>
             <Service>
                 <Service.Title>
                     Our Massage Services
                 </Service.Title>
                 <HomeContainer>
                     <Service.Row>
                         <Service.Col>
                             <Service.ColTitle>
                                 Ayurveda Spa
                             </Service.ColTitle>
                             <Service.Img src={spaImg1} />
                             <Service.ColText>
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                             </Service.ColText>
                             <Service.Btn>
                                 read more
                             </Service.Btn>
                         </Service.Col>
                         <Service.Col>
                             <Service.ColTitle>
                                 Massage Spa
                             </Service.ColTitle>
                             <Service.Img src={spaImg2} />
                             <Service.ColText>
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                             </Service.ColText>
                             <Service.Btn>
                                 read more
                             </Service.Btn>
                         </Service.Col>
                         <Service.Col>
                             <Service.ColTitle>
                                 Luxury Spa
                             </Service.ColTitle>
                             <Service.Img src={spaImg3} />
                             <Service.ColText>
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                             </Service.ColText>
                             <Service.Btn>
                                 read more
                             </Service.Btn>
                         </Service.Col>
                     </Service.Row>
                 </HomeContainer>
             </Service>

             <Price>
                 <HomeContainer>
                     <Price.Title>
                         Our Priceing
                     </Price.Title>
                     <Price.Text>
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     </Price.Text>
                     <Price.Row>
                         <Price.Col>
                             <Card>
                                 <Card.Title>
                                     Regular Price
                                 </Card.Title>
                                 <Card.Number>
                                     <Card.Span>
                                         $
                                     </Card.Span>
                                     50
                                 </Card.Number>
                                 <Card.Text>
                                     sed do eiusmod
                                     <br />
                                     tempor incididunt ut <br />
                                     labore et dolore <br />
                                     magna aliqua. Utenim <br />
                                     ad minim aliquip <br />
                                 </Card.Text>
                             </Card>
                             <Price.Btn>
                                 read more
                             </Price.Btn>
                         </Price.Col>
                         <Price.Col>
                             <Card>
                                 <Card.Title>
                                     Special Price
                                 </Card.Title>
                                 <Card.Number>
                                     <Card.Span>
                                         $
                                     </Card.Span>
                                     100
                                 </Card.Number>
                                 <Card.Text>
                                     sed do eiusmod <br />
                                     tempor incididunt ut <br />
                                     labore et dolore <br />
                                     magna aliqua. Utenim <br />
                                     ad minim aliquip <br />
                                 </Card.Text>
                             </Card>
                             <Price.Btn>
                                 read more
                             </Price.Btn>
                         </Price.Col>
                     </Price.Row>
                 </HomeContainer>
             </Price>
             <Blog>
                 <HomeContainer>
                     <Blog.Title>
                         Latest Blog
                     </Blog.Title>
                     <Blog.Text>
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     </Blog.Text>

                     <Blog.Row>
                         <Blog.Col>
                             <Blog.Img src={blog1} />
                             <ImgTitle>
                                 Quis Nostrud
                             </ImgTitle>
                             <ImgText>
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                             </ImgText>
                             <Blog.Btn>
                                 read more
                             </Blog.Btn>
                         </Blog.Col>
                         <Blog.Col>
                             <Blog.Img src={blog2} />
                             <ImgTitle>
                                 Veniam, Quis
                             </ImgTitle>
                             <ImgText>
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                             </ImgText>
                             <Blog.Btn>
                                 read more
                             </Blog.Btn>
                         </Blog.Col>
                         <Blog.Col>
                             <Blog.Img src={blog3} />
                             <ImgTitle>
                                 Tempor incididunt
                             </ImgTitle>
                             <ImgText>
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                             </ImgText>
                             <Blog.Btn>
                                 read more
                             </Blog.Btn>
                         </Blog.Col>
                     </Blog.Row>
                 </HomeContainer>
             </Blog>

             <About>
                 <HomeContainer>
                     <About.Row>
                         <About.Col>
                             <About.Content>
                                 <About.Img src={about} />
                             </About.Content>
                         </About.Col>
                         <About.Col>
                             <AboutTexts>
                                 <AboutTitle>
                                     About Our Center
                                 </AboutTitle>
                                 <AboutText>
                                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                 </AboutText>
                             </AboutTexts>
                             <AboutBtn>
                                 read more
                             </AboutBtn>
                         </About.Col>
                     </About.Row>
                 </HomeContainer>
             </About>
             <Says>
                 <HomeContainer>
                     <Says.Title>
                         What is Says Customers
                     </Says.Title>
                     <Says.Row>
                         <Says.Col>
                             <Says.Img src={says} />
                             <Says.Text>
                                 ENGLISH.MANY
                             </Says.Text>
                             <SubText>
                                 normal distribution
                             </SubText>
                         </Says.Col>
                         <Says.Col>
                             <Texts>
                                 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                             </Texts>
                         </Says.Col>
                     </Says.Row>
                     <SaysBtn>
                         <Says.Btn>
                             <i class="ri-arrow-left-s-line"></i>
                         </Says.Btn>
                         <Says.Btn>
                             <i class="ri-arrow-right-s-line"></i>
                         </Says.Btn>
                     </SaysBtn>
                 </HomeContainer>
             </Says>
             <Footer>
                 <HomeContainer>
                     <Footer.Row>
                         <Footer.Col>
                             <Footer.Title>
                                 <Footer.Icon>
                                     <i class="ri-checkbox-blank-circle-fill"></i>
                                 </Footer.Icon>
                                 About
                             </Footer.Title>
                             <Footer.Text>
                                 Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc
                             </Footer.Text>
                         </Footer.Col>
                         <Footer.Col>
                             <Footer.Title>
                                 <Footer.Icon>
                                     <i class="ri-checkbox-blank-circle-fill"></i>
                                 </Footer.Icon>
                                 Blog
                             </Footer.Title>
                             <Footer.Text>
                                 Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythin
                             </Footer.Text>
                         </Footer.Col>
                         <Footer.Col>
                             <Footer.Title>
                                 <Footer.Icon>
                                     <i class="ri-checkbox-blank-circle-fill"></i>
                                 </Footer.Icon>
                                 Menu
                             </Footer.Title>
                             <Footer.Items>
                                 <a href="#">
                                     Home
                                 </a>
                             </Footer.Items>
                             <Footer.Items>
                                 <NavLink to={'/about'}>
                                     About
                                 </NavLink>
                             </Footer.Items>
                             <Footer.Items>
                                 <NavLink to={'/service'}>
                                     Service
                                 </NavLink>
                             </Footer.Items>
                             <Footer.Items>
                                 <NavLink to={'/blog'}>
                                     Blog
                                 </NavLink>
                             </Footer.Items>
                             <Footer.Items>
                                 <NavLink to={'/contact'}>
                                     Contact us
                                 </NavLink>
                             </Footer.Items>
                         </Footer.Col>
                         <Footer.Col>
                             <Footer.Title>
                                 <Footer.Icon>
                                     <i class="ri-checkbox-blank-circle-fill"></i>
                                 </Footer.Icon>
                                 Newsletter
                             </Footer.Title>
                             <Footer.Input>
                                 <input type="emil" placeholder='Email' className='footer-input' />
                             </Footer.Input>
                             <Footer.Btn>
                                 Subscribe
                             </Footer.Btn>
                             <Footer.SubTitle>
                                 <Footer.Icons>
                                     <i class="ri-phone-fill"></i>
                                 </Footer.Icons>
                                 <Footer.Texts>
                                     +01 1234567890
                                 </Footer.Texts>
                             </Footer.SubTitle>

                             <Footer.SubTitle>
                                 <Footer.Icons>
                                     <i class="ri-mail-fill"></i>
                                 </Footer.Icons>
                                 <Footer.Texts>
                                     demo@gmail.com
                                 </Footer.Texts>
                             </Footer.SubTitle>
                         </Footer.Col>
                     </Footer.Row>
                 </HomeContainer>
             </Footer>

             <Follow>
                 <HomeContainer>
                     <Follow.Title>
                         Follow Us
                     </Follow.Title>
                     <Follow.Row>
                         <Follow.Icons>
                             <i class="ri-facebook-fill"></i>
                         </Follow.Icons>
                         <Follow.Icons>
                             <i class="ri-twitter-fill"></i>
                         </Follow.Icons>
                         <Follow.Icons>
                             <i class="ri-linkedin-fill"></i>
                         </Follow.Icons>
                         <Follow.Icons>
                             <i class="ri-instagram-line"></i>
                         </Follow.Icons>
                     </Follow.Row>
                     <Follow.Text>
                         © 2020 All Rights Reserved. Design by <span className='span'>Free html Templates</span>
                     </Follow.Text>
                 </HomeContainer>
             </Follow>
                    </Header>
            }
        </Container> 
    )
}
