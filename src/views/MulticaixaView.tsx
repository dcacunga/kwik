import React from 'react';
import { formatPhoneNumber, formatExpressAmount, WithdrawalDetails } from '../utils/kwik';

interface MulticaixaViewProps {
  amount: number;
  withdrawalDetails?: WithdrawalDetails | null;
  userName: string;
  userPhone: string;
  onConfirm: () => void;
}

export const MulticaixaView: React.FC<MulticaixaViewProps> = ({
  amount,
  withdrawalDetails,
  userName,
  userPhone,
  onConfirm,
}) => {
  // Use user's input name and phone so all details compactuate
  const holder = (withdrawalDetails?.holder || userName || 'Maria').trim();
  const rawAccount = withdrawalDetails?.account || userPhone || '928 457 885';
  const account = formatPhoneNumber(rawAccount);
  const formattedAmount = formatExpressAmount(amount);

  return (
    <div className="animate-fade-in min-h-screen bg-white flex justify-center items-start">
      <main className="w-full max-w-[480px] min-h-screen bg-white flex flex-col items-center text-[#111827] font-sans shadow-sm">
        {/* Top Header Banner with Express Logo */}
        <header className="w-full bg-[#fe9f02] py-4 px-6 flex items-center justify-center shadow-xs">
          <img
            src="/assets/aistudio/express_logo.png"
            alt="Express"
            className="h-10 sm:h-12 w-auto object-contain select-none"
          />
        </header>

        {/* Transfer Header Title */}
        <h1 className="mt-7 mb-7 text-2xl sm:text-[26px] font-extrabold text-[#fe9f02] uppercase tracking-wide text-center">
          TRANSFERÊNCIA EXPRESS
        </h1>

        {/* Montante */}
        <section className="w-full px-6 text-center">
          <div className="text-3xl sm:text-[38px] font-black text-black leading-tight tracking-tight mb-1">
            {formattedAmount}
          </div>
          <div className="text-[#fe9f02] text-lg sm:text-[19px] font-bold tracking-wider mb-7 uppercase">
            MONTANTE
          </div>

          {/* Destinatário (User's Phone Number) */}
          <div className="text-2xl sm:text-[32px] font-bold text-black leading-tight tracking-tight mb-1">
            {account}
          </div>
          <div className="text-[#fe9f02] text-lg sm:text-[19px] font-bold tracking-wider mb-7 uppercase">
            DESTINATÁRIO
          </div>

          {/* Ordenante (User's Name) */}
          <div className="text-2xl sm:text-[30px] font-semibold text-black leading-tight mb-1">
            {holder}
          </div>
          <div className="text-[#fe9f02] text-lg sm:text-[19px] font-bold tracking-wider mb-10 uppercase">
            ORDENANTE
          </div>
        </section>

        {/* Cost and Total Table */}
        <section className="w-full border-t border-b border-[#e5e7eb] py-4 px-8 text-lg sm:text-xl bg-white">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#6b7280]">Custo</span>
            <span className="text-[#6b7280]">Isento</span>
          </div>
          <div className="flex justify-between items-center font-extrabold text-black text-xl sm:text-2xl">
            <span>Total</span>
            <span>{formattedAmount}</span>
          </div>
        </section>

        {/* Confirm Button */}
        <button
          id="btn-continuar-vsl"
          type="button"
          onClick={onConfirm}
          style={{
            backgroundColor: '#f19602',
            color: '#000000',
          }}
          className="my-9 w-[85%] max-w-[340px] rounded-full text-xl font-bold py-4 px-6 text-center shadow-md active:scale-95 hover:brightness-105 transition cursor-pointer"
        >
          Confirmar
        </button>
      </main>
    </div>
  );
};
