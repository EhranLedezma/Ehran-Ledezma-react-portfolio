import React, { Component } from 'react';

const orderItem = props => {
    const {
        id,
        order_status,
        content,
        title,
        featured_image_url
    } = props.orderItem

    return (
        <div>
            <h1>{title}</h1>
            <div>{content}</div>
        </div>
    )
    
}

export default Item