import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Mail",
        href: "mailto:jan.perhac@tuke.sk",
        linkTitle: "Email Ján Perháč",
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    LinkedIn: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
