import FooterItem from "./footerItem";
import { SpecialWavyText } from "./specialWavyText";

export default function Footer() {
    return (
        <div className="flex flex-col w-full px-10 lg:px-60 py-10 bg-white">
            <div className="flex w-full gap-5 justify-between pb-10">
                <div className="flex flex-row gap-5 w-full">
                    <div>
                        <h1 className="font-bold pb-5">
                            Socials
                        </h1>
                        <div className="flex flex-col gap-2">
                            <FooterItem text={"Instagram"} href={"http://instagram.com/jarjasdesign"} />
                            <FooterItem text={"Youtube"} href={"http://www.youtube.com/@jarjasdesign"} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-amber-500">
                        JARJAS
                    </h1>
                    <h1 className="text-2xl md:text-3xl font-black">
                        Home Base
                    </h1>
                    <p className="text-xs md:text-lg text-neutral-700">
                        Citra Sentul Raya, West Java 16810
                    </p>
                    <p className="font-semibold text-xs md:text-lg">
                        (62) 811 877 432
                        <br /> jarjasdesign@gmail.com
                    </p>
                </div>
            </div>
            <div className="py-5 border-t font-bold text-neutral-500">
                Copyright © 2025 <a href="https://www.hilmyrasyad.site/" target="_blank" >
                <SpecialWavyText text={"HR"} />
                </a>. 
                All rights reserved 
            </div>
        </div>
    )
};
