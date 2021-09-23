import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import {Form, Button} from 'react-bootstrap'


function handleRegister(event) {
    event.preventDefault();
    console.log('register clicked');
    window.location.href = "/onboard/step_1";
}

export default function Register() {

    return (
        <Layout>
            <Head>
                <title>Create a New Life Tracker Account</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Create a Life Tracker Account
                </h1>

                <div className="grid">
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group controlId="confirm_password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Row>
                            <Button variant="primary" type="submit">Create My Account</Button>
                        </Form.Row>
                    </Form>
                </div>
            </main>
        </Layout>
    )
}