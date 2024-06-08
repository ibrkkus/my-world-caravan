import Image from "next/image";

import CaravanOuter from "@/../public/caravan-outer.png";
import CaravanSitting from "@/../public/caravan-sitting.png";
import CaravanKitchen from "@/../public/caravan-kitchen.png";
import CaravanBedroom from "@/../public/caravan-bedroom.png";
import CaravanToilet from "@/../public/caravan-toilet.png";
import Check from "@/../public/check.png";

function CheckPoint({ text, inverted }) {
  return (
    <div className={`flex items-center mb-2 ${inverted && "justify-end"}`}>
      <Image
        src={Check}
        className={`${inverted ? "order-2 ml-2" : "order-1 mr-2"}`}
        alt="tik işareti"
      />
      <p className={`text-xs ${inverted ? "order-1" : "order-2"}`}>{text}</p>
    </div>
  );
}

function CaravanPart({
  image,
  imageAlt,
  title,
  description,
  points,
  inverted,
}) {
  return (
    <div className="py-6 sm:py-16 items-center grid grid-cols-12">
      <div
        className={`col-span-12 sm:col-span-7 mb-4 sm:mb-0  ${
          inverted ? "sm:order-2 sm:ml-12 sm:col-start-6" : "order-1 sm:mr-12"
        }`}
      >
        <Image src={image} className=" w-full" alt={imageAlt} />
      </div>

      <div
        className={`col-span-12 sm:col-span-5 xl:col-span-3 ${
          inverted ? "order-1 xl:col-start-3 text-right" : "order-2"
        }`}
      >
        <h2 className={`text-2xl font-semibold mb-4`}>{title}</h2>
        <p className="mb-4">{description}</p>
        {points.map((point) => (
          <CheckPoint key={point} text={point} inverted={inverted} />
        ))}
      </div>
    </div>
  );
}

export default function CaravanReviewSection() {
  return (
    <div className="lg:container mx-5 lg:mx-auto">
      <CaravanPart
        image={CaravanOuter}
        imageAlt="kapısı açık hoşgeldin eden myworld marka karavan"
        title="DIŞ YAPI"
        description="Yol güvenliği, ısı yalıtımı, sağlamlık ve hafiflik için her detayı düşünülmüş, ekstra opsiyon paketleri de mevcut olan kuvvetli yapı"
        points={[
          "600 lt bagaj hacmi",
          "Alüminyum ve Titanyum alışımlı profil",
          "Tavan, taban ve dört yanı XPS Yalıtım",
          "AL-KO torsiyonlu dingil ve fren sistemi",
          "220V ve 12V uyumlu elektrik tesisatı",
          "Güneş Panel (Opsiyon)",
          "Tente (Opsiyon)",
          "Mover / Range otomatik ve yarı otomatik park sistemleri (Opsiyon)",
          "ATC sürüş güvenlik ve ESP sistemi (Opsiyon)",
        ]}
      />
      <CaravanPart
        inverted
        image={CaravanSitting}
        imageAlt="masa etrafında dörtgen koltuk ve karavan camı"
        title="OTURMA ODASI"
        description="Gündüzleri manzaranın geceleri yıldızların keyfini çıkaracağınız, uyku vakti 2 kişilik yatak odasına dönüşen ferah ve komforlu 4 kişilik oturma gruplu yaşam alanınız"
        points={[
          "2 kişilik yatağa dönüşebilen, 4 kişilik oturma grubu",
          "180 derece manzara ve tavan manzara",
          "Berhimi Avrupa markası cam - kilit",
          "Teleskopik masa",
          "Açık raf",
        ]}
      />
      <CaravanPart
        image={CaravanKitchen}
        imageAlt="Karavan mutfagi, lavabo, iki ocak ve fırın"
        title="MUTFAK"
        description="Dünyanının neresinde olursanız olun, evdeki gibi rahatlıkla, keyif alarak yemek yapabilmeniz için tasarlanmış bir mutfak alanı"
        points={[
          "12V - 90 lt Buz Dolabı",
          "Domatic - Avrupa markası ocak",
          "Hareketli switchli batarya",
          "Mutfak malzeme dolapları",
          "Webasto ısıtıcı (Opsiyon)",
        ]}
      />
      <CaravanPart
        inverted
        image={CaravanBedroom}
        imageAlt="kaliteli karavan yatak odası, 200cmx150 yatak"
        title="YATAK ODASI"
        description="Yol yorgunluğunu atıp, kampın keyfini çıkaracağınız yatak odası"
        points={[
          "2 kişilik ortopedik yatak",
          "Kahvaltı sehpası",
          "Baş ucu dolabı",
          "Gece ışığı",
          "Pencere",
        ]}
      />
      <CaravanPart
        image={CaravanToilet}
        imageAlt="ileri teknoloji karavan tuvaleti"
        title="TUVALET"
        description="Yolculuk boyuncu sorun yaşamayın diye geniş hazneli su deposu, yüksek basınçlı dalgıç pompa, tuvalet ve banyo"
        points={[
          "100 lt temiz su deposu",
          "Banyo duş seti ve lavabo",
          "Porvaletti marka kirli su göstergeli, portetif tuvalet",
          "30 lt/dk dalgıç pompa",
          "Ekstra olarak araç dışında, dış duş",
        ]}
      />
    </div>
  );
}
