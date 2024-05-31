import Image from "next/image";
import Ticker from "framer-motion-ticker";
import { useState } from "react";

export default function HeroSlider() {
  const [isPlaying, setIsPlaying] = useState(true);
  const iconUrls = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  ];

  return (
    <Ticker
      duration={10}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      isPlaying={isPlaying}
    >
      {iconUrls.map((item, index) => (
        <div
          className="rounded-xl bg-[#FFFFFF] dark:bg-[#1a1a23]"
          key={index}
          style={{
            margin: "10px",
            height: "80px",
            width: "80px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Image src={item} alt="icon" width={40} height={40} />
        </div>
      ))}
    </Ticker>
  );
}
