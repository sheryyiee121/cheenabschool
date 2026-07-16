export type GalleryCategory =
  | "campus"
  | "classrooms"
  | "laboratories"
  | "library"
  | "sports"
  | "activities"
  | "events";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryCategories: {
  id: GalleryCategory | "all";
  label: string;
}[] = [
    { id: "all", label: "All Photos" },
    { id: "campus", label: "Campus" },
    { id: "classrooms", label: "Classrooms" },
    { id: "laboratories", label: "Laboratories" },
    { id: "library", label: "Library" },
    { id: "sports", label: "Sports Facilities" },
    { id: "activities", label: "Student Activities" },
    { id: "events", label: "Events" },
  ];

/** Encode filenames with spaces for use in URLs. */
export function gallerySrc(folder: string, filename: string): string {
  return `/${folder}/${encodeURIComponent(filename)}`;
}

export const galleryImages: GalleryImage[] = [
  // Campus
  {
    src: "/images/campus-features.jpeg",
    alt: "CHANAB Centre of Excellence campus",
    category: "campus",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 11.03.17 AM.jpeg"),
    alt: "Guest visit at CCoE campus",
    category: "campus",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.02 AM.jpeg"
    ),
    alt: "Top reasons for choosing CCoE",
    category: "campus",
  },

  // Classrooms
  {
    src: "/images/class.jpeg",
    alt: "Students learning in a CCoE classroom",
    category: "classrooms",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.00 AM.jpeg"
    ),
    alt: "Middle School programme — Grades VI–VIII",
    category: "classrooms",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.00 AM (1).jpeg"
    ),
    alt: "Secondary School programme — Grades IX–X",
    category: "classrooms",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.01 AM.jpeg"
    ),
    alt: "Higher Secondary programme at CCoE",
    category: "classrooms",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.01 AM (1).jpeg"
    ),
    alt: "Academic programmes at CHANAB Centre of Excellence",
    category: "classrooms",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.01 AM (2).jpeg"
    ),
    alt: "FBISE curriculum at CCoE",
    category: "classrooms",
  },

  // Laboratories
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-06 at 12.02.11 PM.jpeg"
    ),
    alt: "Science laboratory at CCoE",
    category: "laboratories",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-06 at 12.03.29 PM.jpeg"
    ),
    alt: "Hands-on science learning",
    category: "laboratories",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-06 at 12.03.29 PM (1).jpeg"
    ),
    alt: "Students in the science lab",
    category: "laboratories",
  },

  // Library
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-06 at 11.59.29 AM (1).jpeg"
    ),
    alt: "CCoE library and reading resources",
    category: "library",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-06 at 11.59.29 AM (2).jpeg"
    ),
    alt: "Students in the school library",
    category: "library",
  },

  // Sports
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.03 AM.jpeg"
    ),
    alt: "Sports and physical development at CCoE",
    category: "sports",
  },

  // Student activities
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.40.40 AM.jpeg"),
    alt: "Student public speaking at CCoE",
    category: "activities",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.02 AM (1).jpeg"
    ),
    alt: "Student activities at CHANAB Centre of Excellence",
    category: "activities",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.02 AM (2).jpeg"
    ),
    alt: "Co-curricular activities at CCoE",
    category: "activities",
  },

  // Events
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.39.41 AM.jpeg"),
    alt: "Graduation ceremony at CCoE",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.00 AM.jpeg"),
    alt: "Ribbon-cutting ceremony at campus event",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.08 AM.jpeg"),
    alt: "School event at CHANAB Centre of Excellence",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.23 AM.jpeg"),
    alt: "CCoE celebration and ceremony",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.25 AM.jpeg"),
    alt: "Special event at CCoE",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.28 AM.jpeg"),
    alt: "School ceremony and gathering",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.29 AM.jpeg"),
    alt: "CCoE institutional event",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 11.03.17 AM (1).jpeg"),
    alt: "Cultural celebration at CCoE",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-10 at 10.56.44 AM.jpeg"),
    alt: "Award ceremony at CHANAB Centre of Excellence",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-10 at 10.57.49 AM.jpeg"),
    alt: "Prize distribution at CCoE",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-10 at 10.57.51 AM.jpeg"),
    alt: "Student achievement celebration",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-10 at 10.57.52 AM.jpeg"),
    alt: "Formal gathering at CCoE event",
    category: "events",
  },
  {
    src: gallerySrc(
      "gallery",
      "WhatsApp Image 2026-07-10 at 10.57.52 AM (2).jpeg"
    ),
    alt: "CCoE awards and recognition ceremony",
    category: "events",
  },
  {
    src: gallerySrc(
      "gallery",
      "WhatsApp Image 2026-07-10 at 10.57.52 AM (3).jpeg"
    ),
    alt: "Celebration at CHANAB Centre of Excellence",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-10 at 10.57.53 AM.jpeg"),
    alt: "Annual event at CCoE",
    category: "events",
  },
];

