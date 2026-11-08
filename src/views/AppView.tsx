import React, { useState } from 'react';
import { CircleCheck, PartyPopper } from 'lucide-react';
import { HeaderBar } from '../components/HeaderBar';
import { ModalPrize } from '../components/ModalPrize';
import {
  COUPONS,
  TOTAL_VALUE,
  formatKz,
  getCouponInputState,
  validateCouponSubmission,
  ValidationHistoryItem,
} from '../utils/kwik';

interface AppViewProps {
  balance: number;
  couponStep: number;
  history: ValidationHistoryItem[];
  onValidateCoupon: (reward: number, code: string) => void;
  onRequestWithdrawal: () => void;
}

export const AppView: React.FC<AppViewProps> = ({
  balance,
  couponStep,
  history,
  onValidateCoupon,
  onRequestWithdrawal,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showPrize, setShowPrize] = useState(false);
  const [currentReward, setCurrentReward] = useState(0);
  const [imageError, setImageError] = useState(false);

  const currentStep = Math.min(couponStep, COUPONS.length);
  const allDone = currentStep >= COUPONS.length;
  const currentCoupon = allDone ? null : COUPONS[currentStep];

  const inputState = currentCoupon
    ? getCouponInputState(inputValue, currentCoupon.code)
    : 'default';

  const getInputClass = () => {
    switch (inputState) {
      case 'valid':
        return 'coupon-code-input coupon-code-input--valid';
      case 'partial':
        return 'coupon-code-input coupon-code-input--partial';
      case 'invalid':
        return 'coupon-code-input coupon-code-input--invalid';
      case 'default':
      default:
        return 'coupon-code-input coupon-code-input--default';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clean = e.target.value.replace(/\D/g, '').slice(0, 8);
    setInputValue(clean);
    if (feedback) setFeedback(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCoupon) return;

    const res = validateCouponSubmission(inputValue, currentCoupon, history);
    if (!res.success) {
      setFeedback(res.error || 'Código inválido.');
      return;
    }

    const reward = res.reward || currentCoupon.value;
    setCurrentReward(reward);
    setShowPrize(true);
    setInputValue('');
    setImageError(false);
    onValidateCoupon(reward, currentCoupon.code);
  };

  return (
    <div className="page-main animate-fade-in pb-16">
      <HeaderBar balance={balance} />

      <main style={{ padding: '1.25rem 1rem' }}>
        <div className={`app-status ${allDone ? 'app-status--orange' : 'app-status--green'}`}>
          {allDone ? (
            <PartyPopper className="w-6 h-6 stroke-[2]" />
          ) : (
            <CircleCheck className="w-6 h-6 stroke-[2]" />
          )}
          <span className="app-status__text font-bold">
            {allDone ? 'Todos os KWIK validados!' : 'Novo KWIK localizado!'}
          </span>
        </div>

        <div className="mt-6" />

        {/* Step dots */}
        <div className="step-dots" aria-label="Progresso das etapas">
          {COUPONS.map((c, i) => (
            <div
              key={c.code}
              className={`step-dot ${
                i < currentStep
                  ? 'step-dot--done'
                  : i === currentStep
                  ? 'step-dot--current'
                  : 'step-dot--pending'
              }`}
              title={`Etapa ${i + 1}: ${c.brand}`}
            />
          ))}
        </div>

        {currentCoupon ? (
          <div>
            <div className="coupon-step-label">
              Etapa {currentCoupon.step} de {COUPONS.length}
            </div>

            {!imageError ? (
              <img
                src={currentCoupon.image}
                alt={`Cupom ${currentCoupon.brand} — código ${currentCoupon.code}`}
                className="coupon-img"
                onError={() => setImageError(true)}
              />
            ) : null}

            {imageError && (
              <div className="coupon-fallback">
                <div className="coupon-fallback__inner">
                  <p className="coupon-fallback__label">Cupom de desconto</p>
                  <h3 className="coupon-fallback__brand">{currentCoupon.brand}</h3>
                  <div className="coupon-fallback__code">{currentCoupon.code}</div>
                  <p className="coupon-fallback__value">
                    Valor: <strong>{formatKz(currentCoupon.value)}</strong>
                  </p>
                </div>
              </div>
            )}

            <form id="validate-form" className="mt-6" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="coupon-input" className="coupon-code-label">
                  Código KWIK
                </label>
                <button
                  type="button"
                  onClick={() => setInputValue(currentCoupon.code)}
                  className="text-xs text-[#f59e0b] font-semibold hover:underline cursor-pointer"
                >
                  Inserir código ({currentCoupon.code})
                </button>
              </div>

              <input
                id="coupon-input"
                inputMode="numeric"
                placeholder="Digite os 8 dígitos do KWIK"
                className={getInputClass()}
                value={inputValue}
                onChange={handleInputChange}
                maxLength={8}
                autoComplete="off"
              />

              <button type="submit" className="btn-validate">
                Validar KWIK
              </button>
            </form>
          </div>
        ) : (
          <section className="final-card animate-fade-in">
            <p className="final-card__label">Saldo final</p>
            <p className="final-card__value">{formatKz(TOTAL_VALUE)}</p>
            <p className="final-card__desc">
              Você validou os {COUPONS.length} cupons da campanha KWIK.
            </p>
            <button
              type="button"
              className="final-card__btn cursor-pointer"
              id="btn-levantamento"
              onClick={onRequestWithdrawal}
            >
              Levantar saldo
            </button>
          </section>
        )}

        {feedback && (
          <div
            id="app-feedback"
            className="app-feedback text-red-600 bg-red-50 p-3 rounded-lg text-sm font-semibold border border-red-200 mt-4"
          >
            {feedback}
          </div>
        )}
      </main>

      <ModalPrize
        isOpen={showPrize}
        rewardValue={currentReward}
        onClose={() => setShowPrize(false)}
      />
    </div>
  );
};
