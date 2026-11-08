import React from 'react';

export const Bak1View: React.FC = () => {
  return (
    <div className="bak-page animate-fade-in">
      <h1 className="bak-heading">
        ⏰ <span className="bak-heading__orange">ESPERA!</span>
      </h1>

      <div className="bak-circle" aria-label="85% de desconto">
        <span className="bak-percent">85%</span>
        <span className="bak-percent-label">desconto</span>
      </div>

      <p className="bak-title">
        Ganhe <span className="bak-orange">85% de desconto</span> agora mesmo na{' '}
        <span className="bak-orange">taxa de segurança!</span>
      </p>

      <p className="bak-desc">
        Não feche esta página. Use o cupom exclusivo abaixo e finalize sua compra com um super desconto de 85% na taxa de segurança.
      </p>

      <div className="bak-coupon-box">
        <p className="bak-coupon-label">Seu cupom de desconto:</p>
        <p className="bak-coupon-code">SEGURANCA85</p>
        <p className="bak-coupon-valid">Válido por tempo limitado!</p>
      </div>

      <a
        href="https://entitypay.online/checkout/a602354428"
        className="bak-cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        SIM, QUERO MEU DESCONTO DE 85% 🎁
      </a>
    </div>
  );
};
