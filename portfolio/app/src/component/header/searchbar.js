import {useState}from 'react';
import {  FiSearch } from 'react-icons/fi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { useFilterContext } from '../../Context/filterContext';

function Searchbar(){
const{
  filters: {text},
  updateFilterValue,
  
} = useFilterContext();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
              <FiSearch  onClick={handleShow} className='ms-4 offcanvas-sm-block'/>
        <Offcanvas show={show} onHide={handleClose} placement="top" className="bg-light"  style={{height:100}}>
        <Offcanvas.Title variant="light" > </Offcanvas.Title>
         <Offcanvas.Body className='text-dark'>
         <Form onSubmit={(e) => e.preventDefault()}>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
       <Form.Control type="text" name="text" value={text} onChange={ updateFilterValue} placeholder="Search Here ..." />
      {/* </Form.Group> */}
     
    </Form>
 

 </Offcanvas.Body>
      </Offcanvas>
        </>
  
    )
}


export default Searchbar;