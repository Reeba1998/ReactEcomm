import { NavLink } from "react-router-dom";

function Thankyou(){

    return(
        <div className="m-5">
          <NavLink to="/" className="navlink-no-underline text-dark" >
          <h3>FUROR</h3>
            </NavLink>  
          
            <div className="text-center mt-5">
            <h2>Thankyou for Shopping</h2>
            <h6>Order Confirm</h6>
            <NavLink to="/" className="navlink-no-underline text-dark" >
          <p> Go To Home</p>
            </NavLink> 
        </div>
        </div>
      
    )
}

export default Thankyou;