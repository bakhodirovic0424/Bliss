import React, { useEffect, useState } from 'react'
import { Container, Footer, Main } from './ServiceStyle'
import { BlogContainer, Follow, Header, LoaderContent } from './BlogStyle';
import Loader from '../components/Loader';
import blog1 from '../assets/image/blog1.jpg'
import blog2 from '../assets/image/blog2.jpg'
import blog3 from '../assets/image/blog3.jpg'
import { NavLink } from 'react-router-dom';

export default function Blog() {
  const [load, setLoad] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setLoad(false);

    }, 500);
  })

  return (
    <Main>
      <Container>
        {
          load ? <LoaderContent><Loader /></LoaderContent>
            :
            <Header>
              <BlogContainer>
                <Header.Title>
                  Latest Blog
                </Header.Title>
                <Header.Text>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                </Header.Text>
                <Header.Row>
                  <Header.Col>
                    <Header.Img src={blog1} />
                    <Header.ImgText>
                      16 March
                    </Header.ImgText>
                    <Header.CardTitle>
                      Quis Nostrud
                    </Header.CardTitle>
                    <Header.CardText>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </Header.CardText>
                    <Header.Btn>
                      read more
                    </Header.Btn>
                  </Header.Col>
                  <Header.Col>
                    <Header.Img src={blog2} />
                    <Header.Active>
                      17 March
                    </Header.Active>
                    <Header.CardTitle>
                      Veniam, Quis
                    </Header.CardTitle>
                    <Header.CardText>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </Header.CardText>
                    <Header.Btn>
                      read more
                    </Header.Btn>
                  </Header.Col>
                  <Header.Col>
                    <Header.Img src={blog3} />
                    <Header.ImgText>
                      16 March
                    </Header.ImgText>
                    <Header.CardTitle>
                      Tempor incididunt
                    </Header.CardTitle>
                    <Header.CardText>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </Header.CardText>
                    <Header.Btn>
                      read more
                    </Header.Btn>
                  </Header.Col>
                </Header.Row>
              </BlogContainer>
              <Footer>
                <BlogContainer>
                  <Footer.Row>
                    <Footer.Col>
                      <Footer.Title>
                        <Footer.Icon>
                          <i class="ri-checkbox-blank-circle-fill"></i>
                        </Footer.Icon>
                        About
                      </Footer.Title>
                      <Footer.Texts>
                        Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc
                      </Footer.Texts>
                    </Footer.Col>
                    <Footer.Col>
                      <Footer.Title>
                        <Footer.Icon>
                          <i class="ri-checkbox-blank-circle-fill"></i>
                        </Footer.Icon>
                        Blog
                      </Footer.Title>
                      <Footer.Texts>
                        Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythin
                      </Footer.Texts>
                    </Footer.Col>
                    <Footer.Col>
                      <Footer.Title>
                        <Footer.Icon>
                          <i class="ri-checkbox-blank-circle-fill"></i>
                        </Footer.Icon>
                        Menu
                      </Footer.Title>
                      <Footer.Items>
                        <NavLink to={'/home'}>
                          Home
                        </NavLink>
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
                        <a href="#">
                          Blog
                        </a>
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
                        <input type="email" placeholder='Email' className='footer-input' />
                      </Footer.Input>
                      <Footer.Btn>
                        subscribe
                      </Footer.Btn>
                      <Footer.SubTitle>
                        <i class="ri-phone-fill"></i>
                        +01 1234567890
                      </Footer.SubTitle>
                      <Footer.Mail>
                        <i class="ri-mail-fill"></i>
                        demo@gmail.com
                      </Footer.Mail>
                    </Footer.Col>
                  </Footer.Row>
                </BlogContainer>
              </Footer>
              <Follow>
                <BlogContainer>
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
                      © 2020 All Rights Reserved. Design by <span>Free html Templates</span>
                    </Follow.Text>
                </BlogContainer>
              </Follow>
            </Header>
        }
      </Container>
    </Main >
  )
}
