import React from 'react'
import './singlememe.css'
export const Meme = ({ template, onClick }) => {
    return (
        <img className="single-image-mem"
            key={template.id}
            src={template.url}
            alt={template.name}            
            onClick={onClick} />
    );
}