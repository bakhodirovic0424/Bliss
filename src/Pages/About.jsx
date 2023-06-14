import React, { useEffect, useState } from 'react'
import { AboutConatiner, CopyRight, Footer, Header } from './AbotStyle'
import Loader from '../components/Loader'
import { Container } from '../components/Loader/style';
import headimg from '../assets/image/about_img.jpg'
import { NavLink } from 'react-router-dom';
import { Follow } from './HomeStyle';

export default function About() {
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
            <Header.Container>
              <Header.Row>
                <Header.Col>
                  <Header.Content>
                    <Header.Img src={headimg} />
                  </Header.Content>
                </Header.Col>
                <Header.Col>
                  <Header.Title>
                    About Our Center
                  </Header.Title>
                  <Header.Text>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  </Header.Text>
                  <Header.Btn>
                    read more
                  </Header.Btn>
                </Header.Col>
              </Header.Row>
            </Header.Container>

            <Footer>
              <AboutConatiner>
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
                      <a href="#">
                        About
                      </a>
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
                        Contact US
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
                  </Footer.Col>
                </Footer.Row>
              </AboutConatiner>
            </Footer>
            <CopyRight>
              <AboutConatiner>
                <CopyRight.Title>
                  Follow Us
                </CopyRight.Title>
                <CopyRight.Row>
                  <CopyRight.Icons>
                    <i class="ri-facebook-fill"></i>
                  </CopyRight.Icons>
                  <CopyRight.Icons>
                    <i class="ri-twitter-fill"></i>
                  </CopyRight.Icons>
                  <CopyRight.Icons>
                    <i class="ri-linkedin-fill"></i>
                  </CopyRight.Icons>
                  <CopyRight.Icons>
                    <i class="ri-instagram-line"></i>
                  </CopyRight.Icons>
                </CopyRight.Row>
                <CopyRight.Text>
                    © 2020 All Rights Reserved. Design by Free html Templates
                  </CopyRight.Text>
              </AboutConatiner>
            </CopyRight>
          </Header>
      }
    </Container>

  )
}
