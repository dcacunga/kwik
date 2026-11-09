import React, { useState, useEffect } from 'react';
import { formatPhoneNumber, formatExpressAmount, WithdrawalDetails } from '../utils/kwik';

interface MulticaixaViewProps {
  amount: number;
  withdrawalDetails?: WithdrawalDetails | null;
  userName: string;
  userPhone: string;
  onConfirm: () => void;
}

// Play a pleasant iOS-style two-tone chime when notification drops down
function playNotificationChime() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    const now = ctx.currentTime;

    // Tone 1 (high chime)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, now);
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.22);

    // Tone 2
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1318.5, now + 0.09);
    gain2.gain.setValueAtTime(0.22, now + 0.09);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.09);
    osc2.stop(now + 0.42);

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([60, 40, 60]);
    }
  } catch {
    // Non-blocking fallback
  }
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

  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    // Drop down notification smoothly from top shortly after screen renders
    const timer = setTimeout(() => {
      setNotificationVisible(true);
      playNotificationChime();
    }, 450);

    return () => clearTimeout(timer);
  }, []);

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

        {/* Sliding Push Notification overlay dropping down from above */}
        <div
          aria-live="polite"
          onClick={() => setNotificationVisible(false)}
          className={`absolute top-2.5 left-3 right-3 sm:left-4 sm:right-4 z-50 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            notificationVisible
              ? 'translate-y-0 opacity-100 shadow-[0_16px_40px_rgba(0,0,0,0.35)]'
              : '-translate-y-48 opacity-0 pointer-events-none'
          }`}
          title="Toque para fechar notificação"
        >
          <div className="w-full backdrop-blur-xl bg-black/40 border border-white/25 rounded-[26px] p-2.5 sm:p-3 flex items-center gap-3 shadow-[0_12px_32px_rgba(0,0,0,0.25)] select-none">
            {/* Multicaixa Express App Icon */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[13px] bg-[#f58220] p-1 flex flex-col items-center justify-center shadow-sm shrink-0 border border-white/30">
              <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <path
                      d="M50 14 C44 26 42 36 50 42 C58 36 56 26 50 14Z"
                      fill="#c0262d"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                    />
                    <line x1="50" y1="20" x2="50" y2="34" stroke="#ffffff" strokeWidth="2.5" />
                  </g>
                ))}
                <circle cx="50" cy="50" r="14" fill="#f58220" stroke="#ffffff" strokeWidth="3" />
              </svg>
              <span className="text-[8px] sm:text-[9px] font-black tracking-tight text-[#c0262d] leading-none uppercase -mt-0.5 font-sans">
                express
              </span>
            </div>

            {/* Notification content */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-white font-bold text-[14.5px] sm:text-[15.5px] leading-tight truncate drop-shadow-xs">
                  Pagamento de Serviço
                </span>
                <span className="text-white/80 text-[12.5px] sm:text-[13.5px] font-medium shrink-0">
                  agora
                </span>
              </div>
              <p className="text-white text-[13px] sm:text-[14px] leading-tight font-normal mt-0.5 drop-shadow-xs">
                Com valor de 125.000,00 (Kz) efetuado com sucesso
              </p>
            </div>
          </div>
        </div>

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
