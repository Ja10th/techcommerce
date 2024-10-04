import Box from "@/components/Box";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
    <Hero />
    <Carousel />
    <Box />
    <Newest />
    <Box />
    </>
  );
}
