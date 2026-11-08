import React from 'react';
import { Menu } from 'lucide-react';
import { KwikLogo } from './KwikLogo';

interface HeaderCurvedProps {
  onOpenMenu: () => void;
}

export const HeaderCurved: React.FC<HeaderCurvedProps> = ({ onOpenMenu }) => {
  return (
    <header className="header-curved">
      <div className="flex items-center justify-between">
        <KwikLogo size="md" />
        <button
          type="button"
          aria-label="Abrir menu"
          className="menu-btn transition-transform hover:scale-105 active:scale-95"
          onClick={onOpenMenu}
        >
          <Menu className="w-8 h-8 text-[#1a1a2e]" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
};
