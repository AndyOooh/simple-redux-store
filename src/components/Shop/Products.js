import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = props => {
  const DUMMY_PRODUCTS = [
    {
      id: 'Id1',
      title: 'Book1',
      price: 6,
      description: 'This is a first product - amazing!',
    },
    {
      id: 'Id2',
      title: 'Book2',
      price: 100,
      description: 'This is a first product - amazing!',
    },
    {
      id: 'Id3',
      title: 'Book3',
      price: 99,
      description: 'This is a first product - amazing!',
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
