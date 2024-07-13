import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#D5E1EF] min-h-screen flex items-center justify-center">
      <div className="bg-white w-[320px] h-[497px] rounded-[20px] flex flex-col items-center justify-start shadow-2xl">
        <div className="mt-4">
          <img src="/image-qr-code.png" className="w-[288px] h-[288px] rounded-[20px]" />
        </div>
        <div className="text-balance text-center mt-4 px-2">
          <h1 className="text-xl font-bold leading-7">Improve your front-end skills by building projects</h1>
          <p className="text-sm text-gray-600/60 mt-4 leading-6 ">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}
