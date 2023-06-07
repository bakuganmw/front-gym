import React,  { useState }  from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from "axios";

function AdminPanel() {

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

    const [userId, setUserId] = useState('0')
    const [name, setName] = useState('')
    const [lname, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    React.useEffect(() => {
                axios

                    .get("http://localhost:8080/users/1", {
                        headers: {
                            Authorization: authHeader,
                        },
                    })
                    .then((response) => {
                        setUserId(response.data.id);
                        setName(response.data.firstName);
                        setEmail(response.data.email);
                        setlName(response.data.lastName);
                        setRole(response.data.role);
                    })
            .catch((err) => console.log(err));
    }, [authHeader]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(role == "TRAINER") {
            axios.patch('http://localhost:8080/users/' + userId,
                
            [
                {
                    "op": "replace",
                    "path": "/role",
                    "value": "USER"
                }
            ],
                {
                    headers: {
                        Authorization: authHeader
                    }
                }
            )
                .then(function (response) {
                    if (response.status === 200) {
                        window.location.href = '/administration';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                axios.patch('http://localhost:8080/users/' + userId,
                
            [
                {
                    "op": "replace",
                    "path": "/role",
                    "value": "TRAINER"
                }
            ],
                {
                    headers: {
                        Authorization: authHeader
                    }
                }
            )
                .then(function (response) {
                    if (response.status === 200) {
                        window.location.href = '/administration';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        
    };


    return (
        <div>
            <h1>Users</h1>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>Trainer</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr key={userId}>
                                        <td>{userId}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{role == "TRAINER" ? (
                                            <Button onClick={submitHandler} type='submit' style={{ backgroundColor: 'green' }} />
                                        ) : (
                                            <Button onClick={submitHandler} type='submit' style={{ backgroundColor: 'red' }} />
                                        )}</td>
                                    </tr>                              
                            </tbody>
                        </Table>
                    
        </div>
    )
}

export default AdminPanel
