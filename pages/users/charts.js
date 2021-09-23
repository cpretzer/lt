import Head from 'next/head';
import Layout from '../../components/layout';
import {Line} from 'react-chartjs-2';
import {Container, Col, Row} from 'react-bootstrap';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default function Charts() {
    return(
        <Layout>
            <Head>
                <title>Your Charts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>[Your name's] Charts</h1>

                <Container>
                    <Row>
                        <Line data={data}/>
                    </Row>
                </Container>
            </main>
        </Layout>
    );
}