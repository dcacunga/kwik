import React, { useEffect } from 'react';
import { X, PartyPopper } from 'lucide-react';
import { formatKz } from '../utils/kwik';

interface ModalPrizeProps {
  isOpen: boolean;
  rewardValue: number;
  onClose: () => void;
}

export const ModalPrize: React.FC<ModalPrizeProps> = ({
  isOpen,
  rewardValue,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Pleasant celebratory Web Audio chime
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(0.2, now + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.4);
        });
      }
    } catch {
      // Audio autoplay gracefully suppressed
    }

    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="prize-modal-overlay"
      id="prize-overlay-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="prize-modal-title"
    >
      <div className="prize-modal" id="prize-modal-card">
        <button
          className="prize-close"
          id="prize-close-btn"
          aria-label="Fechar"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-gray-500 hover:text-gray-900" />
        </button>
        <div className="modal-icon modal-icon--party" aria-hidden="true">
          <PartyPopper className="w-8 h-8 text-white" />
        </div>
        <p className="prize-label">Parabéns!</p>
        <h2 id="prize-modal-title" className="prize-heading">Você ganhou!</h2>
        <p className="prize-value">+{formatKz(rewardValue)}</p>
        <button
          className="prize-continue"
          id="prize-continue-btn"
          onClick={onClose}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};
