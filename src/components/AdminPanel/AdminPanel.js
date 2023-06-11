import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import getCookie, { buttonRole, buttonRoleUser, registerStyle } from "../../Utilities/functions";

function AdminPanel() {
  const authHeader = getCookie("authHeader");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users", {
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
    const newRole = currentRole === "TRAINER" ? "USER" : "TRAINER";
    axios
      .patch(
        `http://localhost:8080/users/${userId}`,
        [
          {
            op: "replace",
            path: "/role",
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
          window.location.href = "/administration";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="backgroundBody">
      <h1 className="py-3">Users</h1>
      <Table
        striped
        bordered
        hover
        responsive
        style={{backgroundColor:"#EEEEEE",border:"#28242C"}}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "TRAINER" ? (
                  <Button
                    onClick={() => handleRoleChange(user.id, user.role)}
                    type="submit"
                    style={buttonRoleUser}
                  >
                    Change to User
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleRoleChange(user.id, user.role)}
                    type="submit"
                    style={buttonRole}
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
