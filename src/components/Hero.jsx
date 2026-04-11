import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background-text">
                <h1>DRIVE</h1>
                <h1 className="outline-text">FASTER</h1>
            </div>

            <div className="hero-content container">
                <div className="hero-text-block">
                    <div className="hero-badges-container">
                        <span className="hero-badge">НОВИНКА В НАЛИЧИИ</span>
                        <span className="hero-badge badge-outline">🏆 РАБОТАЕМ С 2020 ГОДА</span>
                        <span className="hero-badge badge-outline">⭐ 200+ ПОЛОЖИТЕЛЬНЫХ ОТЗЫВОВ</span>
                    </div>
                    <h2>Технологии в <br /> <span className="text-accent">твоих руках</span></h2>
                    <p>
                        Откройте для себя коллекцию премиальных игровых рулей и сборок ПК,
                        сочетающих элегантный дизайн, максимальный комфорт и высочайшую надежность для каждой гонки.
                    </p>
                    <div className="hero-actions">
                        <a href="#catalog" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                            Смотреть каталог
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        <a href="https://t.me/techsteer" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                            Сборка ПК на заказ
                        </a>
                    </div>
                </div>

                <div className="hero-image-container">
                    {/* The layered image concept from the design reference */}
                    <div className="hero-product-image">
                        {/* Ferrari Wheel Image in 3D */}
                        <img 
                            src="/hero-wheel.png" 
                            alt="Premium Steering Wheel" 
                            className="hero-3d-image"
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = 'https://placehold.co/600x800/1a1a1a/e60000?text=Steering+Wheel+Placeholder';
                            }}
                        />
                    </div>
                    {/* Secondary floating images using custom wheels */}
                    <div className="hero-floating-image floating-1">
                        <img 
                            src="/wheel-left.png" 
                            alt="Wheel Left" 
                            className="hero-3d-image small-float"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/hero-wheel.png'; }}
                        />
                    </div>
                    <div className="hero-floating-image floating-2">
                        <img 
                            src="/wheel-right.png" 
                            alt="Wheel Right" 
                            className="hero-3d-image small-float"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/hero-wheel.png'; }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
