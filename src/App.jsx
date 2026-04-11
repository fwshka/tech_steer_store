import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import ProductCatalog from './components/ProductCatalog'
import Reviews from './components/Reviews'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <Cart />
        <main className="container-fluid" style={{ padding: 0 }}>
          <Hero />
          <FeaturedCollection />
          <ProductCatalog />
          <Reviews />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
