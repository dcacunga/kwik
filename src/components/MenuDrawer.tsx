import React from 'react';
import { X, Home, UserPlus, CreditCard, Gift, ShieldCheck, HelpCircle } from 'lucide-react';
import { KwikLogo } from './KwikLogo';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
  registered: boolean;
  balance: number;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  registered,
}) => {
  if (!isOpen) return null;

  const handleNav = (route: string) => {
    onNavigate(route);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in" onClick={onClose}>
      <aside
        className="w-full max-w-xs h-full bg-white shadow-2xl flex flex-col p-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
      >
        <div className="flex items-center justify-between pb-6 border-b border-[#e0ddd6]">
          <KwikLogo size="sm" />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 active:scale-95"
          >
            <X className="w-6 h-6 text-[#1a1a2e]" />
          </button>
        </div>

        <nav className="flex-1 py-6 space-y-2">
          <button
            type="button"
            onClick={() => handleNav('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-left hover:bg-[#fef3c7] text-[#1a1a2e]"
          >
            <Home className="w-5 h-5 text-[#f59e0b]" />
            <span>Início</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav('/cadastro')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-left hover:bg-[#fef3c7] text-[#1a1a2e]"
          >
            <UserPlus className="w-5 h-5 text-[#f59e0b]" />
            <span>{registered ? 'Meu Cadastro (Concluído)' : 'Criar Cadastro'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav(registered ? '/app' : '/cadastro')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-left hover:bg-[#fef3c7] text-[#1a1a2e]"
          >
            <Gift className="w-5 h-5 text-[#f59e0b]" />
            <span>Validador de Cupons KWIK</span>
          </button>

          <button
            type="button"
            onClick={() => handleNav(registered ? '/saque' : '/cadastro')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-left hover:bg-[#fef3c7] text-[#1a1a2e]"
          >
            <CreditCard className="w-5 h-5 text-[#f59e0b]" />
            <span>Método de Saque</span>
          </button>

          <div className="pt-4 border-t border-[#e0ddd6]">
            <div className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#8a8680]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Ambiente 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#8a8680]">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Suporte KWIK Angola</span>
            </div>
          </div>
        </nav>

        <div className="pt-4 text-center text-xs text-[#8a8680]">
          KWIK — Kwanza Instantâneo © {new Date().getFullYear()}
        </div>
      </aside>
    </div>
  );
};
