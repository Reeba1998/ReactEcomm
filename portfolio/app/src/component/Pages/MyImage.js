import React ,{useState}from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyImage({img=[]}){

    const [mainImage, setMainImage] = useState(img[0]);
    return(
        
       <Container>
        <Row className="">
            <Col lg={4}  sm={12} className="">
            {img.map((curElm) => {
          return (
            
              <img height={120} width={210}
                src={curElm}
                alt="img"
                className="mt-1"
                onClick={() => setMainImage(curElm)}
                
                
              />
            
          );
        })}
            </Col>
            <Col lg={8}  sm={12} xs={12}>
            <img src={mainImage} alt="img" width={300} height={480} className=""/>
            </Col>

       
           
            
           </Row>
           
         
      </Container>
    
    )
}

export default MyImage;