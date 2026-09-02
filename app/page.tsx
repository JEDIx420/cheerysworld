import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { MeetCheerySection } from "@/components/sections/MeetCheerySection";
import { FourWorldsSection } from "@/components/sections/FourWorldsSection";
import { SelectedWorkGallery } from "@/components/gallery/SelectedWorkGallery";
import { CreativeCultureSection } from "@/components/sections/CreativeCultureSection";

export const metadata = {
  title: "CHEERYS • One name. Four expressions. One creative culture.",
  description:
    "Cheerys brings together four distinct creative ventures by Cheery: cheery_fic (caricatures), anim_daddy (animation mentoring), cheerys_tees (apparel), and cheerys_bakes (custom healthy baking).",
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />
      <MeetCheerySection />
      <FourWorldsSection />
      <SelectedWorkGallery limit={6} />
      <CreativeCultureSection />
    </main>
  );
}
