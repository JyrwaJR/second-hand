"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import {
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import CompanyLogoSection from "@/src/components/company-logo";
import DealsSection from "@/src/components/deals-section";
import CategorySection from "@/src/components/category-section";
import TestimonialSection from "@/src/components/testimonial-section";
import FeaturesSection from "@/src/components/features-section";
import CTASignUpSection from "@/src/components/cta-section";
import SiteFooter from "@/src/components/site-footer";
import ProductPage from "@/src/components/product-section";
import Header from "@/src/components/site-header";

const products = [
  {
    id: 1,
    name: "Project Management Pro",
    price: 99.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 2,
    name: "Code Editor Deluxe",
    price: 79.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 3,
    name: "Database Manager Ultimate",
    price: 149.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 4,
    name: "Cloud Storage Solution",
    price: 59.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 5,
    name: "Secure VPN Service",
    price: 39.99,
    image: "https://via.placeholder.com/1000",
  },
  {
    id: 6,
    name: "AI-Powered Analytics",
    price: 199.99,
    image: "https://via.placeholder.com/1000",
  },
];

const categories = [
  { name: "Marketing Tools", icon: "📈" },
  { name: "Design Software", icon: "🎨" },
  { name: "AI Solutions", icon: "🤖" },
  { name: "Project Management", icon: "📅" },
  { name: "Communication Tools", icon: "💬" },
  { name: "Analytics Platforms", icon: "📊" },
];

const deals = [
  {
    id: 7,
    name: "AI Assistant Pro",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://via.placeholder.com/1000",
    tag: "New Product",
  },
  {
    id: 8,
    name: "Cloud Sync Ultimate",
    price: 49.99,
    originalPrice: 89.99,
    image: "https://via.placeholder.com/1000",
    tag: "Deal of the Day",
  },
  {
    id: 9,
    name: "Marketing Automation Suite",
    price: 159.99,
    originalPrice: 249.99,
    image: "https://via.placeholder.com/1000",
    tag: "Monthly Special",
  },
  {
    id: 10,
    name: "Collaboration Platform",
    price: 29.99,
    originalPrice: 59.99,
    image: "https://via.placeholder.com/1000",
    tag: "New Deal",
  },
];

export default function ECommerceApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // @ts-ignore
  const addToCart = (product) => {
    // @ts-ignore
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // @ts-ignore
      setCart(
        // @ts-ignore
        cart.map((item) =>
          // @ts-ignore
          item.id === product.id
            ? // @ts-ignore
              { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // @ts-ignore
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // @ts-ignore
  const removeFromCart = (productId) => {
    // @ts-ignore
    setCart(cart.filter((item) => item.id !== productId));
  };

  // @ts-ignore
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      // @ts-ignore
      removeFromCart(productId);
    } else {
      // @ts-ignore
      setCart(
        // @ts-ignore
        cart.map((item) =>
          // @ts-ignore
          item.id === productId ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  // @ts-ignore
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // @ts-ignore
  const totalPrice = cart.reduce(
    // @ts-ignore
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const renderLandingPage = () => (
    // Landing Page  Section
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-28 xl:py-28 bg-white dark:bg-black overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px] items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-white">
                Shop with Ease, Anytime, Anywhere
              </h1>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl mx-auto lg:mx-0">
                Discover a world of products at your fingertips. From fashion to
                electronics, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black shadow transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
                  onClick={() => setCurrentPage("products")}
                >
                  Shop Now
                  <ShoppingBag className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center border-black text-black dark:border-white dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                  onClick={() => window.open("https://easyui.pro", "_blank")}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative mx-auto lg:order-last">
              <img
                alt="Hero"
                className="relative z-10 w-full h-[auto] max-w-[700px] aspect-[4/3] object-cover object-center"
                height="750"
                src="/easy-transparent3.png"
                width="700"
              />
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-black dark:bg-white rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-black dark:bg-white rounded-full" />

              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), rgba(0,0,0,0.05) 70%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <CompanyLogoSection />
      <DealsSection deals={deals} addToCart={addToCart} />

      <CategorySection categories={categories} />

      <TestimonialSection />

      <FeaturesSection />

      <CTASignUpSection />
    </main>
  );

  const renderCart = () => (
    // Cart Section
    <>
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-lg p-6 overflow-y-auto z-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </Button>
            </div>
            {cart.length === 0 ? (
              <p className="text-muted-foreground">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    // @ts-ignore
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <div className="flex items-center">
                      <img
                        // @ts-ignore
                        src={item.image}
                        // @ts-ignore
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        {/* @ts-ignore */}
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {/* @ts-ignore */}${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          //@ts-ignore
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      {/* @ts-ignore */}
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          //@ts-ignore
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2"
                        //@ts-ignore
                        onClick={() => removeFromCart(item.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full">Proceed to Checkout</Button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        setCurrentPage={setCurrentPage}
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      {currentPage === "landing" ? (
        renderLandingPage()
      ) : (
        <ProductPage products={products} addToCart={addToCart} />
      )}
      {renderCart()}
      <SiteFooter />
    </div>
  );
}
