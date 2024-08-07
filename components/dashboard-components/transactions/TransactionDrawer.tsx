import React from "react";
import { Drawer } from "antd";
import { formatDate } from "@/components/helper/dateFormat";

interface TransactionDrawerProps {
  open: boolean;
  onClose: () => void;
  data: any;
}

const TransactionDrawer: React.FC<TransactionDrawerProps> = ({
  open,
  onClose,
  data,
}) => {
  const {
    amount = 0,
    created_at = "",
    customer_name = "",
    bank_name = "",
    account_number = "",
    narration = "",
    tx_type = "",
  } = data || {};
  const renderAmount = () => {
    if (tx_type === "credit") {
      return (
        <h1 className="font-bold text-3xl text-green-500">+NGN {amount}</h1>
      );
    } else if (tx_type === "debit") {
      return <h1 className="font-bold text-3xl text-red-500">-NGN {amount}</h1>;
    } else {
      return <h1 className="font-bold text-3xl">NGN {amount}</h1>;
    }
  };

  return (
    <Drawer
      onClose={onClose}
      open={open}
      title={null}
      placement="right"
      width={500}
      getContainer={false}
      closable={true}
      style={{ position: "absolute", padding: 0 }}
    >
      <div id="receipt" className="space-y-8 py-4">
        <div className="bg-slate-100 h-[150px] w-full flex flex-col justify-center items-center">
          {renderAmount()}
          <p className="text-xl">{customer_name}</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">Transaction Information</h2>
        </div>
        <div className="p-4 border rounded-md space-y-6 border-[#FAFAFA]">
          <div className="w-full flex justify-between">
            <span>Amount</span>
            <span className="font-bold">{`NGN ${amount}`}</span>
          </div>

          <div className="w-full flex justify-between">
            <span>Date</span>
            <span>{formatDate(created_at)}</span>
          </div>

          <div className="w-full flex justify-between">
            <span>Bank Name</span>
            <span>{bank_name || "N/A"}</span>
          </div>

          <div className="w-full flex justify-between">
            <span>Account Number</span>
            <span>{account_number}</span>
          </div>

          <div className="w-full flex justify-between">
            <span>Transaction Type</span>
            <span>{tx_type}</span>
          </div>
          <div className="w-full flex justify-between">
            <span>Narration</span>
            <span>{narration}</span>
          </div>
          <hr />

          <div className="w-full">
            <h4 className="font-bold text-md">Transaction Memo</h4>
            <p>{narration}</p>
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="w-full text-center h-[50px] bg-black text-white rounded mb-4 font-semibold"
        >
          Download Receipt
        </button>
      
      </div>
    </Drawer>
  );
};

export default TransactionDrawer;
