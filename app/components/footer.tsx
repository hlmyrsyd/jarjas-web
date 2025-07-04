import FooterItem from "./footerItem";
import { SpecialWavyText } from "./specialWavyText";

export default function Footer() {
    return (
        <div className="flex flex-col w-full px-60 py-10 bg-white">
            <div className="flex w-full pb-10">
                <div className="flex flex-row w-2/3 gap-5">
                    <div>
                        <h1 className="font-bold pb-5">
                            Company
                        </h1>
                        <div className="flex flex-col gap-2">
                            <FooterItem text={"Services"} href={"#services"} />
                            <FooterItem text={"Our Works"} href={"#ourworks"} />
                            <FooterItem text={"How We Roll"} href={"#howweroll"} />
                            <FooterItem text={"Career"} href={"#career"} />
                            <FooterItem text={"About Us"} href={"#aboutus"} />
                            <FooterItem text={"Contact"} href={"#contact"} />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold pb-5">
                            Services
                        </h1>
                        <div className="flex flex-col gap-2">
                            <FooterItem text={"Branding"} href={"#branding"} />
                            <FooterItem text={"Marketing"} href={"#marketing"} />
                            <FooterItem text={"Advertising"} href={"#advertising"} />
                            <FooterItem text={"Education"} href={"#education"} />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold pb-5">
                            Others
                        </h1>
                        <div className="flex flex-col gap-2">
                            <FooterItem text={"Learning"} href={"#learning"} />
                            <FooterItem text={"Event"} href={"#event"} />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold pb-5">
                            Socials
                        </h1>
                        <div className="flex flex-col gap-2">
                            <FooterItem text={"Instagram"} href={"#instagram"} />
                            <FooterItem text={"Linkedin"} href={"#linkedin"} />
                            <FooterItem text={"Youtube"} href={"#Youtube"} />
                            <FooterItem text={"Tiktok"} href={"#tiktok"} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 gap-5">
                    <h1 className="text-4xl font-extrabold text-amber-500">
                        Jarjas
                    </h1>
                    <h1 className="text-3xl font-black">
                        Home Base
                    </h1>
                    <p className="text-neutral-700">
                        Citra Sentul Raya, Exit Tol Sirkuit Sentul Km.33 Jl. River Park Boulevard Blok A No.1, Bogor Regency, West Java 16810
                    </p>
                    <p className="font-semibold">
                        (021) 2345678
                        <br /> hi@jarjas.com
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
