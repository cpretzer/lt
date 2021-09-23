import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import {Button, Col, Container, Row} from 'react-bootstrap'

var today = new Date();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
export default function Home() {
    return(
        <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <main>
                <h1>Home Page</h1>

                <Container>
                    <Row>
                        <Col>
                            <Button variant="primary">
                                Fill out a form for <br/>{months[today.getMonth()]} {today.getDate()} {today.getFullYear()}
                            </Button>
                        </Col>
                        <Col>
                            <div className="card">
                                <Link href="/users/charts">
                                    <a>View your charts</a>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </Layout>
    )
}