import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products,setProducts]=useProduct(); //import from hooks
    const [cart,setCart]=useCart(products);
    const history=useHistory();
    const handleRemove=key=>{
      const newCart=cart.filter(product=>product.key!==key);
      setCart(newCart)
      removeFromDb(key)
    }

    const handlePlaceOrder=()=>{
      // setCart([]);
      // clearTheCart();
      history.push('/shipping');

    }
    return (
        <div className='shop-container'>
          <div className='product-container'>
            {
              cart.map(product=><ReviewItem key={product.key} product={product}
              handleRemove={handleRemove}
              ></ReviewItem>)
            }
          </div>
          <div className='cart-container'>
          <Cart cart={cart}>
            <button onClick={handlePlaceOrder} className='btn-regular'>Procced To Shipping </button>
          </Cart>
          </div>
          
        </div>
    );
};

export default OrderReview;