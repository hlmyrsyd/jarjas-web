'use client'

import Image from "next/image"
import Button from "./button"

export default function LearnMore() {
    return (
        <div className="flex flex-row justify-between w-full h-full bg-white p-10 rounded-2xl gap-6 ">
            <div className="flex flex-col w-full h-full justify-between">
                <div className="flex flex-col gap-6">
                    <h1 className="text-amber-500 font-black text-4xl">
                        Step up your Brand!
                    </h1>
                    <p className="text-neutral-600 ">
                        We&apos;re a <span className="font-semibold">walk-the-talk and talk-the-walk</span> strategic partner. We don&apos;t just execute —
                        <br />we think, we discuss, and we build things together with you.
                    </p>
                </div>
                <Button 
                    text={"Learn More"} 
                    href={"#learnMore"}
                />
            </div>
            <Image 
                src={"/image/learnMoreImg.jpg"}
                width={500}
                height={500}
                alt={"Image"}
            />
        </div>
    )
};
