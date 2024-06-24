import React, { useState } from "react";
import { Image as AntdImage } from "antd";
import { formatDate } from "@/components/helper/dateFormat";
import PDF from "@/assets/png/Pdf.png";
import PNG from "@/assets/png/Png.png";
import Image from "next/image";

interface KYCData {
  id: number;
  upload_url: string;
  size: number;
  updated_at: string;
  name: string;
}

interface KYCTabsProps {
  data: KYCData[];
}
const formatUrl = (url: string | null) => {
  if (!url) return "";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("/")
  ) {
    return url;
  }
  return `/${url}`;
};
const isImage = (url: string) => {
  if (!url) return false;
  const supportedExtensions = [".png", ".jpg", ".jpeg", ".gif"];
  const lowerCaseUrl = url.toLowerCase();
  return supportedExtensions.some((ext) => lowerCaseUrl.endsWith(ext));
};

const KYCTab: React.FC<KYCTabsProps> = ({ data }) => {
  const [visible, setVisible] = useState<{ [key: number]: boolean }>({});

  const toggleVisibility = (id: number) => {
    setVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-4 py-8 border-y grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6 text-[14px]">
      {data.map((doc) => (
        <div
          key={doc.id}
          className="p-4 md:max-w-[300px] rounded-lg bg-[#FBFFF5] border border-[#85BC2C] border-dashed flex flex-col gap-2 justify-center items-center"
        >
          {isImage(doc.upload_url ||"") ? (
            <Image src={PNG} alt="PNG" />
          ) : (
            <Image src={PDF} alt="PDF" />
          )}
          <p className="text-[#242F57] font-semibold">{doc.name}</p>
          <span className="flex gap-3 text-[#636E95]">
            <p className="text-[#242F57]">{formatDate(doc.updated_at)}</p>|
            <p className="text-[#242F57]">
              {(doc.size / 1024 / 1024).toFixed(2)}Mb
            </p>
          </span>
          {isImage(doc.upload_url) ? (
            <button
              type="button"
              className="text-[#1AD48E]"
              onClick={() => toggleVisibility(doc.id)}
            >
              View File
            </button>
          ) : (
            <a
              href={formatUrl(doc.upload_url)}
              download
              className="text-[#1AD48E]"
            >
              Download File
            </a>
          )}
          {isImage(doc.upload_url) && (
            <AntdImage
              width={200}
              style={{ display: "none" }}
              src={formatUrl(doc.upload_url)}
              preview={{
                visible: visible[doc.id],
                src: formatUrl(doc.upload_url),
                onVisibleChange: (value: any) => {
                  setVisible((prev) => ({ ...prev, [doc.id]: value }));
                },
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default KYCTab;
