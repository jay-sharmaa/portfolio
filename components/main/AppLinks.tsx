"use client";
import React from "react";
import Image from "next/image";

type DownloadStat = {
  platform: string;
  icon: string;
  link: string;
  count: number;
};

const downloadStats: DownloadStat[] = [
  {
    platform: "Itch.io",
    icon: "/itchio.png",
    link: "https://fitlitedev.itch.io/fitlite",
    count: 100,
  },
];

const DownloadStatsTable = () => {
  return (
    <section className="w-full px-6 md:px-20 py-12">
      <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 text-center">
        Download Stats
      </h2>

      <div className="overflow-x-auto rounded-xl border border-gray-700 mx-auto max-w-3xl">
        <table className="min-w-full bg-[#0d0d0d] text-white">
          <thead>
            <tr className="bg-[#1a1a1a] text-purple-300 text-left">
              <th className="py-3 px-4">Platform</th>
              <th className="py-3 px-4">Link</th>
              <th className="py-3 px-4">Downloads</th>
            </tr>
          </thead>
          <tbody>
            {downloadStats.map(({ platform, icon, link, count }, index) => (
              <tr
                key={index}
                className="border-t border-gray-800 hover:bg-[#1c1c1c] transition-colors"
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <Image src={icon} alt={platform} width={24} height={24} />
                  {platform}
                </td>
                <td className="py-3 px-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline break-all"
                  >
                    {link}
                  </a>
                </td>
                <td className="py-3 px-4 text-gray-400">{count}+</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DownloadStatsTable;