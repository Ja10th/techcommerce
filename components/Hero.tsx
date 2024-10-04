import { client, urlForImage } from '@/lib/sanity';
import SidebarDemo from './Hero2';

async function getData() {
  const query = "*[_type == 'heroImages'][0]";
  const data = await client.fetch(query);
  return data;
}

const Hero = async () => {
  const data = await getData();
  return <SidebarDemo data={data} />;
};

export default Hero;
