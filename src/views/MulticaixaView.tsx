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
    <div className="animate-fade-in w-full h-[100dvh] max-h-[100dvh] bg-white flex justify-center items-stretch overflow-hidden">
      <main className="w-full max-w-[430px] h-full flex flex-col justify-between items-center text-[#111827] font-sans bg-white select-none relative">
        {/* Top Header Banner with Express Logo - 100% matching image_36ed3dce.png */}
        <header
          style={{ backgroundColor: '#fe9f02' }}
          className="w-full h-[94px] sm:h-[102px] flex items-center justify-center shrink-0 px-6 shadow-xs"
        >
          <img
            src="/assets/aistudio/express_logo.png"
            alt="Express"
            className="h-10 sm:h-11 w-auto object-contain pointer-events-none"
          />
        </header>

        {/* Transfer Header Title */}
        <h1 className="mt-4 sm:mt-5 mb-1 text-[20px] sm:text-[22px] font-extrabold text-[#fe9f02] uppercase tracking-[0.03em] text-center shrink-0">
          TRANSFERÊNCIA EXPRESS
        </h1>

        {/* Vertically Distributed Data Groups */}
        <div className="flex-1 w-full px-6 flex flex-col justify-around items-center text-center py-1 sm:py-2">
          {/* Montante */}
          <div className="flex flex-col items-center">
            <div className="text-[30px] sm:text-[34px] font-black text-black leading-none tracking-tight mb-1">
              {formattedAmount}
            </div>
            <div className="text-[#fe9f02] text-[15px] sm:text-[16px] font-bold tracking-wider uppercase">
              MONTANTE
            </div>
          </div>

          {/* Destinatário (User's Phone Number) */}
          <div className="flex flex-col items-center">
            <div className="text-[27px] sm:text-[30px] font-bold text-black leading-none tracking-tight mb-1">
              {account}
            </div>
            <div className="text-[#fe9f02] text-[15px] sm:text-[16px] font-bold tracking-wider uppercase">
              DESTINATÁRIO
            </div>
          </div>

          {/* Ordenante (User's Name) */}
          <div className="flex flex-col items-center">
            <div className="text-[25px] sm:text-[28px] font-semibold text-black leading-none mb-1">
              {holder}
            </div>
            <div className="text-[#fe9f02] text-[15px] sm:text-[16px] font-bold tracking-wider uppercase">
              ORDENANTE
            </div>
          </div>
        </div>

        {/* Bottom Section: Table & Button docked at bottom matching image_36ed3dce.png exactly */}
        <div className="w-full shrink-0">
          {/* Cost and Total Table */}
          <section className="w-full border-t border-b border-[#e5e7eb] py-2.5 sm:py-3 px-6 sm:px-8 text-[15px] sm:text-[17px] bg-white">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#555963] font-normal">Custo</span>
              <span className="text-[#555963] font-normal">Isento</span>
            </div>
            <div className="flex justify-between items-center font-extrabold text-black text-[18px] sm:text-[20px]">
              <span>Total</span>
              <span>{formattedAmount}</span>
            </div>
          </section>

          {/* Confirm Button 100% matching image_36ed3dce.png */}
          <div className="w-full flex justify-center pt-6 sm:pt-7 pb-7 sm:pb-9 px-6">
            <button
              id="btn-continuar-vsl"
              type="button"
              onClick={onConfirm}
              style={{
                backgroundColor: '#fe9f02',
                color: '#000000',
              }}
              className="btn-confirmar-express"
            >
              Confirmar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
