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
            <div className="flex flex-row w-full h-full py-10 items-center ">
                <div className="flex flex-col gap-5 w-1/4">
                    <div className="text-amber-500 font-black text-3xl">
                        They&apos;ve been <span className="italic">Stepping Up</span>
                        <br />Are you next? 
                    </div>
                    <p className="text-white">You just might be the next game-changing brand.</p>
                </div>
                {/* LOOPING LOGO */}
                <div className="flex w-3/4 h-full items-center">
                    <InfiniteLogo logos={logos} speed={12} />
                </div>
            </div>
            <div className="flex flex-row w-full h-full bg-amber-500 text-white rounded-2xl p-10">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <h1 className="font-black text-6xl">
                        10
                    </h1>
                    <p className="font-black">
                        Team Member
                    </p>
                </div>
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <h1 className="font-black text-6xl">
                        100+
                    </h1>
                    <p className="font-black">
                        Brand Partners 
                    </p>
                </div>
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <h1 className="font-black text-6xl">
                        Rp 500 M
                    </h1>
                    <p className="font-black">
                        Profit / Year
                    </p>
                </div>
            </div>
        </div>
    )
};
