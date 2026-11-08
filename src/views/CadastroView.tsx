import React, { useState } from 'react';
import { ArrowLeft, User, ShieldCheck, ChevronDown } from 'lucide-react';
import { KwikLogo } from '../components/KwikLogo';
import { ModalSuccess } from '../components/ModalSuccess';

interface CadastroViewProps {
  initialName?: string;
  initialPhone?: string;
  onSuccess: (name: string, phone: string) => void;
  onBack: () => void;
}

const COUNTRIES = [
  { code: '+244', name: 'Angola +244', flag: '🇦🇴' },
  { code: '+238', name: 'Cabo Verde +238', flag: '🇨🇻' },
  { code: '+258', name: 'Moçambique +258', flag: '🇲🇿' },
  { code: '+351', name: 'Portugal +351', flag: '🇵🇹' },
  { code: '+55', name: 'Brasil +55', flag: '🇧🇷' },
];

export const CadastroView: React.FC<CadastroViewProps> = ({
  initialName = '',
  initialPhone = '',
  onSuccess,
  onBack,
}) => {
  const [name, setName] = useState(initialName);
  const [selectedCountry, setSelectedCountry] = useState('+244');
  const [phone, setPhone] = useState(initialPhone.replace(/^\+\d+\s*/, ''));
  const [error, setError] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const steps = ['Dados', 'Verificação', 'Segurança', 'Concluir'];
  const currentFlag = COUNTRIES.find((c) => c.code === selectedCountry)?.flag || '🇦🇴';

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 9);
    setPhone(raw);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.trim();

    if (!cleanName || !cleanPhone) {
      setError('Preencha seu nome e telefone.');
      return;
    }

    if (cleanPhone.length < 9) {
      setError('Indique um número de telefone válido (9 dígitos).');
      return;
    }

    setError(null);
    setIsSuccessModalOpen(true);
  };

  const handleModalFinished = () => {
    setIsSuccessModalOpen(false);
    onSuccess(name.trim(), `${selectedCountry} ${phone.trim()}`);
  };

  return (
    <main className="page-main page-padded animate-fade-in pb-16">
      <div className="relative flex items-center justify-center pt-2">
        <button
          type="button"
          aria-label="Voltar"
          className="back-btn cursor-pointer"
          id="btn-back-cadastro"
          onClick={onBack}
        >
          <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <KwikLogo size="md" />
      </div>

      <ol className="stepper" aria-label="Etapas do cadastro">
        {steps.map((label, i) => (
          <li key={label} className="stepper__item">
            <div className="stepper__track">
              <span className={`stepper__line ${i === 0 ? 'stepper__line--transparent' : 'stepper__line--border'}`} />
              <span className={`stepper__dot ${i === 0 ? 'stepper__dot--active' : 'stepper__dot--inactive'}`}>
                {i + 1}
              </span>
              <span className={`stepper__line ${i === steps.length - 1 ? 'stepper__line--transparent' : 'stepper__line--border'}`} />
            </div>
            <span className={`stepper__label ${i === 0 ? 'stepper__label--active' : 'stepper__label--inactive'}`}>
              {label}
            </span>
          </li>
        ))}
      </ol>

      <h1 className="heading-page mt-8">Crie sua conta</h1>
      <p className="subtitle-page">É rápido, fácil e seguro.</p>
      <div className="divider-bar" />

      <form id="cadastro-form" className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome" className="form-label block mb-2 font-bold text-sm">
            Nome completo
          </label>
          <div className="form-input-wrap">
            <User className="w-5 h-5 text-gray-400 stroke-[2]" />
            <input
              id="nome"
              required
              placeholder="Seu nome completo"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefone" className="form-label block mb-2 font-bold text-sm">
            Telefone
          </label>
          <div className="phone-wrap">
            <div className="phone-prefix relative">
              <span className="phone-prefix__flag" aria-hidden="true">{currentFlag}</span>
              <span className="phone-prefix__code" id="phone-code-display">{selectedCountry}</span>
              <ChevronDown className="w-4 h-4 text-gray-500 stroke-[2.5]" />
              <select
                aria-label="Código do país"
                id="phone-country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <input
              id="telefone"
              required
              inputMode="numeric"
              placeholder="900 000 000"
              className="phone-input"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>

        {error && (
          <div id="cadastro-error" className="error-msg text-red-600 bg-red-50 p-3 rounded-lg text-sm font-semibold border border-red-200">
            {error}
          </div>
        )}

        <div className="security-notice">
          <ShieldCheck className="w-7 h-7 text-emerald-600 shrink-0 stroke-[2]" />
          <div>
            <p className="security-notice__title font-bold text-sm">Seus dados estão protegidos</p>
            <p className="security-notice__desc text-xs text-gray-500">Não compartilhamos suas informações com terceiros.</p>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full py-4 rounded-xl font-bold text-lg bg-[#f59e0b] hover:brightness-105 active:scale-98 transition shadow-md">
          Criar conta
        </button>
      </form>

      <ModalSuccess
        isOpen={isSuccessModalOpen}
        onFinish={handleModalFinished}
      />
    </main>
  );
};
