"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
} from "@/app/gallery-data";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "all"
  >("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrevious = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  const activeImage =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {galleryCategories.map((category) => {
          const count =
            category.id === "all"
              ? galleryImages.length
              : galleryImages.filter((image) => image.category === category.id)
                  .length;

          if (category.id !== "all" && count === 0) return null;

          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-sky-primary text-white"
                  : "bg-slate-100 text-navy hover:bg-water-pale"
              }`}
            >
              {category.label}
              <span className="ml-1.5 text-xs opacity-80">({count})</span>
            </button>
          );
        })}
      </div>

      {filteredImages.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border border-slate-200">
          <p className="text-navy font-semibold text-lg mb-2">
            Photos coming soon
          </p>
          <p className="text-slate-500 text-sm">
            Images for this category will be added shortly.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden bg-slate-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-primary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {image.alt}
              </p>
            </button>
          ))}
        </div>
      )}

      {activeImage && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close preview"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 sm:left-6 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 sm:right-6 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-video">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base text-center max-w-2xl px-4">
            {activeImage.alt}
          </p>
        </div>
      )}
    </>
  );
}
