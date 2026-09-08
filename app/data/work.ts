export type WorkItem = {
  title: string;
  type: string;
  location: string;
  date: string;
  image: string | null;
  imageAlt: string;
  externalUrl?: string;
  internalUrl?: string;
};

export const workItems: WorkItem[] = [
  {
    title: "GWDC 2026",
    type: "Media Partner",
    location: "Seoul",
    date: "Sep 2026",
    image: null,
    imageAlt: "",
  },
  {
    title: "WalletConnect Side Event",
    type: "Media Partner",
    location: "Seoul",
    date: "Aug 2026",
    image: null,
    imageAlt: "",
  },
  {
    title: "WebX Side Event",
    type: "Media Partner",
    location: "Tokyo",
    date: "Jul 2026",
    image: null,
    imageAlt: "",
  },
  {
    title: "Southeast Asia Blockchain Week 2026",
    type: "Media Partner",
    location: "Bangkok",
    date: "May 2026",
    image: "/seabw-2026.jpeg",
    imageAlt: "Southeast Asia Blockchain Week event in Bangkok",
    internalUrl: "/work/seabw",
  },
];
