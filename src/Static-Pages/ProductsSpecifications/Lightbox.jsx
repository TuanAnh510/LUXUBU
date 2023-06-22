import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hook/useOnClickOutside';

export const Lightbox = ({ productData, setLightbox }) => {
    const [currentProductImage, setCurrentProductImage] = useState(0);
    const ref = useRef();

    useOnClickOutside(ref, () => setLightbox(false));
    console.log(productData);
    return (
        <div className="lightbox-overlay">
            <div className="lightbox flex" ref={ref}>
                <svg
                    onClick={() => setLightbox(false)}
                    className="close-icon"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fill="#ffffff"
                        fillRule="evenodd"
                    />
                </svg>
                <img
                    className="lightbox-image"
                    src={productData.images[currentProductImage].url}
                    alt=""
                    style={{ height: "550px", width: "550px " }}
                />
                <div className="thumbnail-wrapper flex">
                    {productData.images != undefined ? productData.images.map((item, index) => (
                        <div className="thumbnail mx-4" key={index}>
                            <img
                                onClick={() => setCurrentProductImage(index)}
                                className={currentProductImage === index ? 'active ' : ''}
                                src={item.url}
                                alt="thumbnail"
                            />
                        </div>
                    )) : <div>Loading...</div>}


                </div>
                <button
                    onClick={() =>
                        setCurrentProductImage((prevState) =>
                            prevState === 0 ? productData.images.length - 1 : prevState - 1,
                        )
                    }
                    className="lightbox-control control-prev"
                >
                    <svg color='white' width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            className='fill-white'
                            d="M11 1 3 9l8 8"
                            stroke="#1D2026"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    onClick={() =>
                        setCurrentProductImage((prevState) =>
                            prevState === productData.images.length - 1 ? 0 : prevState + 1,
                        )
                    }
                    className="lightbox-control control-next"
                >
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            className='fill-white'
                            d="m2 1 8 8-8 8"
                            stroke="#1D2026"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};