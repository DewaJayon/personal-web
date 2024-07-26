"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { HoverEffect } from "./ui/card-hover-effect";

const pendidikan = [
    {
        title: "SD Negeri 3 Tusan",
        description: "2010 - 2016. Sekolah Dasar Negeri 3 Tusan.",
        link: "#",
    },
    {
        title: "SMP Negeri 1 Banjarangkan",
        description: "2016 - 2019. Sekolah Menengah Pertama Negeri 1 Banjarangkan.",
        link: "#",
    },
    {
        title: "SMA Negeri 2 Semarapura",
        description: "2019 - 2022. Sekolah Menengah Atas Negeri 2 Semarapura dengan mengambil jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam).",
        link: "#",
    },
    {
        title: "Universitas Hindu Indonesia",
        description: "2022 - Sekarang. Universitas Hindu Indonesia dengan mengambil jurusan S1 Sistem Informasi.",
        link: "#",
    },
];

function AboutSection() {
    return (
        <section id="about">
            <div className="container px-2">
                <div className="flex flex-wrap">
                    <div className="flex items-center justify-between w-full ">
                        <p className="relative text-1xl font-semibold w-full md:w-1/2 flex items-center justify-center">
                            About
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-lime-400 to-transparent h-px " />
                        </p>
                        <p className="relative text-1xl font-semibold w-full md:w-1/2 flex items-center justify-center">
                            Pendidikan
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-lime-400 to-transparent h-px " />
                        </p>
                    </div>
                    <div className="px-8 mt-10">
                        <div className="flex justify-between w-full">
                            <div className="w-full lg:w-[45%] mt-10">
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut ad eum unde incidunt beatae eos laboriosam animi sunt, sed ullam illum voluptatem quia rem vero
                                    expedita, accusantium, optio fugit. Repellat velit, suscipit eum consequuntur ipsum minus eaque. Id, ab? Est perspiciatis soluta iusto natus totam officiis, nisi
                                    quis. Voluptatem facere assumenda et animi quasi aperiam modi eos blanditiis, pariatur ut architecto voluptas consectetur dolor esse ex iusto, maxime, magnam error
                                    mollitia eius corporis dignissimos nihil quisquam quis! Mollitia nostrum assumenda fuga maiores ipsam. Laborum illo, iste quia dicta corporis earum unde optio
                                    necessitatibus dolor fuga voluptates quo voluptate neque!
                                </p>
                            </div>
                            <div className=" w-full lg:w-1/2">
                                <TracingBeam>
                                    <HoverEffect items={pendidikan} />
                                </TracingBeam>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
