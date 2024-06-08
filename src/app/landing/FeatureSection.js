import Image from "next/image";

import FeaturePaint from "../../../public/feature-paint.png";
import FeatureWeight from "../../../public/feature-weight.png";
import FeatureQuality from "../../../public/feature-quality.png";
import FeatureStandart from "../../../public/feature-standart.png";
import FeaturePower from "../../../public/feature-power.png";
import FeatureInsulation from "../../../public/feature-insulation.png";

function Feature({ image, imageAlt, title, description }) {
  return (
    <div className="px-5">
      <Image src={image} alt={imageAlt} className="mb-3 mx-auto" />
      <h5 className="text-sm font-semibold mb-2">{title}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <div className="lg:container mx-5 lg:mx-auto text-center py-12">
      <h2 className="text-2xl font-semibold mb-6">NEDEN BİZ?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 gap-y-8">
        <Feature
          image={FeaturePaint}
          imageAlt="Boyanmakta olan bir araç resmi"
          title="Boya Seçenekli"
          description="Aracınızla mühteşem renk uyumunu yakalayabilirsiniz"
        />
        <Feature
          image={FeatureWeight}
          imageAlt="Mavi bir tartı"
          title="Hafiflikte Rekortmen"
          description="Alüminyum ve titanyum alışımlı profil ile tekneler gibi sağlam ve sadece 690 KG"
        />
        <Feature
          image={FeatureQuality}
          imageAlt="Deri Araç Koltuğu"
          title="Yüksek Kaliteli Materyal"
          description="Hakiki deri, Kavak mobilya, domatic ocakevi ve dahası  "
        />
        <Feature
          image={FeatureStandart}
          imageAlt="Bir sürü dişli"
          title="Avrupa Standartlarında Üretim"
          description="TÜVTÜRK yönetmeliğine uygun O-1 belgeli"
        />
        <Feature
          image={FeaturePower}
          imageAlt="Güneş Panelleri"
          title="Opsiyonel Ürünler"
          description="Güneş Paneli, Webasto ısıtıcı, tente, stabilizatör, mover, ranger ve dahası"
        />
        <Feature
          image={FeatureInsulation}
          imageAlt="Duvar arası yalıtım malzemesi"
          title="Mükemmel Yalıtım"
          description="Taban yalıtımı ve XPS köpük ile yüksek ısı yalıtımı, nem ve basınç dayanımı"
        />
      </div>
    </div>
  );
}
