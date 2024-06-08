import Image from "next/image";

import Instagram1 from "@/../public/instagram-1.png";
import Instagram2 from "@/../public/instagram-2.png";
import Instagram3 from "@/../public/instagram-3.png";
import Instagram4 from "@/../public/instagram-4.png";
import Instagram5 from "@/../public/instagram-5.png";
import Instagram6 from "@/../public/instagram-6.png";

export default function GallerySection() {
  return (
    <div
      id="gallery"
      className="lg:container mx-5 lg:mx-auto text-center py-12"
    >
      <h2 className="text-2xl font-semibold mb-6">GALERİ</h2>
      <div className="grid grid-cols-3 gap-2 sm:gap-5">
        <Image src={Instagram1} alt="karavan" style={{ width: "100%" }} />
        <Image src={Instagram2} alt="karavan" style={{ width: "100%" }} />
        <Image src={Instagram3} alt="karavan" style={{ width: "100%" }} />
        <Image src={Instagram4} alt="karavan" style={{ width: "100%" }} />
        <Image src={Instagram5} alt="karavan" style={{ width: "100%" }} />
        <Image src={Instagram6} alt="karavan" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
