"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mt-3 text-xl font-bold">Muhamad Aenun Zidane</p>
      <p className="mb-4">
        Setelah lulus dengan gelar di bidang 
        <span className="font-medium"> Informatika atau komputer</span>
        , saya memutuskan untuk mengejar passion saya di bidang pemrograman. Saya mendaftar di sebuah bootcamp pemrograman dan mempelajari
        <span className="font-medium"> pengembangan web full-stack</span>. 
        <span className="italic"> Bagian favorit saya dari pemrograman </span> 
        adalah aspek pemecahan masalah. Saya 
        <span className="font-medium"> sangat senang </span> 
        saat akhirnya menemukan solusi untuk suatu masalah. Tumpukan teknologi utama saya adalah 
        <span className="font-medium"> React, Next.js, Laravel, dan Mysql</span>. 
        Saya selalu ingin belajar teknologi baru. Saat ini, saya sedang mencari 
        <span className="font-medium"> posisi penuh waktu</span> sebagai pengembang perangkat lunak.
      </p>

      <p>
        <span className="italic">Saat tidak sedang coding</span>, saya menikmati bermain video game, menonton film, dan bermain dengan anjing saya. Saya juga suka <span className="font-medium">mempelajari hal-hal baru</span>. Saat ini, saya sedang belajar tentang <span className="font-medium">bahasa pemrograman lain</span>.
      </p>
    </motion.section>
  );
}
