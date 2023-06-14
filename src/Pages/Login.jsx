import React, { useEffect, useState } from 'react'
import { Container, Main } from './ServiceStyle'
import Loader from '../components/Loader';
import { Header, LoaderContent } from './LoginStyle';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
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
                        : <Header>
                            <Header.Title>
                                registration <i class="ri-registered-line"></i>
                            </Header.Title>
                            <Header.Row>
                                <Header.Col>
                                    <Header.Text>
                                        your full name
                                    </Header.Text>
                                    <Header.Input>
                                        <input type="text" placeholder='Your Name' />
                                    </Header.Input>
                                    <Header.Text>
                                        your age
                                    </Header.Text>
                                    <Header.Input>
                                        <input type="text" placeholder='Your Age' className='inputs' />
                                    </Header.Input>
                                    <Header.Text>
                                        your email
                                    </Header.Text>
                                    <Header.Input>
                                        <input type="mail" placeholder='Your Email' className='inputs' />
                                    </Header.Input>
                                    <Header.Text>
                                        your address
                                    </Header.Text>
                                    <Header.Input>
                                        <input type="text" placeholder='Your Address' className='inputs' />
                                    </Header.Input>
                                    <Header.Text>
                                        your phone
                                    </Header.Text>
                                    <Header.Input>
                                        <input type="text" placeholder='Your Phone' className='inputs' />
                                    </Header.Input>
                                    <Header.Btn className="button-86">
                                        <Link to={'/home'}>
                                            <button class="button-86" role="button">Subscribe</button>
                                        </Link>
                                    </Header.Btn>
                                </Header.Col>
                            </Header.Row>
                        </Header>
                }
            </Container>
        </Main>
    )
}
