import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>TECH STEER <span>BY RED</span></h3>
                    <p>Премиальное оборудование для симрейсинга и бескомпромиссные ПК сборки. Технологии в твоих руках.</p>
                    <p className="established-text" style={{ marginTop: '1rem', color: 'var(--color-accent-primary)', fontWeight: '600' }}>
                        🏆 Работаем для вас с 2020 года
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Навигация</h4>
                    <ul>
                        <li>
                            <a href="#featured" className="nav-link-ai">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                <span>Новинки</span>
                            </a>
                        </li>
                        <li>
                            <a href="#catalog" className="nav-link-ai">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                <span>Каталог</span>
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="nav-link-ai">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                                <span>Блог</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Контакты</h4>
                    <ul>
                        <li>
                            <a href="https://t.me/techsteer" target="_blank" rel="noreferrer" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                                Telegram (@techsteer)
                            </a>
                        </li>

                        <li>
                            <a href="https://www.avito.ru/user/6e7d1c8ae7b96efc270f5f58cdcc1cd7/profile/all/bytovaya_elektronika?sellerId=6e7d1c8ae7b96efc270f5f58cdcc1cd7" target="_blank" rel="noreferrer" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                Профиль на Авито
                            </a>
                        </li>
                        <li>
                            <a href="tel:+79514168950" className="contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                +7 951 416-89-50
                            </a>
                        </li>
                        <li>
                            <div className="contact-address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>г. Омск, ул. Дианова</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Tech Steer by Red. Все права защищены. Доставка СДЭК по всей России.</p>
            </div>
        </footer>
    );
};

export default Footer;
