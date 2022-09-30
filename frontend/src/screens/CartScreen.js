import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  const handlebuy = () => {
    navigate("/product/purchase");
  };

  return (
    <div>
      <Header />
      <h3>Cart</h3>
      <div style={{ width: "180px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "3px solid pink", borderRaduis: "9px" }}
          >
            <div>
              <img src={product.image} alt="" style={{ width: "150px" }} />
            </div>
            <div>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button onClick={() => handleRemove(product._id)}>
                {" "}
                Remove{" "}
              </button>
            </div>
            <button onClick={handlebuy}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
