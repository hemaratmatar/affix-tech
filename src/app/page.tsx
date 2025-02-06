// import Image from "next/image";
"use client";

import MainLayout from "./components/layouts/MainLayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// https://picsum.photos/seed/picsum/1920/1080
// https://picsum.photos/id/740/1920/1080
const Home = () => {
  return (
    <>
    {/* <div className="absolute top-0 z-[0] bg-transparent"> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
        <SwiperSlide>   <Image
        src="https://fastly.picsum.photos/id/740/1920/1080.jpg?hmac=hGzHYL3GUn8gr_0xLP7cSSt9DAUuDYDskOrmukxwAkA"
        alt=""
        width={450}
        height={300}
        objectFit="cover" 
      /></SwiperSlide>
      </Swiper>
    {/* </div> */}
    </>
  );
};
export default function Page() {
  return <MainLayout><Home /></MainLayout>;
}