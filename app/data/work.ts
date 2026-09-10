export type WorkItem = {
  title: string;
  officialTitle: string;
  type: string;
  location: string;
  date: string;
  image: string | null;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  externalUrl?: string;
  internalUrl?: string;
};

export const workItems: WorkItem[] = [
  {
    title: "GWDC",
    officialTitle: "GWDC 2026",
    type: "Media Partner",
    location: "Seoul",
    date: "Sep 2026",
    image: "/work-gwdc-2026.png",
    imageAlt: "GWDC 2026 key visual",
    imageFit: "contain",
  },
  {
    title: "WalletConnect",
    officialTitle: "WalletConnect Side Event",
    type: "Media Partner",
    location: "Seoul",
    date: "Aug 2026",
    image: "/work-walletconnect-side-event.avif",
    imageAlt: "WalletConnect State of Crypto, State of Payments event posters featuring real homies club as media partner",
    imageFit: "contain",
  },
  {
    title: "WebX",
    officialTitle: "WebX Side Event",
    type: "Media Partner",
    location: "Tokyo",
    date: "Jul 2026",
    image: "/work-webx-side-event.jpeg",
    imageAlt: "Cloud Club in Tokyo, BBAI X mini and WebX Shisha mix event artwork",
    imageFit: "contain",
  },
  {
    title: "SEABW",
    officialTitle: "Southeast Asia Blockchain Week 2026",
    type: "Media Partner",
    location: "Bangkok",
    date: "May 2026",
    image: "/seabw-2026.jpeg",
    imageAlt: "Southeast Asia Blockchain Week event in Bangkok",
    internalUrl: "/work/seabw",
  },
];
