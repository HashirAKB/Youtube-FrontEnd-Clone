import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <VideoCard title={"Entri Elevate “PORUL” | EP3 | WEBSERIES | KARIKKU"} channelName={"Karikku"} views={"1.7M"} uploadDate={"1 day ago"} logo={"/kariku_log.jpg"} thumbnail={"/porul_ep_3.jpg"}/>
    </>
  );
}
