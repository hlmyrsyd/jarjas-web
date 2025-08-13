'use client'

import Image from "next/image"
import Button from "./button"

export default function LearnMore() {
    return (
        <div className="flex flex-row justify-between w-full h-full bg-white p-10 rounded-2xl gap-6 ">
            <div className="flex flex-col w-full h-full justify-between items-center xl:items-start">
                <div className="flex flex-col gap-6 text-center xl:text-left">
                    <h1 className="text-amber-500 font-black text-4xl">
                        Saatnya Naikkan Brand-mu!
                    </h1>
                    <p className="text-neutral-600">
                        Kami hadir untuk berdiskusi, memberi masukan strategis,
                        <br/>dan membangung bersama agar brand-mu tumbuh dan bercerita.
                    </p>
                </div>
                <div className="pt-10">
                    <Button 
                        text={"Ayo Konsultasi Gratis!"} 
                        href={"https://wa.me/62811877432?text=Halo%20Jarjas%20saya%20ingin%20konsultasi"}
                        target="_blank"
                    />
                </div>
            </div>
            <Image
                className="hidden xl:block"
                src={"/image/learnMoreImg.jpg"}
                width={500}
                height={500}
                alt={"Image"}
            />
        </div>
    )
};
