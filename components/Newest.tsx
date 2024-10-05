import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Timer from './Timer';

export interface DataType {
  _id: string;
  productImage: string;
  price: number;
  name: string;
  slug: string;
  category: string;
  itemleft: number;
}

async function getData() {
  const query = `*[_type == 'product'][0...6]| order(_createdAt asc){
    _id,
    name,
    price,
    itemleft,
    "slug": slug.current,
    "category": category -> name,
    "productImage": images[0].asset -> url
  }`;

  const data = await client.fetch(query);

  return data;
}

const Newest = async () => {
  const data: DataType[] = await getData();

  return (
    <div>    
      <div className='max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto'>
        {/* Flash Sale Header */}
        <div className='flex justify-between px-10 items-center bg-red-400 rounded-t-xl z-50 relative'>
          <h2 className='text-[1.2rem] lg:text-[1.5rem] font-[400] py-3 z-30 text-white'>Flash Sales</h2>
          <Timer />
          <Link href='/all' className='text-red-300 z-30  bg-white py-1 px-2 rounded-xl'>
            <span className='flex gap-2 items-center'>More <FaArrowRight /></span>
          </Link>
        </div>
        
        {/* Product Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-10 bg-slate-100 border mb-10 px-4 sm:px-6 lg:px-10 rounded-b-xl'>
          {data.map((product) => (
            <Link href={`/product/${product.slug}`} key={product._id} className='flex flex-col items-center'>
              {/* Product Image */}
              <div className='w-full h-44 sm:w-44 sm:h-44 overflow-hidden rounded-xl border p-4 border-gray-300 bg-white'>
                <Image
                  src={product.productImage}
                  alt={product.name} // Use the product name for better accessibility
                  className='w-full h-full object-contain'
                  width={300} 
                  height={300} 
                />
              </div>
              {/* Product Details */}
              <div className='mt-4 text-center'>
                <Link href={`/product/${product.slug}`}>
                  <h3 className='text-gray-500 font-[400] text-sm sm:text-base'>{product.name}</h3>
                </Link>
                <p className='font-[400] text-gray-700 text-sm'>NGN<span className='text-lg font-bold pl-1'>{product.price.toLocaleString() }</span></p>
                <p className='font-[300] text-sm sm:text-md line-through text-gray-500'>NGN <span>{(product.price + 150000).toLocaleString()}</span></p>
                <p className='text-sm sm:text-base'>{product.itemleft} items left</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newest;
