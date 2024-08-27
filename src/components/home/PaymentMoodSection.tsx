import {
  AccountBalance,
  CreditCard,
  Payment,
  Wallet,
} from "@mui/icons-material";

const PaymentMoodSection = () => {
  return (
    <section className="px-8 py-10 bg-[#ff6600] bg-opacity-20 rounded-lg my-16">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Payment Modes
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <AccountBalance className="h-10 w-10 text-[#ff6600] mr-4" />
          <span className="text-gray-700 text-lg">Deposit to Account</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <Payment className="h-10 w-10 text-[#ff6600] mr-4" />
          <span className="text-gray-700 text-lg">Net Banking</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <CreditCard className="h-10 w-10 text-[#ff6600] mr-4" />
          <span className="text-gray-700 text-lg">Credit Card/Debit Card</span>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <Wallet className="h-10 w-10 text-[#ff6600] mr-4" />
          <span className="text-gray-700 text-lg">
            Wallets (PayTM/PhonePe/Amazon etc.)
          </span>
        </div>
      </div>
    </section>
  );
};

export default PaymentMoodSection;
