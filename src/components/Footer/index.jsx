import React from 'react'
import { Footer, Follow, HomeContainer, FooterContent } from './style'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <FooterContent>
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
        </FooterContent>
    )
}
