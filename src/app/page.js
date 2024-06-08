import HeroSection from "@/app/landing/HeroSection";
import KaravanSection from "@/app/landing/KaravanSection";
import FeatureSection from "@/app/landing/FeatureSection";
import CaravanReviewSection from "./landing/CaravanReviewSection";
import GallerySection from "@/app/landing/GallerySection";
import BrandSection from "@/app/landing/BrandSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <KaravanSection /> */}
      <FeatureSection />
      <CaravanReviewSection />
      <BrandSection />
      <GallerySection />
    </div>
  );
}
