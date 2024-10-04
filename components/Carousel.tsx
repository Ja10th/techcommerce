import React from 'react'
import { client } from '@/lib/sanity';
import UseCarousel from './UseCarousel';

async function getData(){
    const query = "*[_type == 'heroImages'][0]";
    const data = await client.fetch(query);
    return data
}
const Carousel = async () => {
    const data = await getData()
  return (
    <UseCarousel data={data}/>
  )
}

export default Carousel