export default function CaravanSection() {
  return (
    <div
      id="caravan"
      className="text-center pt-12 sm:pt-24 pb-6 sm:pb-12 lg:container mx-5 lg:mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">KARAVANIMIZ</h2>
      <p className="mb-4 ">
        Oturma odası, mutfak, yatak odası, tuvalet ve dolaplarla komforlu bir
        yolculuk yapmanız için tam techizatlı
      </p>
      <video
        src="/karavan.mp4"
        height={500}
        width={1024}
        className="mx-auto rounded-lg"
        controlsList="nodownload noremoteplayback noplaybackrate"
        disablePictureInPicture
        controls
      />
    </div>
  );
}
