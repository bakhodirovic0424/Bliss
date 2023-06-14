import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Content, Logo, Menu, Row, Active } from './style'

export default function Navbar() {
    return (
        <Content>
            <Container>
                <Row>
                    <Logo>
                        <Link to="/">Bliss</Link>
                    </Logo>
                    <Menu>
                        <Menu.Items>
                            <NavLink to='/home'>HOME</NavLink>
                        </Menu.Items>
                        <Menu.Items>
                            <NavLink to='/about'>About</NavLink>
                        </Menu.Items>
                        <Menu.Items>
                            <NavLink to='/service'>service</NavLink>
                        </Menu.Items>
                        <Menu.Items>
                            <NavLink to='/blog'>blog</NavLink>
                        </Menu.Items>
                        <Menu.Items>
                            <NavLink to='/contact'>contact us</NavLink>
                        </Menu.Items>
                        <Menu.Items>
                            <NavLink to={'/login'}>
                                <i class="ri-user-3-fill"></i>
                            </NavLink>
                        </Menu.Items>
                        <Menu.Items>
                            <i class="ri-search-line"></i>
                        </Menu.Items>
                    </Menu>
                </Row>
            </Container>
        </Content>
    )

}
