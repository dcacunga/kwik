import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

interface ModalSuccessProps {
  isOpen: boolean;
  onFinish: () => void;
  durationMs?: number;
}

export const ModalSuccess: React.FC<ModalSuccessProps> = ({
  isOpen,
  onFinish,
  durationMs = 5000,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onFinish();
    }, durationMs);
    return () => clearTimeout(timer);
  }, [isOpen, onFinish, durationMs]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-success-title"
    >
      <div className="modal-card">
        <div className="modal-icon modal-icon--success" aria-hidden="true">
          <Check className="w-8 h-8 text-white stroke-[3]" />
        </div>
        <h2 id="modal-success-title" className="modal-title">CONTA CRIADA</h2>
        <p className="modal-text">Parabéns! Sua conta foi criada com sucesso!</p>
        <p className="modal-text-sm">Seja muito bem-vindo à KWIK.</p>
        <p className="modal-text-sm">Você já está dentro da nossa 1ª Campanha de Cupons de Desconto. 🚀</p>
        <p className="modal-text-orange font-bold">Seu próximo passo: encontrar seu primeiro KWIK!</p>
        <div className="modal-progress-track">
          <div
            className="modal-progress-bar"
            style={{ animationDuration: `${durationMs}ms` }}
          />
        </div>
      </div>
    </div>
  );
};
