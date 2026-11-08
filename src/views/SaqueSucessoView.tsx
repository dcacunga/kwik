import React from 'react';
import { Check, Play, ArrowRight } from 'lucide-react';
import { formatKz } from '../utils/kwik';

interface SaqueSucessoViewProps {
  amount: number;
  onWatchVideo: () => void;
}

export const SaqueSucessoView: React.FC<SaqueSucessoViewProps> = ({
  amount,
  onWatchVideo,
}) => {
  return (
    <div className="sucesso-page animate-fade-in p-6 text-center max-w-md mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="sucesso-check mb-6 flex items-center justify-center" aria-hidden="true">
        <Check className="w-10 h-10 text-white stroke-[3]" />
      </div>

      <h1 className="sucesso-title text-3xl font-black text-[#1a1a2e] mb-4">
        Parabéns!
      </h1>

      <p className="sucesso-text text-lg text-[#1a1a2e] mb-4 leading-relaxed">
        Seu cadastro foi realizado!
        <br />
        Você acaba de ganhar{' '}
        <strong className="text-[#f59e0b] block text-2xl font-black mt-1">
          {formatKz(amount)}!
        </strong>
      </p>

      <p className="sucesso-subtext text-sm text-[#8a8680] mb-8 leading-relaxed max-w-xs">
        Assista um curto vídeo com um passo a passo explicativo para você aprender
        a realizar o seu primeiro <strong>SAQUE</strong>.
      </p>

      <button
        type="button"
        className="sucesso-btn w-full max-w-xs flex items-center justify-between p-4 rounded-xl bg-[#f59e0b] text-[#1a1a2e] font-extrabold text-base shadow-lg hover:brightness-105 active:scale-98 transition cursor-pointer"
        id="btn-assistir-video"
        onClick={onWatchVideo}
      >
        <span className="sucesso-btn__inner flex items-center gap-3">
          <span className="sucesso-btn__play flex items-center justify-center w-8 h-8 rounded-full bg-[#1a1a2e] text-white">
            <Play className="w-4 h-4 fill-white ml-0.5" />
          </span>
          <span className="sucesso-btn__label uppercase tracking-wider">
            Assistir Vídeo
          </span>
        </span>
        <ArrowRight className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
};
