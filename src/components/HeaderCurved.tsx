import React from 'react';
import { Menu } from 'lucide-react';
import { KwikLogo } from './KwikLogo';

interface HeaderCurvedProps {
  onOpenMenu: () => void;
}

export const HeaderCurved: React.FC<HeaderCurvedProps> = ({ onOpenMenu }) => {
  return (
    <header className="header-curved">
      <div className="flex items-center justify-between gap-2">
        <KwikLogo size="md" />

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Official Site Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#dcf4fa] border border-[#b8e8f4] shadow-xs select-none">
            {/* Cyan Shield with Checkmark */}
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 2L4 5.5V11C4 16.5 7.5 21.2 12 22C16.5 21.2 20 16.5 20 11V5.5L12 2Z"
                fill="#00a8cc"
              />
              <path
                d="M9.5 11.5L11 13L15 9"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#64748b]/50 text-xs font-semibold leading-none">|</span>
            <span className="text-[#0a2540] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase leading-none">
              SITE OFICIAL DO KIWIK
            </span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            aria-label="Abrir menu"
            className="menu-btn transition-transform hover:scale-105 active:scale-95 p-1"
            onClick={onOpenMenu}
          >
            <Menu className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a1a2e]" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  );
};
