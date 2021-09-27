import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css';


const Books = () => {
    const [books,setbooks] = useState([])
    const [cart,setCart] = useState([])

    //fetch data from fackdata
    useEffect(()=>{
        fetch('./books.JSON')
       .then(res=>res.json())
       .then(data=>setbooks(data))


    },[])
   // add to cart button
   const handleAddtoCart = book=>{
    const newCart = [...cart,book]
    setCart(newCart)
}
return (
    //  book container
    <div className="books mb-5 row g-4">
        <div className="col-md-9">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {
                books.map(book=><Book book={book} 
                    key={book.image}
                    handleAddtoCart={handleAddtoCart}
                    ></Book>)
         }
        </div>
        </div>
        {/*cart container*/}
        <div className="col-md-3 cart-container">
            <Cart cart={cart}></Cart>
        </div>
        
    </div>
    
    );
};

export default Books;
