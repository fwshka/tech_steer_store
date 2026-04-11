import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import './FeaturedCollection.css';

// Mock data based on user's real photos (Moza, Thrustmaster)
const featuredProducts = [
    {
        id: 1,
        name: 'Moza R3',
        price: '22 990 ₽',
        image: '/moza.jpg',
        gallery: ['/moza.jpg', '/moza1.jpg', '/moza2.jpg'],
        videoUrl: '/videomozar3.MOV',
        status: 'В наличии',
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: 'Неограничен (Direct Drive)' },
            { label: 'Совместимость', value: 'PC / Xbox' },
            { label: 'Сила отдачи', value: '3.9 Nm' },
            { label: 'Гарантия', value: '1 месяц' }
        ]
    },
    {
        id: 2,
        name: 'Thrustmaster TS XW',
        price: '22 990 ₽',
        image: '/ts-xw1.jpg',
        gallery: ['/ts-xw1.jpg', '/ts-xw2.jpg'],
        videoUrl: '/VID_ts-xw.MOV',
        status: 'В наличии',
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: '1080°' },
            { label: 'Совместимость', value: 'PC / Xbox' },
            { label: 'Сила отдачи', value: '6 Nm' },
            { label: 'Гарантия', value: '1 месяц' }
        ]
    },
    {
        id: 14,
        name: 'Logitech G29',
        price: '16 490 ₽',
        image: '/g29.jpg',
        gallery: ['/g29.jpg', '/g29-2.jpg'],
        videoUrl: '/g29-video.mp4',
        status: 'В наличии',
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: '900°' },
            { label: 'Совместимость', value: 'PC / PS3 / PS4 / PS5' },
            { label: 'Сила отдачи', value: 'Два мотора (Force Feedback)' },
            { label: 'Педали', value: 'Газ, Тормоз, Сцепление' }
        ]
    }
];

const FeaturedCollection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className="featured-section container" id="featured">
            <div className="section-header">
                <h2 className="section-title">LATEST COLLECTION</h2>
                <p className="section-subtitle">
                    Откройте для себя нашу стильную коллекцию, включающую самые трендовые дизайны,
                    универсальные стили и исключительное качество для каждого заезда.
                </p>
            </div>

            <div className="product-grid">
                {featuredProducts.map(product => (
                    <div
                        key={product.id}
                        className="product-card glass-panel"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <div className="product-image-container">
                            <span className={`status-badge ${product.status === 'В наличии' ? 'in-stock' : 'pre-order'}`}>
                                {product.status}
                            </span>
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>

                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-name">{product.name}</h3>
                            <div className="product-footer">
                                <span className="product-price">{product.price}</span>
                                <button className="btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ProductDetails
                isOpen={!!selectedProduct}
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
};

export default FeaturedCollection;
