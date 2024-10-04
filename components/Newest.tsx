import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Timer from './Timer';
import { useAuth0 } from '@auth0/auth0-react';

interface DataType {
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
    <div className='max-w-7xl px-10 mx-auto'>
      <div className='flex justify-between px-10 items-center bg-red-400 rounded-t-xl z-50 relative'>
        <h2 className='text-[1.5rem] text-center font-[400] py-3 z-30 text-white'>Flash Sales</h2>
        <Timer />
        <Link href='/all' className='text-gray-100 z-30'>
          <span className='flex gap-2 items-center'>More <FaArrowRight /></span>
        </Link>
      </div>
      <div className='flex py-10 justify-around bg-slate-100 mb-10 px-10 rounded-b-xl'> {/* Added gap to prevent overflow */}
        {data.map((product) => (
            <Link href={`/product/${product.slug}`} key={product._id}
            className='flex flex-col'
            >
             <div className='w-44 h-44 overflow-hidden rounded-xl border p-6 border-gray-300 bg-white group-hover:opacity-75'> {/* Set a fixed height */}
                <Image
                src={product.productImage}
                alt={product.name} // Use the product name for better accessibility
                className='w-full h-full object-contain ' // Use object-cover to maintain aspect ratio
                width={300} // These can be adjusted
                height={300} // These can be adjusted
                />
            </div>
            <div className='mt-4 flex'>
                <div>
                <Link href={`/product/${product.slug}`}>
                    <h3 className='text-gray-500 font-[400]'>{product.name}</h3>
                </Link>
                <p className='font-[400] text-gray-700 text-lg'>{'\u20A6'}{ product.price.toLocaleString() }</p>
                <p className='font-[300] text-md line-through text-gray-500'>{'\u20A6'}{ (product.price + 150000).toLocaleString() }</p>
                <p className='text-sm'>{product.itemleft} items left</p>

                </div>
            </div>
            </Link>
        ))}
        </div>

    </div>
    </div>
  );
}

export default Newest;
