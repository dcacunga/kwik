import React, { useState, useEffect } from 'react';
import { HomeView } from './views/HomeView';
import { CadastroView } from './views/CadastroView';
import { SaqueView } from './views/SaqueView';
import { AppView } from './views/AppView';
import { LevantamentoView } from './views/LevantamentoView';
import { SaqueSucessoView } from './views/SaqueSucessoView';
import { MulticaixaView } from './views/MulticaixaView';
import { VslView } from './views/VslView';
import { Bak1View } from './views/Bak1View';
import { DescontoView } from './views/DescontoView';
import { MenuDrawer } from './components/MenuDrawer';
import {
  TOTAL_VALUE,
  WithdrawalDetails,
  ValidationHistoryItem,
} from './utils/kwik';

const STORAGE_KEY = 'kwik_app_state_v1';

interface AppState {
  registered: boolean;
  name: string;
  phone: string;
  balance: number;
  couponStep: number;
  lastWithdrawal: number | null;
  withdrawalDetails: WithdrawalDetails | null;
  history: ValidationHistoryItem[];
}

const DEFAULT_STATE: AppState = {
  registered: false,
  name: '',
  phone: '',
  balance: 0,
  couponStep: 0,
  lastWithdrawal: null,
  withdrawalDetails: null,
  history: [],
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load state from localStorage or default
  const [state, setState] = useState<AppState>(() => {
    try {
      // Check query params for autostart
      const params = new URLSearchParams(window.location.search);
      const isAutostart = params.get('autostart') === '1';

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (isAutostart && !parsed.registered) {
          return {
            ...parsed,
            registered: true,
            name: 'Utilizador Demo',
            phone: '+244 923456789',
          };
        }
        return parsed;
      }

      if (isAutostart) {
        return {
          ...DEFAULT_STATE,
          registered: true,
          name: 'Utilizador Demo',
          phone: '+244 923456789',
        };
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_STATE;
  });

  // Save to localStorage on state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '') || '/';
      setCurrentRoute(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentRoute(path);
    window.scrollTo(0, 0);
  };

  const handleCadastroSuccess = (name: string, phone: string) => {
    setState((prev) => ({
      ...prev,
      registered: true,
      name,
      phone,
    }));
    navigate('/saque');
  };

  const handleSaqueSuccess = (details: WithdrawalDetails) => {
    setState((prev) => ({
      ...prev,
      withdrawalDetails: details,
      lastWithdrawal: prev.balance || TOTAL_VALUE,
    }));
    navigate('/app');
  };

  const handleValidateCoupon = (reward: number, code: string) => {
    setState((prev) => ({
      ...prev,
      balance: prev.balance + reward,
      couponStep: prev.couponStep + 1,
      history: [
        {
          id: Date.now().toString(),
          code,
          value: reward,
          date: new Date().toISOString(),
        },
        ...prev.history,
      ],
    }));
  };

  const handleRequestWithdrawal = () => {
    navigate('/levantamento');
  };

  const handleLevantamentoFinished = () => {
    setState((prev) => ({
      ...prev,
      lastWithdrawal: prev.balance || TOTAL_VALUE,
    }));
    navigate('/multicaixa');
  };

  const withdrawalAmount = state.lastWithdrawal || state.balance || TOTAL_VALUE;

  const renderCurrentView = () => {
    switch (currentRoute) {
      case '/':
        return (
          <HomeView
            registered={state.registered}
            onNavigate={navigate}
            onOpenMenu={() => setIsMenuOpen(true)}
          />
        );

      case '/cadastro':
        return (
          <CadastroView
            initialName={state.name}
            initialPhone={state.phone}
            onSuccess={handleCadastroSuccess}
            onBack={() => navigate('/')}
          />
        );

      case '/saque':
        return (
          <SaqueView
            balance={state.balance}
            userName={state.name}
            userPhone={state.phone}
            initialDetails={state.withdrawalDetails}
            onSuccess={handleSaqueSuccess}
            onBack={() => navigate('/')}
          />
        );

      case '/app':
        // If not registered, redirect to home
        if (!state.registered) {
          navigate('/');
          return null;
        }
        return (
          <AppView
            balance={state.balance}
            couponStep={state.couponStep}
            history={state.history}
            onValidateCoupon={handleValidateCoupon}
            onRequestWithdrawal={handleRequestWithdrawal}
          />
        );

      case '/levantamento':
        return <LevantamentoView onFinish={handleLevantamentoFinished} />;

      case '/saque-sucesso':
        return (
          <SaqueSucessoView
            amount={withdrawalAmount}
            onWatchVideo={() => navigate('/multicaixa')}
          />
        );

      case '/multicaixa':
        return (
          <MulticaixaView
            amount={withdrawalAmount}
            withdrawalDetails={state.withdrawalDetails}
            userName={state.name}
            userPhone={state.phone}
            onConfirm={() => navigate('/vsl')}
          />
        );

      case '/vsl':
        return <VslView />;

      case '/bak1':
        return <Bak1View />;

      case '/desconto':
        return <DescontoView amount={withdrawalAmount} />;

      default:
        return (
          <HomeView
            registered={state.registered}
            onNavigate={navigate}
            onOpenMenu={() => setIsMenuOpen(true)}
          />
        );
    }
  };

  const isMulticaixa = currentRoute === '/multicaixa';

  return (
    <div className={`min-h-screen text-[#1a1a2e] ${isMulticaixa ? 'bg-white' : 'bg-[#f7f5f0]'}`}>
      <div id="app" className={`relative mx-auto ${isMulticaixa ? 'max-w-[430px] h-[100dvh] overflow-hidden' : ''}`}>
        {renderCurrentView()}
      </div>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={navigate}
        registered={state.registered}
        balance={state.balance}
      />
    </div>
  );
}
