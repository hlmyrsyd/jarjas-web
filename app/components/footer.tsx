import FooterItem from "./footerItem";
import { SpecialWavyText } from "./specialWavyText";

export default function Footer() {
    return (
        <div className="flex flex-col w-full px-10 lg:px-60 py-10 bg-white">
            <div className="flex w-full pb-10">
                <div className="flex flex-row w-2/3 gap-5">
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
                <div className="flex flex-col w-1/3 gap-5">
                    <h1 className="text-4xl font-extrabold text-amber-500">
                        JARJAS
                    </h1>
                    <h1 className="text-3xl font-black">
                        Home Base
                    </h1>
                    <p className="text-neutral-700">
                        Citra Sentul Raya, Exit Tol Sirkuit Sentul Km.33 Jl. River Park Boulevard Blok A No.1, Bogor Regency, West Java 16810
                    </p>
                    <p className="font-semibold text-xs md:text-lg">
                        (081) 1877432
                        <br /> halo@jarjasdesign.com
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
