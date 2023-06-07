import React from "react";
import NavbarCom from "../components/NavbarCom/indeks";
const FormPage = () => {

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this category?')) {

        }
    }

  return (
    <div>
    <NavbarCom />
            <Row className='align-items-center'>
                <Col>
                    <h1>Categories</h1>
                </Col>
            </Row>
                        <div>
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>EMAIL</th>
                                        <th>DESCRIPTION</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                        <tr key={formId}>
                                            <td>{formId}</td>
                                            <td>{email}</td>
                                            <td>{description}</td>
                                            <td>
                                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(category._id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                </tbody>
                            </Table>
                        </div>
        </div>
  );
};

export default FormPage;

