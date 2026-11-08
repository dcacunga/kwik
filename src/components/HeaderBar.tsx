import React from 'react';
import { KwikLogo } from './KwikLogo';
import { formatKz } from '../utils/kwik';

interface HeaderBarProps {
  balance: number;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ balance }) => {
  return (
    <header className="header-bar">
      <KwikLogo size="sm" />
      <div className="balance-badge" role="status" aria-label={`Saldo atual: ${formatKz(balance)}`}>
        <div className="balance-badge__label">Saldo</div>
        <div className="balance-badge__value">{formatKz(balance)}</div>
      </div>
    </header>
  );
};
