import {useEffect} from "react";
 import { useParams } from "react-router-dom";
 import { useProductContext } from "../../Context/ProductContext";
 import PageNavigation from "./PageNavigation";
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyImage from "./MyImage";
import AddToCart from "./AddToCart";


 const API= "https://dummyjson.com/products";

const SingleProduct = () => {

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  const {
    
    title,
    brand,
    price,
    description,
    category, 
    stock,
    discountPercentage,
    images,
    
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="">Loading.....</div>;
  }

  return (
    <>
          <PageNavigation title={title} />
          <Container>
      <Row className="">
        <Col className="mt-5" lg={8} md="auto">
          <MyImage img={images} />
        </Col>

        {/* Description of the products */}
        <Col lg={4} md="auto" sm={12} className="mt-5">
        <h2>{title}</h2>
        <div>
        <h6 className="text-secondary">discountPercentage:{discountPercentage}</h6>
        <h4 className="text-danger">PKR:{price}</h4>
        </div>
        <h4>Description</h4>
        <p>{category}</p>
        <p>{brand}</p>
        <p>{description}</p>
        <p>
          Available:
          <span className="fw-bold">{stock > 0 ? "In-stock":"out of stock"}</span>
        </p>

        {stock > 0 && <AddToCart product={singleProduct} />}
        </Col>
      </Row>
  </Container>
   {/* <h1 className="m-5">Single {title}</h1> */}
   </>
  );
};

export default SingleProduct;