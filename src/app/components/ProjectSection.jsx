import Image from "next/image";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "SOK ASIK E-Commerce",
        description: "Membuat Web E-Commerce dengan Laravel 11 dengan Framework Bootstrap. Menggunakan Midtrans sebagai media transaksi dan terdapat fitur untuk cek ongkir.",
        content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">SOK ASIK</div>,
    },
    {
        title: "KawaNime",
        description: "Website streaming Anime dan Live Action menggunakan Laravel 11 dan Menyediakan API untuk Frontend.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image src="/profile.jpg" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
            </div>
        ),
    },
    {
        title: "Ganesha Rent and Course",
        description: "Project Web Untuk UMKM, menggunakan CodeIgniter 4. Dengan fitur Booking Villa dan Pelatihan memahat untuk para pelancong.",
        content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">Ganesha Rend and Course</div>,
    },
    {
        title: "Web Informasi Perusahaan Action Figure",
        description: "Web Informasi Perusahaan Action Figure. Menggunakan CodeIgniter 4. Dengan menyediakan berita terbaru dari perusaan Action Figure.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Web Informasi Perusahaan Action Figure
            </div>
        ),
    },
    {
        title: "",
        description: "",
        content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white" />,
    },
];

const ProjectSection = () => {
    return (
        <section id="projects">
            <div className="container">
                <p className="relative text-1xl font-semibold flex justify-center">
                    Project
                    <span className="absolute inset-x-0 mx-auto -bottom-px bg-gradient-to-r from-transparent via-lime-400 to-transparent h-px" />
                </p>
                <div className="mt-10">
                    <StickyScroll content={content} />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
