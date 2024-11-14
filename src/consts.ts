// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Архівна Качка";
export const SITE_TITLE = "Озеро";
export const SITE_DESCRIPTION =
  "Статті про генеалогію, історію та інструменти Качиного Всесвіту";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "#теги";
export const Tags_DESCRIPTION = "Теги статей, які ви знайдете на сайті";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `Всі статті в Озері по тегу '${tag}'`,
    description: `Знайдіть статті по тегу ${tag}.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `Всі статті в Озері по категорії '${category}'`,
    description: `Знайдіть статті по категорії ${category}`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks: { href: string, title: string }[] = [
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/tags/", title: Tags_TITLE },
  // { href: "/category/official/1", title: "Качині Історії" },
  // { href: "/category/genealogy/1", title: "Генеалогічне" },
  // { href: "/category/other/1", title: "Різне" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://t.me/spravnakachka",
    icon: "tabler:brand-telegram",
    label: "Telegram",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} | Пошук`;
export const SEARCH_PAGE_DESCRIPTION = `Шукайте статті в ${SITE_TITLE}`;
