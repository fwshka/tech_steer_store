import React from 'react';
import './Reviews.css';

const Reviews = () => {
    // Array of placeholders for the 3 reviews
    const reviews = [
        { id: 1, image: '/reviews/1.png', alt: 'Отзыв 1' },
        { id: 2, image: '/reviews/2.png', alt: 'Отзыв 2' },
        { id: 3, image: '/reviews/3.png', alt: 'Отзыв 3' },
    ];

    return (
        <section className="reviews-section container section-padding" id="reviews">
            <div className="section-header">
                <h2>ОТЗЫВЫ КЛИЕНТОВ</h2>
                <p className="subtitle">
                    У нас <strong>более 200+ отзывов</strong> на Авито. Присоединяйтесь к числу довольных покупателей!
                </p>
                <a href="https://www.avito.ru/profile/rating?page_from=profile_menu" className="avito-link" target="_blank" rel="noopener noreferrer">
                    Смотреть все отзывы на Авито
                </a>
            </div>
            
            <div className="reviews-grid">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card glass-panel">
                        <div className="review-image-wrapper">
                            <img 
                                src={review.image} 
                                alt={review.alt} 
                                className="review-image"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/600x400/1a1a1a/e60000?text=Загрузите+1.png+в+public/reviews';
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
