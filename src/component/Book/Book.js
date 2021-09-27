import React from 'react';
import './Book.css';

const Book = (props) => {
    const {bookName,authorName,Price,Publisher,image,StallNo}=props.book
    return (
        <div className="col text-center">
        <div className="card h-100 book">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{bookName}</h3>
                <p className="card-text">Author : {authorName}</p>
                <p className="card-text">Publisher : {Publisher}</p>
                <p className="card-text">Price : {Price}</p>
                <p className="card-text">Stall No. {StallNo}</p>
            </div>
            {/* add to cart button nd icon */}
            <div >
                <button onClick={()=>props.handleAddtoCart(props.book)}className="cart-button"><i class="fas fa-shopping-cart me-2"></i>Add to Cart</button>
                <p><i class="fab fa-facebook-square"></i><i class="fab fa-twitter-square"></i><i class="fab fa-instagram-square"></i><i class="fab fa-facebook-messenger"></i></p>
            </div>
        </div>
    </div>
    );
};

export default Book;