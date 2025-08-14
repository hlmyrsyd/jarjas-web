import Button from "./button";
import NavItem from "./navItem";

export default function ServiceShowcase() {
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-5 w-full lg:w-1/2">
                <h1 className="font-black text-4xl text-amber-500">
                    Lebih dari Sekadar Desain
                </h1>
                <p className="text-neutral-500">
                    Kami tidak hanya membuat tampilan yang indah, tapi juga membantu Anda menyusun strategi brand, merencanakan konten, dan membangun cerita yang menguatkan hubungan dengan pelanggan.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row w-full h-full gap-5">
                {/* LEFT */}
                <div className="flex flex-col text-white w-full bg-violet-800 rounded-2xl p-10 gap-3">
                    <h1 className="text-4xl font-bold">
                        Branding
                    </h1>
                    <p>
                        We collaborate with your brand to craft a meaningful & impactful identity.
                    </p>
                    <div className="bg-white w-full h-[1px]"/>
                    <div className="flex flex-col w-full h-full justify-start items-start gap-3">
                        <NavItem text={"Brand Investigation"} href={"#brand-investigation"} />
                        <NavItem text={"Brand Strategy Roadmap"} href={"#brand-strategy-roadmap"} />
                        <NavItem text={"Visual Identity Creation"} href={"#visual-identity-creation"} />
                        <NavItem text={"Visual Curation & Production"} href={"#visual-curation-production"} />
                        <NavItem text={"Website UI & UX"} href={"#website-ui-ux"} />
                        <NavItem text={"Website Development"} href={"#website-development"} />
                        <NavItem text={"Video & Photography"} href={"#video-photography"} />
                        <NavItem text={"Corporate Branding"} href={"#corporate-branding"} />
                    </div>
                </div>
                {/* MID */}
                <div className="flex flex-col h-full w-full gap-5">
                    <div className="flex flex-col text-white w-full h-full bg-violet-800 rounded-2xl p-10 gap-3">
                        <h1 className="text-4xl font-bold">
                            Marketing
                        </h1>
                        <p>
                            We collaborate with your brand to drive demand and build lasting connections.
                        </p>
                        <div className="bg-white w-full h-[1px]"/>
                        <div className="flex flex-col w-full h-full justify-center items-start gap-3">
                            <NavItem text={"Public Relation Strategy"} href={"#public-relation-strategy"} />
                            <NavItem text={"Campaign & Activation"} href={"#campaign-activation"} />
                            <NavItem text={"KOL Management"} href={"#kol-management"} />
                            <NavItem text={"Affiliator Management"} href={"#affiliator-management"} />
                            <NavItem text={"Social Media Management"} href={"#social-media-management"} />
                        </div>
                    </div>
                    <div className="flex flex-col text-white w-full h-full bg-violet-800 rounded-2xl p-10 gap-3">
                        <h1 className="text-4xl font-bold">
                            Advertising
                        </h1>
                        <p>
                            We collaborate with your brand to create effective offers that help you (more than) break even — and grow.
                        </p>
                        <div className="bg-white w-full h-[1px]"/>
                        <div className="flex flex-col w-full h-full justify-center items-start gap-3">
                            <NavItem text={"Digital Advertising"} href={"#digital-advertising"} />
                            <NavItem text={"Digital Ads Content Production"} href={"#digital-ads-content-production"} />
                        </div>
                    </div>
                </div>
                {/* RIGHT  */}
                <div className="flex flex-col text-white w-full bg-violet-800 rounded-2xl p-10 gap-3">
                    <h1 className="text-4xl font-bold">
                        Education
                    </h1>
                    <p>
                        We share our best practices on how we think, speak, and act when it comes to branding, marketing, advertising, and selling.
                    </p>
                    <div className="bg-white w-full h-[1px]"/>
                    <div className="flex flex-col w-full h-full justify-start items-start gap-3">
                        <NavItem text={"Consultation & Advisory"} href={"#consultation-advisory"} />
                        <NavItem text={"Workshop & Training"} href={"#workshop-training"} />
                        <NavItem text={"Digital Learning"} href={"#digital-learning"} />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 flex-col pt-10 px-10 lg:px-60 w-full justify-center items-center">
                <h2 className="text-2xl font-bold text-neutral-600 text-center">
                    “Di Jarjas, layanan kami bersifat <span className="font-black italic">à la carte —</span> disesuaikan dengan masalah inti dan kebutuhan paling mendesak setiap merek. Kami sangat objektif. Kami berdiskusi terlebih dahulu, menganalisis secara mendalam, dan memutuskan dengan hati-hati sebelum mengambil proyek apa pun.”
                </h2>
                <Button 
                    text={"Ayo Konsultasi Gratis!"} 
                    href={"https://wa.me/62811877432?text=Halo%20Jarjas%20saya%20ingin%20konsultasi"}
                    target="_blank"
                />
            </div>
        </div>
    )
};
