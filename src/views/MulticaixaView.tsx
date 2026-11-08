import React from 'react';
import { formatKz, WithdrawalDetails } from '../utils/kwik';

interface MulticaixaViewProps {
  amount: number;
  withdrawalDetails?: WithdrawalDetails | null;
  userName: string;
  onConfirm: () => void;
}

export const MulticaixaView: React.FC<MulticaixaViewProps> = ({
  amount,
  withdrawalDetails,
  userName,
  onConfirm,
}) => {
  const holder = withdrawalDetails?.holder || userName || 'Titular';
  const account = withdrawalDetails?.account || '900 000 000';
  const formattedAmount = formatKz(amount);

  return (
    <div className="animate-fade-in min-h-screen bg-[#f7f8fa] flex justify-center items-start">
      <main className="w-full max-w-[860px] min-h-screen bg-[#f7f8fa] flex flex-col items-center text-[#111827] font-sans">
        <header className="w-full bg-[#f97316] text-white py-7 px-6 text-center text-3xl md:text-5xl font-extrabold tracking-wider shadow-sm">
          MULTICAIXA
        </header>

        <section className="w-full py-12 md:py-20 px-6 text-center">
          <div className="text-3xl md:text-5xl font-extrabold mb-6 text-[#111827]">
            {formattedAmount}
          </div>
          <div className="text-[#f97316] text-xl md:text-3xl font-bold mb-10 tracking-wide">
            MONTANTE
          </div>

          <div className="text-2xl md:text-4xl font-medium mb-6 break-all text-[#111827]">
            {account}
          </div>
          <div className="text-[#f97316] text-xl md:text-3xl font-bold mb-10 tracking-wide">
            DESTINATÁRIO
          </div>

          <div className="text-2xl md:text-4xl font-medium break-all text-[#111827]">
            {holder}
          </div>
        </section>

        <section className="w-full border-t border-b border-[#d9dde3] py-7 px-[12%] text-lg md:text-2xl bg-white/50">
          <div className="flex justify-between gap-6 mb-7">
            <span className="text-[#6b7280]">Custo</span>
            <span className="text-[#6b7280] font-semibold">Isento</span>
          </div>
          <div className="flex justify-between gap-6 font-extrabold text-[#111827]">
            <span>Total</span>
            <span>{formattedAmount}</span>
          </div>
        </section>

        <button
          id="btn-continuar-vsl"
          type="button"
          onClick={onConfirm}
          style={{
            background: '#f97316',
            color: '#ffffff',
            boxShadow: '0 8px 24px rgba(249,115,22,0.3)',
          }}
          className="my-10 w-[85%] max-w-[340px] rounded-xl text-xl font-extrabold py-4 px-6 hover:brightness-105 active:scale-98 transition cursor-pointer"
        >
          Confirmar
        </button>
      </main>
    </div>
  );
};
