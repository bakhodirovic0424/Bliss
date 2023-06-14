import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import { NavLink, Link } from 'react-router-dom';
import { Main, Content, ServiceContainer, Container, LoaderContent, Footer, Follow } from './ServiceStyle';
import col1 from '../assets/image/service1.jpg'
import col2 from '../assets/image/service2.jpg'
import col3 from '../assets/image/service3.jpg'

export default function Service() {
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
            <Content>
              <ServiceContainer>
                <Content.Title>
                  Our Massage Services
                </Content.Title>
                <Content.Row>
                  <Content.Col>
                    <Content.CardTitle>
                      Ayurveda Spa
                    </Content.CardTitle>
                    <Content.Img src={col1} />
                    <Content.CardText>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </Content.CardText>
                    <Content.Btn>
                      read more
                    </Content.Btn>
                  </Content.Col>
                  <Content.Col>
                    <Content.CardTitle>
                      Massage Spa
                    </Content.CardTitle>
                    <Content.Img src={col2} />
                    <Content.CardText>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </Content.CardText>
                    <Content.Btn>
                      read more
                    </Content.Btn>
                  </Content.Col>
                  <Content.Col>
                    <Content.CardTitle>
                      Luxury Spa
                    </Content.CardTitle>
                    <Content.Img src={col3} />
                    <Content.CardText>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </Content.CardText>
                    <Content.Btn>
                      read more
                    </Content.Btn>
                  </Content.Col>
                </Content.Row>
              </ServiceContainer>
              <Footer>
                <ServiceContainer>
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
                        <a href="#">
                          Service
                        </a>
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
                          <i className="ri-checkbox-blank-circle-fill"></i>
                        </Footer.Icon>
                        newsletter
                      </Footer.Title>
                      <Footer.Input>
                        <input type="email" placeholder='Email' className='footer-input' />
                      </Footer.Input>
                      <Footer.Btn>
                        subscribe
                      </Footer.Btn>
                      <Footer.SubTitle>
                        <i className="ri-phone-fill"></i>
                        +01 1234567890
                      </Footer.SubTitle>
                      <Footer.Mail>
                        <i class="ri-mail-fill"></i>
                        demo@gmail.com
                      </Footer.Mail>
                    </Footer.Col>
                  </Footer.Row>
                </ServiceContainer>
              </Footer>

              <Follow>
                <ServiceContainer>
                  <Follow.Title>
                    Follow Us
                  </Follow.Title>
                  <Follow.Row>
                    <Follow.Icon>
                      <i class="ri-facebook-fill"></i>
                    </Follow.Icon>
                    <Follow.Icon>
                      <i class="ri-twitter-fill"></i>
                    </Follow.Icon>
                    <Follow.Icon>
                      <i class="ri-linkedin-fill"></i>
                    </Follow.Icon>
                    <Follow.Icon>
                      <i class="ri-instagram-line"></i>
                    </Follow.Icon>
                  </Follow.Row>
                  <Follow.Text>
                    © 2020 All Rights Reserved. Design by <span className='text'>Free html Templates</span>
                  </Follow.Text>
                </ServiceContainer>
              </Follow>
            </Content>
        }
      </Container>
    </Main>
  )
}
