import NavItem from "./navItem";

export default function ServiceShowcase() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                <h1 className="font-black text-4xl text-amber-500">
                    This is something we&apos;re 
                    <br />truly passionate about
                </h1>
                <p className="text-neutral-500">
                    At Jarjas, we deliver services built on proven best practices — drawn from our own journey as 
                    <br />brand owners and from our experience working with over 100+ brand partners.
                </p>
            </div>
            <div className="flex flex-row w-full h-full gap-5">
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
                            <NavItem text={"CRM & Email Newsletter"} href={"#crm-email-newsletter"} />
                            <NavItem text={"Out of Home Media Buying"} href={"#out-of-home-media-buying"} />
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
        </div>
    )
};
