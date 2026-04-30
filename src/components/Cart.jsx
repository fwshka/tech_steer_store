import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const CITY_DATA = [
    { name: 'Омск', region: 'Россия, Омская область, г Омск', cost: 250, mapUrl: 'https://yandex.ru/map-widget/v1/?ll=73.368221%2C54.989347&z=11' },
    { name: 'Москва', region: 'Россия, г Москва', cost: 562, mapUrl: 'https://yandex.ru/map-widget/v1/?ll=37.622504%2C55.753215&z=11' },
    { name: 'Санкт-Петербург', region: 'Россия, г Санкт-Петербург', cost: 650, mapUrl: 'https://yandex.ru/map-widget/v1/?ll=30.314130%2C59.938630&z=11' },
    { name: 'Новосибирск', region: 'Россия, Новосибирская область, г Новосибирск', cost: 350, mapUrl: 'https://yandex.ru/map-widget/v1/?ll=82.920430%2C55.030199&z=11' },
    { name: 'Екатеринбург', region: 'Россия, Свердловская область, г Екатеринбург', cost: 450, mapUrl: 'https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838926&z=11' },
    { name: 'Казань', region: 'Россия, Республика Татарстан, г Казань', cost: 500, mapUrl: 'https://yandex.ru/map-widget/v1/?ll=49.122142%2C55.796127&z=11' }
];

const Cart = () => {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({ name: '', phone: '', telegram: '', deliveryMethod: 'Самовывоз', address: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    const finalTotal = getCartTotal();

    if (!isCartOpen) return null;

    const handleCheckout = async (e) => {
        e.preventDefault();
        if (cartItems.length === 0) return;

        setIsSubmitting(true);

        let message = `🏎️ *Новый заказ из Tech Steer* 🏎️\n\n`;

        cartItems.forEach((item, index) => {
            message += `${index + 1}. ${item.name} x${item.quantity} = ${parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity} ₽\n`;
        });

        message += `\n💰 *Итого к оплате:* ${finalTotal.toLocaleString('ru-RU')} ₽\n\n`;

        message += `👤 *Данные покупателя:*\n`;
        message += `Имя: ${formData.name}\n`;
        message += `Телефон: ${formData.phone}\n`;
        if (formData.telegram) {
            message += `Telegram: ${formData.telegram}\n`;
        }
        message += `Способ получения: ${formData.deliveryMethod}\n`;
        if (formData.deliveryMethod === 'Доставка') {
            message += `Адрес: ${formData.address}\n`;
        }

        const accessKey = "51736606-7bb4-45a6-8f3d-0e1d4ad5d350";

        if (!accessKey || accessKey === 'your_web3forms_key_here') {
            alert('❌ Ключ Web3Forms не настроен.\nПолучите его на web3forms.com и добавьте в .env');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `Новый заказ от ${formData.name}`,
                    from_name: 'Tech Steer Store',
                    name: formData.name,
                    phone: formData.phone,
                    message: message
                })
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setTimeout(() => {
                    clearCart();
                    setIsCartOpen(false);
                    setSubmitSuccess(false);
                    setFormData({ name: '', phone: '', deliveryMethod: 'Самовывоз', address: '' });
                }, 3000);
            } else {
                alert('Произошла ошибка при отправке заказа.');
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка сети.');
        } finally {
            setIsSubmitting(false);
        }
    };



    return (
        <>
            <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''} glass-panel`}>
                <div className="cart-header">
                    <h2>Ваша корзина</h2>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Корзина пуста</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">{item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-checkout">
                        <div className="cart-total">
                            <span>Итого к оплате:</span>
                            <span>{getCartTotal().toLocaleString('ru-RU')} ₽</span>
                        </div>

                        <form onSubmit={handleCheckout} className="checkout-form">
                            {submitSuccess ? (
                                <div style={{ background: 'rgba(46, 204, 113, 0.2)', color: '#2ecc71', padding: '20px', borderRadius: '8px', textAlign: 'center', margin: '20px 0' }}>
                                    <h3 style={{ marginBottom: '10px' }}>✅ Заказ отправлен!</h3>
                                    <p>Мы скоро свяжемся с вами для уточнения деталей.</p>
                                </div>
                            ) : (
                                <div className="cdek-mock-container" style={{ textAlign: 'left', background: '#fff', color: '#000', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>Оформление заказа</h2>
                                    
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Получатель (ФИО полностью)</label>
                                    <input
                                        type="text"
                                        placeholder="Иванов Иван Иванович"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#000', background: '#fff', marginBottom: '20px', outline: 'none' }}
                                    />

                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Телефон</label>
                                    <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', background: '#fff', marginBottom: '20px' }}>
                                        <div style={{ padding: '0 12px', background: '#f8f8f8', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
                                            🇷🇺 <span style={{ marginLeft: '5px', fontSize: '10px', color: '#666' }}>▼</span>
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="+7 (000) 000-00-00"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            style={{ width: '100%', padding: '12px', border: 'none', fontSize: '16px', color: '#000', background: '#fff', outline: 'none' }}
                                        />
                                    </div>

                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Ваш Telegram (для быстрой связи)</label>
                                    <input
                                        type="text"
                                        placeholder="@username"
                                        required
                                        value={formData.telegram}
                                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                                        style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#000', background: '#fff', marginBottom: '20px', outline: 'none' }}
                                    />

                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Способ получения</label>
                                    <div style={{ display: 'flex', gap: '20px', marginBottom: formData.deliveryMethod === 'Доставка' ? '15px' : '20px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                            <input 
                                                type="radio" 
                                                name="method" 
                                                value="Самовывоз"
                                                checked={formData.deliveryMethod === 'Самовывоз'}
                                                onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
                                                style={{ marginRight: '8px', accentColor: '#000' }}
                                            /> Самовывоз
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                            <input 
                                                type="radio" 
                                                name="method" 
                                                value="Доставка"
                                                checked={formData.deliveryMethod === 'Доставка'}
                                                onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
                                                style={{ marginRight: '8px', accentColor: '#000' }}
                                            /> Доставка
                                        </label>
                                    </div>

                                    {formData.deliveryMethod === 'Доставка' && (
                                        <div style={{ marginBottom: '20px' }}>
                                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Адрес доставки</label>
                                            <input 
                                                type="text" 
                                                placeholder="Город, улица, дом, квартира / СДЭК" 
                                                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', color: '#000', background: '#fff', outline: 'none' }} 
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                required
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {!submitSuccess && (
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary checkout-btn" style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                                    {isSubmitting ? 'Отправка...' : 'Оформить заказ'}
                                </button>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
