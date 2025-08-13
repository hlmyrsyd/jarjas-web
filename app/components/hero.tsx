export default function Hero() {
    return (
        <div className="flex flex-col py-10 text-white">
            <p>
                We Are Jarjas
            </p>
            <div className="flex flex-row w-full h-full items-center gap-5">
                <h1 className="text-5xl font-bold text-amber-500 pb-2">
                    MITRA STRATEGIS
                </h1>
                <h1 className="w-fit font-bold text-5xl italic mb-4 py-3 px-8 bg-amber-500 rounded-2xl -rotate-4">
                    UMKM
                </h1>
            </div>
            <h1 className="text-5xl pt-8">
                dalam Branding & Digital yang <span className="font-bold italic text-neutral-500">Bercerita dan Berkembang bersama.</span>
            </h1>
        </div>
    )
};
