function TechDetail() {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="text-sm">Genişlik</div>
        <div className="text-sm font-semibold">340 cm</div>
      </div>
      <div
        className="bg-seperator-gray"
        style={{ height: 1, width: "100%" }}
      ></div>
    </div>
  );
}

export default function TechnicalDetailsSection() {
  return (
    <div id="technical" className="lg:container mx-5 lg:mx-auto py-12">
      <h4 className="font-semibold mb-4">TEKNİK DETAYLAR</h4>
      <div className="grid grid-cols-3 gap-5 mb-12">
        <TechDetail />
        <TechDetail detail="200cm x 130cm yatak" />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
      </div>

      <h4 className="font-semibold mb-4">EŞYALAR</h4>
      <div className="grid grid-cols-3 gap-5 mb-12">
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
      </div>

      <h4 className="font-semibold mb-4">EKİPMANLAR</h4>
      <div className="grid grid-cols-3 gap-5 mb-12">
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
        <TechDetail />
      </div>
    </div>
  );
}
