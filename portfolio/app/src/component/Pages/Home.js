import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/esm/Button";
//import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Home(){

    return(
        <>
         <Carousel>
      <Carousel.Item>
        <img alt="First slide" src='https://furorjeans.com/cdn/shop/files/23.6.9_FUROR_Slider_Void_DSKTP.jpg?v=1688474671' style={{width:'100%', height:"auto"}}  />
      
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Second slide"  src='https://furorjeans.com/cdn/shop/files/1920x1080-Slider.jpg?v=1693334554' style={{width:'100%', height:"auto"}}  />
      
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Third slide" src='https://furorjeans.com/cdn/shop/files/23.5.9_FUROR_Slider_Caps_DSKTP.jpg?v=1688474774' style={{width:'100%', height:"auto"}}  />
       
      
      </Carousel.Item>
    </Carousel>


    <Card className="bg-dark text-white"  style={{ position: 'relative' }}>
      <Card.Img src="https://furorjeans.com/cdn/shop/files/23.6.16_FUROR_HomePageBanner_WomenTops_DSKTP_1920x.jpg?v=1688475583" alt="Card image" style={{width:'100%', height:"auto"}} />
      <Card.ImgOverlay className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       
        <Card.Text className="text-center" >
          <h1>WOMEN TOPS</h1>
        <Link to="/products">
        <Button variant="outline-success" size="lg"className="">Shop</Button> 
        </Link>
        </Card.Text>
      
      </Card.ImgOverlay>
    </Card>


    <Card className="bg-dark text-white"  style={{ position: 'relative' }}>
      <Card.Img src="	https://furorjeans.com/cdn/shop/files/MOB-men-casual-shirts.jpg?v=1694509997" alt="Card image" style={{width:'100%'}} height="900"/>
      <Card.ImgOverlay className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       
        <Card.Text className="text-center" >
          <h1>JUNCTION</h1>
        <Link to="/products">
        <Button variant="outline-success" size="lg"className="">Shop</Button> 
        </Link>
        </Card.Text>
      
      </Card.ImgOverlay>
    </Card>


        </>
    )
}

export default Home;