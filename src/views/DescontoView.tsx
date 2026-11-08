import React from 'react';
import { PartyPopper, ArrowRight } from 'lucide-react';
import { KwikLogo } from '../components/KwikLogo';
import { formatKz, TOTAL_VALUE } from '../utils/kwik';

interface DescontoViewProps {
  amount?: number;
}

export const DescontoView: React.FC<DescontoViewProps> = ({ amount = TOTAL_VALUE }) => {
  return (
    <div className="desconto-page animate-fade-in p-6 max-w-md mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="desconto-header mb-6">
        <KwikLogo size="md" />
      </div>

      <div className="desconto-card">
        <div className="desconto-icon" aria-hidden="true">
          <PartyPopper className="w-7 h-7 text-[#f59e0b]" />
        </div>
        <h1 className="desconto-title">Saldo Disponível</h1>
        <p className="desconto-amount">{formatKz(amount)}</p>
        <div className="desconto-divider" />
        <p className="desconto-text">
          Para liberar o seu saque, é necessário concluir a verificação de identidade e ativar a sua conta Premium.
        </p>
        <p className="desconto-text-sm">
          Este é um passo obrigatório de segurança para proteger os seus fundos.
        </p>
      </div>

      <a
        href="https://pay.bicaju.com/3064c3d2-383a-4935-8c46-f368c81ee2e3"
        className="desconto-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>ATIVAR CONTA PREMIUM</span>
        <ArrowRight className="w-5 h-5 stroke-[2.5]" />
      </a>

      <p className="desconto-footer">
        🔒 Pagamento seguro · Dados protegidos
      </p>
    </div>
  );
};
