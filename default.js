// default.js

import Product from './model/productSchema.js';

let products;

// Use dynamic import for data.mjs
import('./constants/product.js')
  .then((data) => {
    products = data.products;

    // Call the function that uses products inside the dynamic import block
    insertProducts();
  })
  .catch((error) => {
    console.error('Error loading data.js:', error);
  });

// Define the function that uses products
const insertProducts = async () => {
  try {
    // Assuming Product.insertMany is an asynchronous operation
    const result = await Product.insertMany(products);

    if (result && result.writeErrors && result.writeErrors.length > 0) {
      console.log('Write errors during MongoDB operation:', result.writeErrors);
    } else {
      console.log('Data imported Successfully');
    }
  } catch (error) {
    console.log('Error: ', error.message);
  }
};


// Explicitly export the function
export { insertProducts as DefaultData };
