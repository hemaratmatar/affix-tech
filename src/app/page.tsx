// import Image from "next/image";
"use client";

import MainLayout from "./components/layouts/MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// https://picsum.photos/seed/picsum/1920/1080
// https://picsum.photos/id/854/1920/456
const Home = () => {
  return (
    <>
      {/* <div className="absolute top-0 z-[0] bg-transparent"> */}
      <section className="relative  ">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/240/1920/456.jpg?hmac=uCPdx6oe_7qLxZhXE_F3Sse0-0DchQ0__9ie2iL8h58"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src="https://fastly.picsum.photos/id/142/1920/456.jpg?hmac=HkTwLIDBz1vAK0mLujvxY0n6ww9MDpNf-1tdYBZj-oQ"
              alt=""
              width={1920}
              height={1080}
              objectFit="contain"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="overflow-hidden h-full bg-gray-100 py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Affix Tech
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
        </div>
      </section>
      <section className="overflow-hidden h-full bg-gray-100 py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Affix Tech
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
        </div>
      </section>
      <section className="overflow-hidden h-full bg-gray-100 py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Affix Tech
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
        </div>
      </section>
      <section className="overflow-hidden h-full bg-gray-100 py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Affix Tech
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
        </div>
      </section>
      <section className="overflow-hidden h-full bg-gray-100 py-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Affix Tech
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptate.
          </p>
        </div>
      </section>
      {/* </div> */}
    </>
  );
};
export default function Page() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
