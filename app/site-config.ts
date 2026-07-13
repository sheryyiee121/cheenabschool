export const SITE_URL = "https://www.ccoe.edu.pk";

export const siteRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/founder-message", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/why-ccoe", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/academics", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/student-life", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/facilities", changeFrequency: "monthly" as const, priority: 0.8 },
  {
    path: "/low-bag-system",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  { path: "/admissions", changeFrequency: "weekly" as const, priority: 0.95 },
  { path: "/news", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
  {
    path: "/blog/heavy-school-bags",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/blog/best-school-islamabad",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/blog/fbise-vs-other-boards",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
];
