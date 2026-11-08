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
        Que tal fazermos uma renda extra juntos? Chega mais!
      </p>

      <section className="step-cards">
        <button
          type="button"
          className="step-card step-card--active cursor-pointer"
          id="btn-step1"
          onClick={() => onNavigate(registered ? '/app' : '/cadastro')}
        >
          <span className="step-circle step-circle--active">1</span>
          <span className="flex-1 text-left">
            <span className="step-title step-title--active block font-bold">
              {registered ? 'Cadastro concluído' : 'Faça seu cadastro'}
            </span>
            <span className="step-desc step-desc--active block text-sm mt-0.5">
              É rápido e garante a segurança dos seus dados.
            </span>
          </span>
          <span className="step-chevron text-[#f59e0b]">
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </span>
        </button>

        <button
          type="button"
          className={`step-card ${registered ? 'step-card--active cursor-pointer' : 'step-card--disabled cursor-not-allowed opacity-80'}`}
          id="btn-step2"
          disabled={!registered}
          onClick={() => {
            if (registered) onNavigate('/saque');
          }}
        >
          <span className={`step-circle ${registered ? 'step-circle--active' : 'step-circle--disabled'}`}>
            2
          </span>
          <span className="flex-1 text-left">
            <span className={`step-title ${registered ? 'step-title--active font-bold' : 'step-title--disabled font-semibold'} block`}>
              Realize seu saque
            </span>
            <span className={`step-desc ${registered ? 'step-desc--active' : 'step-desc--disabled'} block text-sm mt-0.5`}>
              Assim que alcançar o valor mínimo.
            </span>
          </span>
          {registered && (
            <span className="step-chevron text-[#f59e0b]">
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </span>
          )}
        </button>
      </section>
    </main>
  );
};
