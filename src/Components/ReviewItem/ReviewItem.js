import { faEraser, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({product,EventHandler}) => {
    const {id,name,price,ratings,img}=product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
<div className="item">
<h4>{name}</h4>
            <p className='item-price'>Price:${price}</p>
            <p>Ratings:{ratings}</p>
</div>
<div className="delete-container">
    <button onClick={()=>EventHandler(id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
</div>
        </div>
    );
};

export default ReviewItem;