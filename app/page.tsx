import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { MeetCheerySection } from "@/components/sections/MeetCheerySection";
import { CreativeWorldsSection } from "@/components/sections/CreativeWorldsSection";
import { SelectedWorkGallery } from "@/components/gallery/SelectedWorkGallery";
import { CreativeCultureSection } from "@/components/sections/CreativeCultureSection";

export const metadata = {
  title: "CHEERYS • One name. Five expressions. One creative culture.",
  description:
    "Cheerys brings together five distinct creative ventures by Cheery: cheery_fic (caricatures), cheerys_art (fine art & resin), anim_daddy (animation mentoring), cheerys_tees (apparel), and cheerys_bakes (custom healthy baking).",
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />
      <MeetCheerySection />
      <CreativeWorldsSection />
      <SelectedWorkGallery limit={6} />
      <CreativeCultureSection />
    </main>
  );
}
