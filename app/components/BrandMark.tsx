import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Image
      src="/favicon.jpeg"
      alt="real homies club"
      width={44}
      height={44}
      priority
      className={className}
    />
  );
}
