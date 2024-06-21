import React, { useState } from "react";
import Image from "next/image";
import { formatDate } from "@/components/helper/dateFormat";
import PDF from "@/assets/png/Pdf.png";
import PNG from "@/assets/png/Png.png";

const formatUrl = (url: string) => {
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("/")
  ) {
    return url;
  }
  return `/${url}`;
};

const KYCTabs = ({ data }: any) => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);

  const isImage = (url: string) => {
    const supportedExtensions = [".png", ".jpg", ".jpeg", ".gif"];
    const lowerCaseUrl = url.toLowerCase();
    return supportedExtensions.some((ext) => lowerCaseUrl.endsWith(ext));
  };

  return (
    <div className="p-4 py-8 border-y grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6 text-[14px]">
      {/* ID Card */}
      <div className="p-4 md:max-w-[300px] rounded-lg bg-[#FBFFF5] border border-[#85BC2C] border-dashed flex flex-col gap-2 justify-center items-center">
        {isImage(data?.tin_url) ? (
          <Image src={PNG} alt="PNG" />
        ) : (
          <Image src={PDF} alt="PDF" />
        )}
        <p className="text-[#242F57] font-semibold">
          {isImage(data?.tin_url) ? "ID card.png" : "ID card.pdf"}
        </p>
        <span className="flex gap-3 text-[#636E95]">
          <p className="text-[#242F57]">{formatDate(data.updated_at)}</p>|
          <p className="text-[#242F57]">14.1Mb</p>
        </span>
        {isImage(data?.tin_url) ? (
          <button
            type="button"
            className="text-[#1AD48E]"
            onClick={() => setVisible(true)}
          >
            View File
          </button>
        ) : (
          <a
            href={formatUrl(data?.tin_url)}
            download
            className="text-[#1AD48E]"
          >
            Download File
          </a>
        )}
        {isImage(data?.tin_url) && (
          <Image
            alt="ID Card"
            width={200}
            height={200}
            style={{ display: "none" }}
            src={formatUrl(data?.tin_url)}
            className={visible ? "block" : "hidden"}
          />
        )}
      </div>

      {/* Utility Bill */}
      <div className="p-4 md:max-w-[300px] rounded-lg bg-[#FBFFF5] border border-[#85BC2C] border-dashed flex flex-col gap-2 justify-center items-center">
        {isImage(data?.moa_url) ? (
          <Image src={PNG} alt="PNG" />
        ) : (
          <Image src={PDF} alt="PDF" />
        )}
        <p className="text-[#242F57] font-semibold">
          {isImage(data?.moa_url) ? "Utility Bill.png" : "Utility Bill.pdf"}
        </p>
        <span className="flex gap-3 text-[#636E95]">
          <p className="text-[#242F57]">{formatDate(data.updated_at)}</p>|
          <p className="text-[#242F57]">14.1Mb</p>
        </span>
        {isImage(data?.moa_url) ? (
          <button
            type="button"
            className="text-[#1AD48E]"
            onClick={() => setVisible1(true)}
          >
            View File
          </button>
        ) : (
          <a
            href={formatUrl(data?.moa_url)}
            download
            className="text-[#1AD48E]"
          >
            Download File
          </a>
        )}
        {isImage(data?.moa_url) && (
          <Image
            alt="Utility Bill"
            width={200}
            height={200}
            style={{ display: "none" }}
            src={formatUrl(data?.moa_url)}
            className={visible1 ? "block" : "hidden"}
          />
        )}
      </div>
    </div>
  );
};

export default KYCTabs;
