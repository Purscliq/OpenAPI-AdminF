"use client";

import React from "react";
import { CustomButton as Button } from "@/lib/AntdComponents";
import { Drawer } from "antd";

interface TransactionDrawerProps {
  open: boolean;
  onClose: () => void;
}

const TransactionDrawer: React.FC<TransactionDrawerProps> = ({
  open,
  onClose,
}) => {
  return (
    <Drawer onClose={onClose} open={open} width={500}>
      <div className="flex flex-col gap-4 text-[#515B6F]">
        <span className="flex flex-col gap-2 items-center justify-center bg-[#FAFAFA] rounded-[5px] text-center h-[183px]">
          <p className="text-[#0AA07B] text-[28px] font-bold">+N 200,000.00</p>
          <p className="uppercase text-[#515B6F] text-[18px]">John David Doe</p>
        </span>
        <p className="font-bold text-[18px] capitalize">
          transaction information
        </p>

        <div className="flex flex-col gap-4 p-6 shadow-md shadow-[#0000001A]">
          <span className="flex gap-6 justify-between text-[14px]">
            <p className="">Amount</p>
            <p className="text-[#181336] font-medium">+200,000.00</p>
          </span>
          <span className="flex gap-6 justify-between text-[14px]">
            <p className="">Date</p>
            <p className="text-[#181336] font-medium">
              24 July,2023 1:38:28 PM
            </p>
          </span>
          <span className="flex gap-6 justify-between text-[14px]">
            <p className="">Counterparty</p>
            <p className="text-[#181336] font-medium capitalize">
              john David doe
            </p>
          </span>
          <span className="flex gap-6 justify-between text-[14px]">
            <p className="">Bank Name</p>
            <p className="text-[#181336] font-medium capitalize">First Bank</p>
          </span>
          <span className="flex gap-6 justify-between text-[14px]">
            <p className="">Account Number</p>
            <p className="text-[#181336] font-medium">05596746787</p>
          </span>
          <span className="flex gap-6 justify-between text-[14px]">
            <p className="">Source</p>
            <p className="text-[#181336] font-medium capitalize">
              PursBusiness main Account
            </p>
          </span>

          <hr />
          <span className="flex flex-col gap-1">
            <p className="text-[#181336] font-semibold capitalize">
              Transaction Memo
            </p>
            <p className="">inward transfer from King and Son</p>
          </span>
        </div>

        <Button className="!bg-black !text-white !text-base !font-medium !py-[12px]">
          Download Receipt
        </Button>
        <Button className="!text-base !font-medium !py-[12px]">
          Report Transaction
        </Button>
      </div>
    </Drawer>
  );
};

export default TransactionDrawer;
