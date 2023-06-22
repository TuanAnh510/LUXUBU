import React from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";
import imgError from "../../Image/imgError.jpg";
import { ImTruck } from 'react-icons/im'
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
} from '../../redux/action/productActions';
import { addItem } from "../../redux/action/cartActions";
import { toast } from "react-toastify";

function ProductDetails() {
  const params = useParams();
  let id = params.id;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { isauth } = useSelector((store) => store.login);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {

    dispatch(listProductDetails(id));

  }, [id, dispatch]);

  const handleAddToCart = (e) => {

    if (quantity && id) {
      dispatch(addItem(id, quantity));

    }

  };




  return product && (!product._id || product._id !== id) ? (<div>Loading...</div>) : product ? (
    <>
      <h1 className="mx-2">Product's Specification</h1>

      <div className="mainimagewala">

        <div className="imagepara">
          <img src={product.images[0] == undefined ? imgError : product.images[0].url} alt='' />
          <h3> </h3>
          <p>{product.description}</p>

        </div>
        <div style={{ marginLeft: "25px", marginTop: '50px' }} className="pricename">
          <p className="namei">{product.title}</p>

          <div style={{ marginTop: "-15px" }} className="starshai">
            <RiStarSFill className="starshaipr" />
            <RiStarSFill className="starshaipr" />
            <RiStarSFill className="starshaipr" />
            <RiStarSFill className="starshaipr" />
            <p className="uparkrdubar">(4)</p>
          </div>
          <p style={{ marginTop: "-5px" }} className="rate"> {product.price} Vnđ </p>
          <select data-te-select-init value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="8">9</option>
            <option value="8">10</option>
          </select>
          {isauth ? (<button onClick={handleAddToCart} className='addwalabutton'>Add to cart</button>) : (<button className='addwalabutton'><Link style={{ color: "#fff" }} to={"../login"}>Đăng nhập để mua sản phẩm</Link></button>)}


          <div className="icomns"><ImTruck className="trucjkhai" /> <p>2-3 Business Day Delivery</p></div>



        </div>


      </div>





      <h1 style={{ color: 'red', marginTop: '20px', fontFamily: 'cursive', marginBottom: '90px' }} className="Shophai">Recommendation</h1>



      <section className="reviewwala"></section>
    </>
  ) : (
    ''
  )
}

export default ProductDetails;
