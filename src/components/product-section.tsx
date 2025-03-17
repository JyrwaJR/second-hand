import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
// Import any additional components or hooks you need

// Assuming `products` and `addToCart` are passed as props
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductPageProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, addToCart }) => {
  return (
    <main className="flex-1">
      <section className="w-full py-10 md:py-10 lg:py-10">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Our Software Products
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id}>
                <Card>
                  <CardContent className="p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <h2 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <Button
                      onClick={() => addToCart(product)}
                      className="w-full"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;