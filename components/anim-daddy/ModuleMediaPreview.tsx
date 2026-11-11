import React from "react";
import Image from "next/image";
import { ModuleMedia } from "@/data/animDaddyModules";

interface ModuleMediaPreviewProps {
  media: ModuleMedia;
  moduleNum?: number;
  className?: string;
}

export function ModuleMediaPreview({ media, className = "" }: ModuleMediaPreviewProps) {
  return (
    <div className={`mt-4 pt-3 border-t border-stone-200 ${className}`}>
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 flex items-center justify-center p-2">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          unoptimized
          loading="lazy"
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 30vw"
        />
      </div>
      {media.caption && (
        <p className="mt-2 text-[11px] font-mono text-stone-500 text-center truncate">
          {media.caption}
        </p>
      )}
    </div>
  );
}
