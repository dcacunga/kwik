import React, { useState } from 'react';
import { ArrowLeft, Landmark, Smartphone, User } from 'lucide-react';
import { HeaderBar } from '../components/HeaderBar';
import { validateWithdrawalAccount, WithdrawalDetails } from '../utils/kwik';

interface SaqueViewProps {
  balance: number;
  userName: string;
  userPhone?: string;
  initialDetails?: WithdrawalDetails | null;
  onSuccess: (details: WithdrawalDetails) => void;
  onBack: () => void;
}

export const SaqueView: React.FC<SaqueViewProps> = ({
  balance,
  userName,
  userPhone = '',
  initialDetails,
  onSuccess,
  onBack,
}) => {
  const [method, setMethod] = useState<'express' | 'iban'>(
    initialDetails?.method || 'express'
  );
  const [holder, setHolder] = useState(initialDetails?.holder || userName || '');
  const [account, setAccount] = useState(
    initialDetails?.account || (userPhone ? userPhone.replace(/\D/g, '').slice(-9) : '')
  );
  const [error, setError] = useState<string | null>(null);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = method === 'express' ? 9 : 21;
    const clean = e.target.value.replace(/\D/g, '').slice(0, max);
    setAccount(clean);
  };

  const handleSwitchMethod = (newMethod: 'express' | 'iban') => {
    if (newMethod === method) return;
    setMethod(newMethod);
    setAccount('');
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!holder.trim()) {
      setError('Indique o nome do titular.');
      return;
    }

    const valRes = validateWithdrawalAccount(method, account);
    if (!valRes.valid) {
      setError(valRes.error || 'Número de conta inválido.');
      return;
    }

    setError(null);
    onSuccess({
      method,
      holder: holder.trim(),
      account: account.trim(),
    });
  };

  return (
    <div className="page-main animate-fade-in pb-16">
      <HeaderBar balance={balance} />

      <main className="page-padded">
        <button
          className="btn-ghost flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 cursor-pointer pt-2"
          id="btn-back-saque"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" /> Voltar
        </button>

        <h1 className="heading-page mt-4">Método de retirada</h1>
        <div className="divider-bar" />

        <form id="saque-form" className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`method-btn ${method === 'express' ? 'method-btn--active' : 'method-btn--inactive'} cursor-pointer`}
              id="method-express"
              aria-pressed={method === 'express'}
              onClick={() => handleSwitchMethod('express')}
            >
              <span style={{ fontSize: '1.5rem' }}>📱</span>
              <span>Multicaixa Express</span>
            </button>
            <button
              type="button"
              className={`method-btn ${method === 'iban' ? 'method-btn--active' : 'method-btn--inactive'} cursor-pointer`}
              id="method-iban"
              aria-pressed={method === 'iban'}
              onClick={() => handleSwitchMethod('iban')}
            >
              <Landmark className="w-6 h-6 stroke-[2]" />
              <span>IBAN</span>
            </button>
          </div>

          <div>
            <label htmlFor="titular" className="form-label block mb-2 font-bold text-sm">
              Nome do titular
            </label>
            <div className="form-input-wrap">
              <User className="w-5 h-5 text-gray-400 stroke-[2]" />
              <input
                id="titular"
                placeholder="Nome completo"
                className="form-input"
                value={holder}
                onChange={(e) => setHolder(e.target.value)}
              />
            </div>
          </div>

          <div id="account-field">
            <label htmlFor="conta" className="form-label block mb-2 font-bold text-sm" id="conta-label">
              {method === 'express' ? 'Número Multicaixa Express' : 'IBAN (após AO06)'}
            </label>
            <div className="form-input-wrap">
              <Smartphone className="w-5 h-5 text-gray-400 stroke-[2]" />
              <input
                id="conta"
                inputMode="numeric"
                placeholder={method === 'express' ? '900 000 000' : '000000000000000000000'}
                className="form-input"
                value={account}
                onChange={handleAccountChange}
              />
            </div>
          </div>

          {error && (
            <div id="saque-error" className="error-msg text-red-600 bg-red-50 p-3 rounded-lg text-sm font-semibold border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary w-full py-4 rounded-xl font-bold text-lg bg-[#f59e0b] hover:brightness-105 active:scale-98 transition shadow-md cursor-pointer"
          >
            Continuar
          </button>
        </form>
      </main>
    </div>
  );
};
