import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ShieldCheck, Lock } from 'lucide-react';

export const VslView: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Inject vturb player script if needed
    if (!document.querySelector('script[data-vturb-vsl]')) {
      const playerScript = document.createElement('script');
      playerScript.dataset.vturbVsl = 'true';
      playerScript.src =
        'https://scripts.converteai.net/55369419-630b-4afd-8556-faecd90bf85b/players/6ae506f2d653f6988a102713/v4/player.js';
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
        <div
          id="vid-6ae506f2d653f6988a102713"
          className="relative w-full aspect-9/16 bg-gradient-to-b from-gray-950 to-black flex flex-col items-center justify-center p-6 text-center"
        >
          {!isPlaying ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="group flex flex-col items-center cursor-pointer active:scale-95 transition"
              aria-label="Iniciar reprodução do vídeo explicativo"
            >
              <div className="w-20 h-20 rounded-full bg-[#f59e0b] flex items-center justify-center shadow-lg shadow-orange-500/40 group-hover:scale-110 transition mb-4">
                <Play className="w-8 h-8 fill-[#1a1a2e] text-[#1a1a2e] ml-1" />
              </div>
              <span className="text-white font-bold text-sm tracking-wide">
                Clique para Iniciar o Vídeo
              </span>
              <span className="text-orange-300 text-xs mt-1">
                Vídeo oficial KWIK Angola
              </span>
            </button>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-xs space-y-4 text-left bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Reproduzindo Guia de Saque Instantâneo
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-3/4 animate-pulse" />
                </div>
                <p className="text-xs text-gray-300">
                  Transmissão segura de autenticação de titularidade e liberação imediata de fundos.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Countdown and Unlock CTA */}
      <div className="w-full max-w-sm mt-6 text-center">
        {isUnlocked ? (
          <div id="vsl-cta" className="animate-fade-in">
            <a
              href="https://mentora.ao/produto/4218b62b-4548-4fc1-9ce7-acb2e635358a"
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
