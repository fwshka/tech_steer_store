import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = ({ product, isOpen, onClose }) => {
    const { addToCart } = useCart();
    const [activeTab, setActiveTab] = useState('overview');
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (product) setActiveImage(product.image);
    }, [product]);

    if (!isOpen || !product) return null;

    // Enhance the mock product with extra details for the modal
    const productDetails = {
        ...product,
        description: product.description || 'Высококачественное оборудование для максимального погружения. Создано для тех, кто не согласен на компромиссы.',
        characteristics: product.characteristics || [
            { label: 'Угол поворота', value: '1080° / 900°' },
            { label: 'Совместимость', value: 'PC / PlayStation' },
            { label: 'Сила отдачи', value: '5.5 Nm' },
            { label: 'Гарантия', value: '1 месяц' }
        ],
        videoUrl: product.videoUrl || null,
        gallery: product.gallery || [product.image || '']
    };

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="product-modal glass-panel">
                <button className="modal-close-btn" onClick={onClose}>×</button>

                <div className="product-modal-content">
                    <div className="product-modal-gallery">
                        <img src={activeImage || productDetails.image} alt={productDetails.name} className="modal-main-image" />
                        <div className="modal-thumbnails">
                            {productDetails.gallery.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`thumb-${idx}`}
                                    className={activeImage === img ? 'active' : ''}
                                    onClick={() => setActiveImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="product-modal-info">
                        <span className="product-category">{productDetails.category}</span>
                        <h2 className="modal-title">{productDetails.name}</h2>

                        <div className="modal-price-row">
                            <span className="modal-price">{productDetails.price}</span>
                            <span className={`status-badge ${productDetails.status === 'В наличии' ? 'in-stock' : 'pre-order'}`}>
                                {productDetails.status}
                            </span>
                        </div>

                        <p className="modal-description">{productDetails.description}</p>

                        <div className="modal-tabs">
                            <button
                                className={activeTab === 'overview' ? 'active' : ''}
                                onClick={() => setActiveTab('overview')}
                            >
                                Характеристики
                            </button>
                            <button
                                className={activeTab === 'video' ? 'active' : ''}
                                onClick={() => setActiveTab('video')}
                            >
                                Видеообзор
                            </button>
                        </div>

                        <div className="modal-tab-content">
                            {activeTab === 'overview' && (
                                <ul className="characteristics-list">
                                    {productDetails.characteristics.map((char, index) => (
                                        <li key={index}>
                                            <span className="char-label">{char.label}</span>
                                            <span className="char-value">{char.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {activeTab === 'video' && (
                                <div className="video-container">
                                    {productDetails.videoUrl ? (
                                        <video key={productDetails.videoUrl} controls width="100%" className="product-video" src={productDetails.videoUrl}>
                                            Ваш браузер не поддерживает видео.
                                        </video>
                                    ) : (
                                        <div className="video-placeholder-box">
                                            <p>Видео недоступно для этого товара</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {activeTab !== 'video' && (
                            <div className="modal-actions">
                                <button
                                    className="btn btn-primary full-width"
                                    onClick={() => {
                                        addToCart(productDetails);
                                        onClose();
                                    }}
                                >
                                    Добавить в корзину
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
