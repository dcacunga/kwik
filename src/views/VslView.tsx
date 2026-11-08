import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export const VslView: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(180);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mount the user's specific vturb-smartplayer
    if (videoContainerRef.current) {
      videoContainerRef.current.innerHTML = `
        <vturb-smartplayer id="vid-6af00589d779234bdaf8a87a" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;">
          <div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 178.21782178217822% 0 0; z-index: 0; background-color: black;"></div>
        </vturb-smartplayer>
      `;
    }

    const scriptSrc =
      'https://scripts.converteai.net/0f437237-527a-4535-bdf5-d5d791480e65/players/6af00589d779234bdaf8a87a/v4/player.js';

    // Inject the specific vturb player script
    let playerScript = document.querySelector(
      `script[src="${scriptSrc}"]`
    ) as HTMLScriptElement | null;
    if (!playerScript) {
      playerScript = document.createElement('script');
      playerScript.src = scriptSrc;
      playerScript.async = true;
      document.head.appendChild(playerScript);
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  const isUnlocked = secondsLeft <= 0;

  return (
    <div className="vsl-page animate-fade-in p-4 sm:p-6 min-h-screen max-w-lg mx-auto flex flex-col items-center">
      <div className="w-full text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f59e0b] font-bold text-xs uppercase tracking-widest mb-3">
          <Lock className="w-3.5 h-3.5" />
          Área de Desbloqueio
        </div>
        <h1 className="vsl-title text-2xl sm:text-3xl font-black text-[#1a1a2e] uppercase tracking-tight">
          DESBLOQUEIO DE SALDO
        </h1>
        <p className="vsl-subtitle text-sm text-[#8a8680] mt-2 max-w-md mx-auto">
          Assista o vídeo informativo até o final para processar seu saque com segurança imediata
        </p>
      </div>

      <div className="vsl-video-wrap w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-500/20 bg-black relative">
        <div ref={videoContainerRef} className="w-full" />
      </div>

      {/* Countdown and Unlock CTA */}
      <div className="w-full max-w-sm mt-6 text-center">
        {isUnlocked ? (
          <div id="vsl-cta" className="animate-fade-in">
            <a
              href="https://entitypay.online/checkout/a602354428"
              className="vsl-cta-btn flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-[#f59e0b] text-[#1a1a2e] font-black text-lg shadow-xl shadow-orange-500/30 hover:brightness-105 active:scale-98 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIBERAR AGORA
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            <p
              id="vsl-countdown"
              className="text-[#8a8680] text-sm font-semibold tracking-wide"
            >
              O botão será liberado em {minutes}:{seconds}
            </p>
            <button
              type="button"
              onClick={() => setSecondsLeft(0)}
              className="text-xs text-orange-600/70 hover:text-orange-600 underline cursor-pointer"
            >
              (Pular espera do vídeo para testar botão de liberação)
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 text-xs text-[#8a8680] flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Garantia de segurança e liquidação KWIK</span>
      </div>
    </div>
  );
};
