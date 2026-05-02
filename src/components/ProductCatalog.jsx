import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductDetails from './ProductDetails';
import './ProductCatalog.css';

// Extended mock data
const allProducts = [
    { 
        id: 9, 
        name: 'Momo Racing', 
        price: '4 990 ₽', 
        image: '/momo-racing.jpg', 
        gallery: ['/momo-racing.jpg', '/momo-racing-2.jpg'],
        videoUrl: '/momo-racing-video.mp4',
        status: 'В наличии', 
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: '240°' },
            { label: 'Совместимость', value: 'PC' },
            { label: 'Сила отдачи', value: 'Шестеренчатый привод (Force Feedback)' },
            { label: 'Педали', value: 'Газ, Тормоз' }
        ]
    },
    { 
        id: 13, 
        name: 'Driving Force GT', 
        price: '8 990 ₽', 
        image: '/dfgt.jpg', 
        gallery: ['/dfgt.jpg', '/dfgt-2.jpg'],
        videoUrl: '/dfgt-video.mp4',
        status: 'В наличии', 
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: '900°' },
            { label: 'Совместимость', value: 'PC / PS3' },
            { label: 'Сила отдачи', value: 'Force Feedback' },
            { label: 'Педали', value: 'Газ, Тормоз' }
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
    },
    {
        id: 11,
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
        id: 16,
        name: 'Thrustmaster T300',
        price: '23 490 ₽',
        image: '/t300.jpg',
        gallery: ['/t300.jpg', '/t300-2.jpg'],
        videoUrl: '/t300-video.mp4',
        status: 'В наличии',
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: '1080°' },
            { label: 'Совместимость', value: 'PC / PlayStation' },
            { label: 'Сила отдачи', value: 'Двухременной (Force Feedback)' },
            { label: 'Педали', value: 'Газ, Тормоз' }
        ]
    },
    {
        id: 10,
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
        id: 1,
        name: 'Moza R5',
        price: '32 990 ₽',
        image: '/mozar5.jpg',
        gallery: ['/mozar5.jpg', '/mozar5-1.jpg'],
        videoUrl: '/moza-r5-video_1.mp4',
        status: 'В наличии',
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: 'Неограничен (Direct Drive)' },
            { label: 'Совместимость', value: 'PC' },
            { label: 'Сила отдачи', value: '5.5 Nm' },
            { label: 'Педали', value: 'Газ, Тормоз' }
        ]
    },
    {
        id: 12,
        name: 'PXN V99',
        price: '14 990 ₽',
        image: '/pxnv99_1.jpg',
        gallery: ['/pxnv99_1.jpg', '/pxnv99_2.jpg', '/pxnv99_3.jpg'],
        status: 'В наличии',
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: '900° / 270°' },
            { label: 'Совместимость', value: 'PC / PS / Xbox' },
            { label: 'Сила отдачи', value: 'Force Feedback' },
            { label: 'Гарантия', value: '1 месяц' }
        ]
    },
    {
        id: 15,
        name: 'Ardor Gaming Silverstorm',
        price: '12 490 ₽',
        image: '/ardor-silverstorm.jpg',
        gallery: ['/ardor-silverstorm.jpg', '/ardor-silverstorm-2.jpg'],
        videoUrl: '/ardor-silverstorm-video.mp4',
        status: 'В наличии',
        category: 'Игровые рули',
        characteristics: [
            { label: 'Угол поворота', value: '900° / 270°' },
            { label: 'Совместимость', value: 'PC / PlayStation' },
            { label: 'Сила отдачи', value: 'Force Feedback' },
            { label: 'Педали', value: 'Газ, Тормоз, Сцепление' }
        ]
    },
    {
        id: 18,
        name: 'Logitech G27 + OMP Alcantara',
        price: '16 900 ₽',
        image: '/g27.jpg',
        gallery: ['/g27.jpg', '/g27-2.jpg'],
        videoUrl: '/g27-video.mp4',
        status: 'В наличии',
        category: 'Игровые рули',
        description: 'Состояние отличное, полный комплект, установлена кастомная баранка OMP alcantara.',
        characteristics: [
            { label: 'Угол поворота', value: '900 градусов' },
            { label: 'Привод', value: 'Система обратной связи на двух моторах (Force Feedback)' },
            { label: 'КПП', value: 'Отдельный механизм секвентальной коробки' },
            { label: 'Комплект', value: 'Руль, Педали, КПП' }
        ]
    },
    {
        id: 17,
        name: 'Игровой ПК Полный Комплект',
        price: '22 990 ₽',
        image: '/pc-1.jpg',
        gallery: ['/pc-1.jpg', '/pc-2.jpg', '/pc-3.jpg', '/pc-4.jpg'],
        status: 'В наличии',
        category: 'ПК',
        description: 'Подойдет под любые задачи такие как современные игры (cs 2, cyberpunk 2077, rust, dota) и для работы (монтаж, инженерные программы, кодинг).',
        characteristics: [
            { label: 'Процессор', value: 'Intel Core i3-10105F' },
            { label: 'Видеокарта', value: 'Sapphire RX 480 4GB' },
            { label: 'ОЗУ и Диск', value: '16GB DDR4 / 128GB SSD' },
            { label: 'Монитор', value: 'Dexp DF24N1 100Hz 23.8"' }
        ]
    },

];

const categories = ['Все', 'Игровые рули', 'ПК', 'Комплектующие', 'Разное'];

const ProductCatalog = () => {
    const [activeCategory, setActiveCategory] = useState('Все');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart();

    const filteredProducts = activeCategory === 'Все'
        ? allProducts
        : allProducts.filter(p => p.category === activeCategory);

    return (
        <section className="catalog-section container" id="catalog">
            <div className="section-header catalog-header">
                <h2 className="section-title">ALL PRODUCTS AVAILABLE</h2>
                <p className="catalog-subtitle">Полный ассортимент нашей техники. Ограниченные поставки.</p>
            </div>

            <div className="catalog-filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div
                        key={product.id}
                        className="product-card glass-panel catalog-card"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <div className="product-image-container">
                            <span className={`status-badge ${product.status === 'В наличии' ? 'in-stock' : 'pre-order'}`}>
                                {product.status}
                            </span>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <button
                                className="add-to-cart-overlay"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product);
                                }}
                            >
                                В корзину
                            </button>
                        </div>

                        <div className="product-info">
                            <h3 className="product-name compact-name">{product.name}</h3>
                            <div className="product-footer">
                                <span className="product-price">{product.price}</span>
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

export default ProductCatalog;
