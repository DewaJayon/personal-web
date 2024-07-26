import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="container mt-5 md:mt-0">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 md:w-[70%]">
                        <h1 className="text-xl">Hai Semua, saya</h1>
                        <h2 className="text-4xl text-lime-400 font-medium xl:font-bold mt-3 ">I Dewa Agung Dwitya Kania Prabawa</h2>
                        <p className="text-2xl mt-1">Fullstack Developer</p>
                    </div>
                    <div className="w-full self-end px-4 md:w-[30%] mt-10">
                        <div className="flex justify-center items-center z-[999]">
                            <Image src="/profile.jpg" alt="profile" width={300} height={300} className="rounded-full border-2 border-lime-400 " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
