'use client'

import Image from "next/image";
import InfiniteLogo from "./infiniteLogo";

const logos = [
    <Image key={1} src="/logos/logo1.png" alt="1" width={100} height={50} />,
    <Image key={2} src="/logos/logo2.png" alt="2" width={100} height={50} />,
    <Image key={3} src="/logos/logo3.png" alt="3" width={100} height={50} />,
    <Image key={4} src="/logos/logo4.png" alt="4" width={100} height={50} />,
    <Image key={5} src="/logos/logo5.png" alt="5" width={100} height={50} />,
    <Image key={6} src="/logos/logo6.png" alt="6" width={100} height={50} />,
];

export default function LoopingProject() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-col-reverse lg:flex-row w-full h-full py-10 items-center ">
                <div className="flex flex-col gap-5 w-full text-center items-center lg:items-start lg:text-left lg:w-1/4">
                    <div className="text-amber-500 font-black text-3xl">
                        Mereka sudah <span className="italic">melangkah lebih jauh</span>
                        <br />Apakah kamu yang berikutnya? 
                    </div>
                    <p className="text-white">Brand-mu bisa jadi pembeda besar di pasar.</p>
                </div>
                {/* LOOPING LOGO */}
                <div className="flex w-3/4 h-full items-center">
                    <InfiniteLogo logos={logos} speed={12} />
                </div>
            </div>
            <div className="flex flex-row w-full h-full bg-amber-500 text-white rounded-2xl p-10">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <h1 className="font-black text-6xl">
                        150+
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-3xl font-black">
                            UMKM
                        </p>
                        <p>
                            dibantu naik kelas
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <h1 className="font-black text-6xl">
                        30+
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-3xl font-black">
                            Kota
                        </p>
                        <p>
                            terjangkau layanan kami
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <h1 className="font-black text-6xl">
                        8+
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-3xl font-black">
                            Tahun
                        </p>
                        <p>
                            jadi teman berpikir brand lokal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
