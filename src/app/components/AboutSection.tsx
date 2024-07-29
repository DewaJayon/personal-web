"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { HoverEffect } from "./ui/card-hover-effect";

const pendidikan = [
    {
        title: "SD Negeri 3 Tusan",
        description: "2010 - 2016. Sekolah Dasar Negeri 3 Tusan.",
    },
    {
        title: "SMP Negeri 1 Banjarangkan",
        description: "2016 - 2019. Sekolah Menengah Pertama Negeri 1 Banjarangkan.",
    },
    {
        title: "SMA Negeri 2 Semarapura",
        description: "2019 - 2022. Sekolah Menengah Atas Negeri 2 Semarapura dengan mengambil jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam).",
    },
    {
        title: "Universitas Hindu Indonesia",
        description: "2022 - Sekarang. Universitas Hindu Indonesia dengan mengambil jurusan S1 Sistem Informasi.",
    },
];

function AboutSection() {
    return (
        <section id="about">
            <div className="container px-2">
                <div className="flex flex-wrap">
                    <div className="flex w-full lg:w-1/2">
                        <div className="w-full">
                            <p className="relative text-1xl font-semibold flex items-center justify-center ">
                                Tentang Saya
                                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-lime-400 to-transparent h-px " />
                            </p>
                            <p className="text-justify p-5 lg:w-[90%]">
                                Saya adalah seorang Fullstack Developer. Saya bersekolah di SD Negeri 3 Tusan, SMP Negeri 1 Banjarangkan, SMA Negeri 2 Semarapura, dan Universitas Hindu Indonesia. Saya
                                mengambil jurusan S1 Sistem Informasi. Main Tech stack saya adalah Laravel, seliain itu saya juga familiar dengan Javascript, CSS, MySQL, PHP dan Flutter.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 ">
                        <div className="w-full">
                            <p className="relative text-1xl font-semibold  flex items-center justify-center">
                                Pendidikan
                                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-lime-400 to-transparent h-px " />
                            </p>
                            <TracingBeam className="w-full p-5 pt-0">
                                <HoverEffect items={pendidikan} />
                            </TracingBeam>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
