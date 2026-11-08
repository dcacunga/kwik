import React, { useEffect } from 'react';

interface LevantamentoViewProps {
  onFinish: () => void;
  durationMs?: number;
}

export const LevantamentoView: React.FC<LevantamentoViewProps> = ({
  onFinish,
  durationMs = 4000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, durationMs);
    return () => clearTimeout(timer);
  }, [onFinish, durationMs]);

  return (
    <div className="loading-page animate-fade-in flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="spinner-wrap mb-6">
        <div className="spinner-outer" />
        <div className="spinner-inner" />
      </div>
      <p className="loading-title text-2xl font-bold text-[#1a1a2e]">
        Gerando factura
      </p>
      <p className="loading-subtitle text-[#8a8680] mt-2">
        Aguarde um momento…
      </p>
    </div>
  );
};
