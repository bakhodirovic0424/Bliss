import React, { useState, useEffect } from 'react'
import { Container } from './ServiceStyle'
import { Main } from './ServiceStyle'
import { Content, LoaderContent, Footer, Follow } from './ContactStyle'
import Loader from '../components/Loader';
import { NavLink } from 'react-router-dom';

export default function Contact() {
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
              <Content.Title>
                Contact Us
              </Content.Title>
              <Content.Text>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              </Content.Text>
              <Content.Row>
                <Content.Col>
                  <Content.Input>
                    <input type="text" placeholder='Your name' />
                  </Content.Input>
                  <Content.Input>
                    <input type="text" placeholder='Phone Number' />
                  </Content.Input>
                  <Content.Input>
                    <input type="text" placeholder='Time' />
                  </Content.Input>
                </Content.Col>
                <Content.Col>
                  <Content.Input>
                    <input type="email" placeholder='Email' />
                  </Content.Input>
                  <Content.Input>
                    <input type="text" placeholder='Select Massage spa' />
                  </Content.Input>
                  <Content.Input>
                    <input type="data" placeholder='Select Date' />
                  </Content.Input>
                </Content.Col>
              </Content.Row>
              <Content.SubInput>
                <input type="text" placeholder='Message ' />
              </Content.SubInput>
              <Content.Btn>
                send now
              </Content.Btn>
              <Footer>
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
                      <NavLink to={'/blog'}>
                        Blog
                      </NavLink>
                    </Footer.Items>
                    <Footer.Items>
                      <a href="#">
                        Contact us
                      </a>
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
                      subscribe
                    </Footer.Btn>
                    <Footer.Phone>
                      <Footer.SubImg>
                        <i class="ri-phone-fill"></i>
                      </Footer.SubImg>
                      +01 1234567890
                    </Footer.Phone>
                    <Footer.Email>
                      <Footer.MailIcon>
                        <i class="ri-mail-fill"></i>
                      </Footer.MailIcon>
                      demo@gmail.com
                    </Footer.Email>
                  </Footer.Col>
                </Footer.Row>
              </Footer>
              <Follow>
                <Follow.Title>
                  Follow US
                </Follow.Title>
                <Follow.Icons>
                  <Follow.Items><i class="ri-facebook-fill"></i></Follow.Items>
                  <Follow.Items><i class="ri-twitter-fill"></i></Follow.Items>
                  <Follow.Items><i class="ri-linkedin-fill"></i></Follow.Items>
                  <Follow.Items><i class="ri-instagram-fill"></i></Follow.Items>
                </Follow.Icons>
                <Follow.Text>
                  © 2020 All Rights Reserved. Design by <span className='text'>Free html Templates</span>
                </Follow.Text>
              </Follow>
            </Content>

        }
      </Container>
    </Main>
  )
}

