import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoanQuotation from "./loan_quotation/loanQuot";


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Loan Quotation Form
        </p>
        <Button variant="primary" onClick={handleShow}>
        Open
        </Button>
        <Modal show={show}  size="xl">
        
        <Modal.Body><LoanQuotation handleClose={handleClose}/></Modal.Body>
        
        </Modal>

      </header>
    </div>
  );
}

export default App;


