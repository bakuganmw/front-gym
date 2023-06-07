import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import NavbarCom from '../components/NavbarCom/indeks';

function ContactList() {
  const [contactForms, setContactForms] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/contact-us')
      .then((response) => {
        setContactForms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    <NavbarCom />
      <h1>Contact Forms</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Email</th>
            <th>Recipient</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {contactForms.map((form) => (
            <tr key={form.id}>
              <td>{form.title}</td>
              <td>{form.email}</td>
              <td>{form.recipient}</td>
              <td>{form.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactList;
