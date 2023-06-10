import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./UserPanel.css";

function UserPanel() {

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const authHeader = getCookie("authHeader");

    React.useEffect(() => {
        axios
            .get("http://localhost:8080/users/current", {
                headers: {
                    Authorization: authHeader,
                },
            })
            .then((response) => {
                setUserId(response.data.id);
                console.log(response.data);
                axios

                    .get("http://localhost:8080/users/" + response.data.id, {
                        headers: {
                            Authorization: authHeader,
                        },
                    })
                    .then((response) => {
                        setName(response.data.firstName);
                        setEmail(response.data.email);
                        setlName(response.data.lastName);
                    })
            })
            .catch((err) => console.log(err));
    }, [authHeader]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match!');
        } else {
            axios.patch('http://localhost:8080/users/' + userId,
                [
                    { "op": "replace", "path": "/firstName", "value": name },
                    { "op": "replace", "path": "/lastName", "value": lname },
                    { "op": "replace", "path": "/email", "value": email },
                    { "op": "replace", "path": "/password", "value": password }
                ],
                {
                    headers: {
                        Authorization: authHeader
                    }
                }
            )
                .then(function (response) {
                    console.log(password);
                    if (response.status === 200) {
                        window.location.href = '/login';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };


    const [userId, setUserId] = useState('0')
    const [name, setName] = useState('')
    const [lname, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <Row className='userPanel'>
            <Col md={3} className="form">
                <h2 className="my-5 text">User Profile</h2>
                <Form onSubmit={submitHandler}>

                    <Form.Group className="mb-3 rounded" controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3 rounded" controlId='lname'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type='lname'
                            placeholder='Enter last name'
                            value={lname}
                            onChange={(e) => setlName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3 rounded" controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3 rounded" controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3 rounded" controlId='confirmPassword'>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button className="mb-3 rounded" type='submit' variant='primary'>
                        Update
                    </Button>

                </Form>
            </Col>
        </Row>
    )
}

export default UserPanel;
