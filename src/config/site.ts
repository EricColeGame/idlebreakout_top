export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Idle Breakout Wiki",
  shortName: "Idle Breakout",
  logoText: "IB",
  tagline: "Upgrades, Balls & Breakout Strategy Guide",
  description: "Explore Idle Breakout Wiki for upgrade guides, ball strategies, gameplay tips, brick breaking mechanics and everything you need to progress faster.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://idlebreakout.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://idlebreakout.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.coolmathgames.com/0-idle-breakout",
  heroVideoId: "FPVG5jOZD68", // Idle Breakout gameplay & guide video
  social: {
    discord: "https://www.reddit.com/r/CoolmathGames/",
    youtube: "https://www.youtube.com/results?search_query=Idle+Breakout+gameplay",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