export const fourPillarImages = {
  knowledge: {
    src: "/images/class.jpeg",
    alt: "Students learning in a CCoE classroom",
  },
  character: {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-10 at 10.56.44 AM.jpeg"),
    alt: "Award ceremony celebrating student character and achievement",
  },
  faith: {
    src: gallerySrc(
      "gallery",
      "WhatsApp Image 2026-07-09 at 11.03.17 AM (1).jpeg"
    ),
    alt: "Cultural and faith-centred celebration at CCoE",
  },
  leadership: {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.40.40 AM.jpeg"),
    alt: "Student public speaking and leadership at CCoE",
  },
} as const;

export type HeroSlide = {
  src: string;
  alt: string;
};

/** Landscape photos only — used on the home page hero background slider. */
export const heroLandscapeSlides: HeroSlide[] = [
  {
    src: "/images/hero-bg.jpeg",
    alt: "CHANAB Centre of Excellence campus — admissions open",
  },
  {
    src: "/images/class.jpeg",
    alt: "Students and faculty at CHANAB Centre of Excellence",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.00 AM.jpeg"),
    alt: "Ribbon-cutting ceremony at CCoE campus",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.08 AM.jpeg"),
    alt: "Annual Sports Week at CHANAB Centre of Excellence",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 11.03.17 AM.jpeg"),
    alt: "Guest visit on the CCoE campus",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.23 AM.jpeg"),
    alt: "Leadership and faculty at CHANAB Centre of Excellence",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.28 AM.jpeg"),
    alt: "Mentorship and student engagement at CCoE",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.29 AM.jpeg"),
    alt: "Institutional meeting at CHANAB Centre of Excellence",
  },
];

export const homeGalleryPreview: GalleryImage[] = [
  {
    src: "/images/campus-features.jpeg",
    alt: "CHANAB Centre of Excellence campus",
    category: "campus",
  },
  {
    src: "/images/class.jpeg",
    alt: "Students learning in a CCoE classroom",
    category: "classrooms",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-06 at 12.02.11 PM.jpeg"
    ),
    alt: "Science laboratory at CCoE",
    category: "laboratories",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-06 at 11.59.29 AM (1).jpeg"
    ),
    alt: "CCoE library and reading resources",
    category: "library",
  },
  {
    src: gallerySrc(
      "images/gallery",
      "WhatsApp Image 2026-07-07 at 9.28.03 AM.jpeg"
    ),
    alt: "Sports and physical development at CCoE",
    category: "sports",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.40.40 AM.jpeg"),
    alt: "Student public speaking at CCoE",
    category: "activities",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-10 at 10.56.44 AM.jpeg"),
    alt: "Award ceremony at CHANAB Centre of Excellence",
    category: "events",
  },
  {
    src: gallerySrc("gallery", "WhatsApp Image 2026-07-09 at 10.59.00 AM.jpeg"),
    alt: "Ribbon-cutting ceremony at campus event",
    category: "events",
  },
];
