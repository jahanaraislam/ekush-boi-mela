import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // update total price
    const total = cart.reduce((previous, book)=>previous + book.Price,0)
    return (
        <div className="cart text-white ms-5">
        <h5>Ticket : {props.cart.length}</h5> 
         <br></br>
         <p>Total Cost : {total.toFixed(2)}</p>
         
             {
                 cart.map(book=><div className="d-flex justify-content-center align-items-center click">
                     <div>
                     <img width="70px"height="70px"src={book.image} alt="" />
                     </div>
                    <div>
                        <p className="text-center p-4">{book.bookName} </p>
                    </div>
                 </div>)
             }
       </div>
    );
};

export default Cart;