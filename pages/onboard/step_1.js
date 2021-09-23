import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import {Form, Button} from 'react-bootstrap'


function handleNextStep(event) {
    event.preventDefault();
    console.log('Step 1 Click');
    window.location.href = "/onboard/step_2";
}

export default function Step1() {

    return (
        <Layout>
            <Head>
                <title>Healthy Habits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">
                    Healthy Habits
                </h1>

                <p>
                    This is where you pick your Healthy Habit questions
                </p>

                <div className="grid">
                    <Form onSubmit={handleNextStep}>
                        <Form.Group controlId="question_1">
                            <Form.Label>Habit 1</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="question_2">
                            <Form.Label>Habit 2</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="question_3">
                            <Form.Label>Habit 3</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Row>
                            <Button variant="primary" type="submit">Step 2</Button>
                        </Form.Row>
                    </Form>
                </div>
            </main>
        </Layout>
    )
}