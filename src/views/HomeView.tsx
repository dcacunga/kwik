import React from 'react';
import { ChevronRight } from 'lucide-react';
import { HeaderCurved } from '../components/HeaderCurved';

interface HomeViewProps {
  registered: boolean;
  onNavigate: (route: string) => void;
  onOpenMenu: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  registered,
  onNavigate,
  onOpenMenu,
}) => {
  return (
    <main className="page-main animate-fade-in pb-12">
      <HeaderCurved onOpenMenu={onOpenMenu} />

      <h1 className="heading-welcome">Bem vindo!</h1>
      <p className="subtitle-welcome">
        Que tal fazermos uma renda extra juntos?<br />
        Chega mais!
      </p>

      {/* Steps section matching official layout */}
      <section className="step-cards">
        {/* Step 1 */}
        <button
          type="button"
          className="step-card step-card--active cursor-pointer"
          id="btn-step1"
          onClick={() => onNavigate(registered ? '/app' : '/cadastro')}
        >
          <span className="step-circle step-circle--active bg-white">1</span>
          <span className="flex-1 text-left">
            <span className="step-title step-title--active block font-bold text-[#1a1a2e]">
              {registered ? 'Cadastro concluído' : 'Faça seu cadastro'}
            </span>
            <span className="step-desc step-desc--active block text-sm mt-0.5 text-[#334155]">
              É rápido e garante a segurança dos seus dados.
            </span>
          </span>
          <span className="step-chevron text-[#1a1a2e]">
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </span>
        </button>

        {/* Step 2 */}
        <button
          type="button"
          className="step-card step-card--active cursor-pointer"
          id="btn-step2"
          onClick={() => {
            if (registered) {
              onNavigate('/saque');
            } else {
              onNavigate('/cadastro');
            }
          }}
        >
          <span className="step-circle step-circle--active bg-white">
            2
          </span>
          <span className="flex-1 text-left">
            <span className="step-title step-title--active font-bold text-[#1a1a2e] block">
              Realize seu saque
            </span>
            <span className="step-desc step-desc--active text-[#334155] block text-sm mt-0.5">
              Assim que alcançar o valor mínimo.
            </span>
          </span>
          <span className="step-chevron text-[#1a1a2e]">
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </span>
        </button>

        {/* 'Fique atento' Alert Card matching image_53d6f282.png */}
        <aside
          aria-label="Aviso de segurança"
          className="mt-3 p-4 sm:p-4.5 rounded-[22px] bg-[#fde8e8] border border-[#fecdd3]/60 flex items-center gap-4 shadow-xs"
        >
          {/* Red Shield with Exclamation Mark */}
          <div className="shrink-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-[#dc2626]"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M18 2L4 7.2V17.5C4 26.2 10 34.2 18 37C26 34.2 32 26.2 32 17.5V7.2L18 2Z"
                fill="#dc2626"
              />
              <path
                d="M18 10.5V20.5"
                stroke="#ffffff"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <circle cx="18" cy="27" r="2.1" fill="#ffffff" />
            </svg>
          </div>

          {/* Vertical divider line */}
          <div className="w-[1.5px] self-stretch my-1 bg-[#fca5a5] shrink-0" />

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[#dc2626] font-bold text-[17px] sm:text-[18px] leading-tight">
              Fique atento
            </h2>
            <p className="text-[#1f2937] text-[13.5px] sm:text-[14px] mt-0.5 font-medium leading-snug">
              Use apenas o site oficial do Kiwik.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};
