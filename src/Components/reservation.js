import React from 'react'
import {HomePageBookTable} from '../Components'
// import { PaystackButton } from 'react-paystack'
import { 
    Breadcrumb, BreadcrumbItem, Button, Container, Row, Col,
    Table
} from 'reactstrap'



const Reservation = () => {
    // const publicKey = "pk_test_73c8c2b545a7302f5bfbfc353c4fbae0507b45d7"

    // const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    // const [phone, setPhone] = useState("")
  

    // const amount = {
    //     tableFor2: 500000,
    //     tableFor5: 1230000,
    //     tableFor8: 1950000,
    //     tableFor10: 2400000
    // }

    return (
        <>
            <Container fluid={true} className="breadcrumbs">
                <Row>
                    <Col xs="12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/"> Home </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active> Reservation </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="containers container-bg-white">
                <HomePageBookTable />
            </Container>

            <Container fluid={true} className="containers container-bg-ash">
                <Row id="payment" className="text-center">
                    <Col xs="12">
                        <p>Payment validates booking. Make payment to confirm your reservation booking</p>
                    </Col>
                    <Col xs="12" className="payment-section">
                        <Table>
                            <thead>
                                <tr>
                                    <th> No of guests</th>
                                    <th> Price(NGN) </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td> 5, 000 </td>
                                </tr><tr>
                                    <td>5</td>
                                    <td> 12, 300 </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td> 19, 500 </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td> 24, 000 </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button type="button"  className="mt-2 payment-btn">
                            Make Payment Now
                        </Button>
                        {/* <PaystackButton className="paystack-button" {...componentProps} /> */}
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs="12" className="reservation-buttons mt-5">
                        <Row>
                            <Col xs="12" className="text-center">
                                    Want to Reschedule or Cancel?
                            </Col>
                            <Col xs="12" lg="6" className="my-3 mx-auto">
                                <Button type="button" className="modify-reservation reschedule">Reschedule Reservation</Button>
                            </Col>
                            <Col xs="12" lg="5" className="my-3 mx-auto">
                                <Button type="button" className="modify-reservation cancel">Cancel Reservation</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Reservation