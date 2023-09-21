import {useState} from "react";
import {BiSolidUser} from 'react-icons/bi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <BiSolidUser  onClick={handleShow} className='ms-4 offcanvas-sm-block'/>
        <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-light" >
        <Offcanvas.Title variant="light" > <Offcanvas.Header closeButton /></Offcanvas.Title>
         <Offcanvas.Body className='text-dark'>
            <div className='text-dark'>
         <p className='d-flex justify-content-center'><h3>Enter Your Email</h3></p>
         <div>
         <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
    </Form>
    </div>

    <div className="d-grid gap-2">
      <Button variant="dark" size="lg">
        LOGIN
      </Button>
  
    </div>

    <div  className="mt-3 d-flex justify-content-center"><a href="#" className="text-dark">Forget-Password?</a></div>

    <div className="d-grid gap-2 mt-2">
      <Button variant="dark" size="lg">
        REGISTER
      </Button>
  
    </div>
         </div>

 </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}

// function Example() {
//     return (
//       <>
//         {['top'].map((placement, idx) => (
//           <Login key={idx} placement={placement} name={placement} />
//         ))}
//       </>
//     );
//   }
  
//   ReactDOM.render(<Example />);


export default Login;