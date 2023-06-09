import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

function AdminPanel() {
  function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  const authHeader = getCookie('authHeader');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/users', {
        headers: {
          Authorization: authHeader,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, [authHeader]);

  const handleRoleChange = (userId, currentRole) => {
    const newRole = currentRole === 'TRAINER' ? 'USER' : 'TRAINER';
    axios
      .patch(
        `http://localhost:8080/users/${userId}`,
        [
          {
            op: 'replace',
            path: '/role',
            value: newRole,
          },
        ],
        {
          headers: {
            Authorization: authHeader,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.href = '/administration';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Users</h1>
      <Table striped bordered hover responsive className="table-sm">
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>
                {user.role === 'TRAINER' ? (
                  <Button
                    onClick={() => handleRoleChange(user.id, user.role)}
                    type="submit"
                    style={{ backgroundColor: 'green' }}
                  >
                    Change to User
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleRoleChange(user.id, user.role)}
                    type="submit"
                    style={{ backgroundColor: 'red' }}
                  >
                    Change to Trainer
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminPanel;
