import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/contact-us/${id}`)
      .then((response) => {
        console.log('Successfully deleted contact form:', response.data);
        // Tutaj możesz wykonać odpowiednie akcje po pomyślnym usunięciu formularza
        alert("Form deleted!");
        window.location.href = '/forms';
        
      })
      .catch((error) => {
        console.error('Error deleting contact form:', error);
        // Tutaj możesz obsłużyć błąd i wyświetlić odpowiedni komunikat dla użytkownika
      });
  };

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
            <th>Resolved</th>
          </tr>
        </thead>
        <tbody>
          {contactForms.map((form) => (
            <tr key={form.id}>
              <td>{form.title}</td>
              <td>{form.email}</td>
              <td>{form.recipient}</td>
              <td>{form.description}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(form.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ContactList;
