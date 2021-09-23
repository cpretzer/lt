import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import {Form, Button} from 'react-bootstrap'


function handleLogin(event) {
    event.preventDefault();
    console.log('login clicked');
    window.location.href = "/users/home";
}

export default function Login() {

    return (
        <Layout>
            <Head>
                <title>Log In To Your Account</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Log in to The Life Tracker
            </h1>

                <div className="grid">
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="username">
                            <Form.Label>username</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Row>
                            <Button variant="primary" type="submit">login</Button>
                        </Form.Row>
                    </Form>
                </div>
            </main>
        </Layout>
    )
}