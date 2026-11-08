import React from 'react';

interface KwikLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const KwikLogo: React.FC<KwikLogoProps> = ({ size = 'md', className = '' }) => {
  return (
    <div className={`kwik-logo ${className}`}>
      <span className={`kwik-logo__word kwik-logo__word--${size}`} aria-label="KWIK">
        <span>KW</span>
        <span className="kwik-logo__i">
          I
          <span className={`kwik-logo__tri kwik-logo__tri--${size}`} aria-hidden="true" />
        </span>
        <span>K</span>
      </span>
      <span className={`kwik-logo__sub kwik-logo__sub--${size}`}>
        kwanza instantâneo
      </span>
    </div>
  );
};
