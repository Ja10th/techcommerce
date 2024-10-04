// pages/search.js

import Navbar from '@/components/Navbar';
import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Define the data type for products
interface DataType {
  _id: string;
  productImage: string;
  price: number;
  name: string;
  slug: string;
  category: string;
}

// Function to fetch data based on search query
async function getSearchResults(query: any) {
  const searchQuery = `*[_type == 'product' && name match '${query}*'] {
    _id,
    name,
    price,
    "slug": slug.current,
    "category": category -> name,
    "productImage": images[0].asset -> url
  }`;

  const data = await client.fetch(searchQuery);
  return data;
}

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query; // Get the search query from the URL
  const [results, setResults] = useState<DataType[]>([]);

  useEffect(() => {
    if (query) {
      getSearchResults(query).then((data) => setResults(data)); // Fetch search results
    }
  }, [query]); // Run this effect whenever the query changes

  return (
    <>
    {/* <Navbar /> */}
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h1>
      {results.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
          {results.map((product) => (
            <Link href={`/product/${product.slug}`} key={product._id}>
              <div className='border rounded-xl overflow-hidden p-4 shadow-md'>
                <Image
                  src={product.productImage}
                  alt={product.name}
                  className='w-full h-[200px] object-contain object-center'
                  width={300}
                  height={300}
                />
                <h3 className='text-lg font-semibold mt-2'>{product.name}</h3>
                <p className='text-gray-500'>{product.category}</p>
                <p className='font-bold text-indigo-400'>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No results found for your search.</p>
      )}
    </div>
    </>
  );
};

export default SearchPage;
