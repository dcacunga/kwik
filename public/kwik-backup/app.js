/* ===== KWIK Clone — Full SPA Application ===== */

// ===== SVG Icons =====
const Icons = {
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  shieldCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  circleCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  partyPopper: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  landmark: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>`,
};

// ===== State Store =====
const store = {
  registered: false,
  name: '',
  phone: '',
  balance: 0,
  couponStep: 0,
  lastWithdrawal: null,
  withdrawalDetails: null,
  history: [],
};

// ===== Coupon Data — with images =====
const COUPONS = [
  { step: 1, brand: 'UNITEL', code: '38154927', value: 3000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.29-NobwC7hD4GeYuw7FYnIYrTM3iXeNIs.jpeg' },
  { step: 2, brand: 'KWIK', code: '62849317', value: 5000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.29%20%281%29-tRPJdiWdg2yFrHn5O2QAcmxKrhhX8g.jpeg' },
  { step: 3, brand: 'BANTUBET', code: '73528164', value: 7000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.29%20%282%29-NThD87gfv0AyVKsCNpCXHx4mLp7bsd.jpeg' },
  { step: 4, brand: 'CUCA', code: '16482753', value: 9000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.30-uHU4NpAkghyIM6AMzyfNjZXBH4wJVh.jpeg' },
  { step: 5, brand: 'PAY', code: '95318472', value: 11000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.31-jjSKyJCSj0YoCjWv12AiWfHlpr1fnm.jpeg' },
  { step: 6, brand: 'ZAP', code: '27594386', value: 13000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.31%20%281%29-p5XAv0WU6tTFqZw41Dsy2DZV214BvA.jpeg' },
  { step: 7, brand: 'EMIS', code: '84261935', value: 15000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.32-LxxmIR61LAptTplmVSmy228kJzC3IJ.jpeg' },
  { step: 8, brand: 'KERO', code: '31864572', value: 17000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.32%20%281%29-xysjtDbYcECLAGovVZDQth3DGVgvcJ.jpeg' },
  { step: 9, brand: 'SONANGOL', code: '48372615', value: 20000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.33-7h6pf0SkH7csQCeaBTNxGpvCeMnubJ.jpeg' },
  { step: 10, brand: 'AFRICELL', code: '57291846', value: 25000, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-28%20at%2002.00.33%20%281%29-xwjgr0eVEFE3Izr9hiGtuMe8favf7M.jpeg' },
];

const TOTAL_VALUE = COUPONS.reduce((s, c) => s + c.value, 0);

// ===== Utilities =====
function formatKz(value) {
  const fixed = value.toFixed(2);
  const dotIndex = fixed.lastIndexOf('.');
  const intPart = fixed.slice(0, dotIndex);
  const decPart = fixed.slice(dotIndex + 1);
  return `Kz ${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${decPart}`;
}

function kwikLogo(size = 'md') {
  return `
    <div class="kwik-logo">
      <span class="kwik-logo__word kwik-logo__word--${size}" aria-label="KWIK">
        <span>KW</span><span class="kwik-logo__i">I<span class="kwik-logo__tri kwik-logo__tri--${size}" aria-hidden="true"></span></span><span>K</span>
      </span>
      <span class="kwik-logo__sub kwik-logo__sub--${size}">kwanza instantâneo</span>
    </div>
  `;
}

function headerBar() {
  return `
    <header class="header-bar">
      ${kwikLogo('sm')}
      <div class="balance-badge">
        <div class="balance-badge__label">Saldo</div>
        <div class="balance-badge__value">${formatKz(store.balance)}</div>
      </div>
    </header>
  `;
}

// ===== Router =====
function navigate(path) {
  window.location.hash = path;
}

function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

// ===== Pages =====

// --- Homepage ---
function renderHome() {
  const isRegistered = store.registered;
  return `
    <main class="page-main animate-fade-in">
      <header class="header-curved">
        <div class="flex items-center justify-between">
          ${kwikLogo('md')}
          <button type="button" aria-label="Abrir menu" class="menu-btn">
            ${Icons.menu}
          </button>
        </div>
      </header>
      <h1 class="heading-welcome">Bem vindo!</h1>
      <p class="subtitle-welcome">Que tal fazermos uma renda extra juntos? Chega mais!</p>
      <section class="step-cards">
        <button type="button" class="step-card step-card--active" id="btn-step1">
          <span class="step-circle step-circle--active">1</span>
          <span class="flex-1">
            <span class="step-title step-title--active">${isRegistered ? 'Cadastro concluído' : 'Faça seu cadastro'}</span>
            <span class="step-desc step-desc--active">É rápido e garante a segurança dos seus dados.</span>
          </span>
          <span class="step-chevron">${Icons.chevronRight}</span>
        </button>
        <button type="button" class="step-card ${isRegistered ? 'step-card--active' : 'step-card--disabled'}" id="btn-step2" ${!isRegistered ? 'disabled' : ''}>
          <span class="step-circle ${isRegistered ? 'step-circle--active' : 'step-circle--disabled'}">2</span>
          <span class="flex-1">
            <span class="step-title ${isRegistered ? 'step-title--active' : 'step-title--disabled'}">Realize seu saque</span>
            <span class="step-desc ${isRegistered ? 'step-desc--active' : 'step-desc--disabled'}">Assim que alcançar o valor mínimo.</span>
          </span>
          ${isRegistered ? `<span class="step-chevron">${Icons.chevronRight}</span>` : ''}
        </button>
      </section>
    </main>
  `;
}

function bindHome() {
  document.getElementById('btn-step1')?.addEventListener('click', () => {
    navigate(store.registered ? '/app' : '/cadastro');
  });
  document.getElementById('btn-step2')?.addEventListener('click', () => {
    if (store.registered) navigate('/app');
  });
}

// --- Cadastro ---
function renderCadastro() {
  const steps = ['Dados', 'Verificação', 'Segurança', 'Concluir'];
  return `
    <main class="page-main page-padded animate-fade-in">
      <div class="relative flex items-center justify-center">
        <button type="button" aria-label="Voltar" class="back-btn" id="btn-back-cadastro">
          ${Icons.arrowLeft}
        </button>
        ${kwikLogo('md')}
      </div>
      <ol class="stepper">
        ${steps.map((label, i) => `
          <li class="stepper__item">
            <div class="stepper__track">
              <span class="stepper__line ${i === 0 ? 'stepper__line--transparent' : 'stepper__line--border'}"></span>
              <span class="stepper__dot ${i === 0 ? 'stepper__dot--active' : 'stepper__dot--inactive'}">${i + 1}</span>
              <span class="stepper__line ${i === steps.length - 1 ? 'stepper__line--transparent' : 'stepper__line--border'}"></span>
            </div>
            <span class="stepper__label ${i === 0 ? 'stepper__label--active' : 'stepper__label--inactive'}">${label}</span>
          </li>
        `).join('')}
      </ol>
      <h1 class="heading-page mt-8">Crie sua conta</h1>
      <p class="subtitle-page">É rápido, fácil e seguro.</p>
      <div class="divider-bar"></div>
      <form id="cadastro-form" class="mt-8 space-y-6">
        <div>
          <label for="nome" class="form-label">Nome completo</label>
          <div class="form-input-wrap">
            ${Icons.user}
            <input id="nome" required placeholder="Seu nome completo" class="form-input" value="" />
          </div>
        </div>
        <div>
          <label for="telefone" class="form-label">Telefone</label>
          <div class="phone-wrap">
            <div class="phone-prefix">
              <span class="phone-prefix__flag" aria-hidden="true">🇦🇴</span>
              <span class="phone-prefix__code" id="phone-code-display">+244</span>
              <span class="phone-prefix__chevron">${Icons.chevronDown}</span>
              <select aria-label="Código do país" id="phone-country">
                <option value="+244" selected>Angola +244</option>
                <option value="+238">Cabo Verde +238</option>
                <option value="+258">Moçambique +258</option>
                <option value="+351">Portugal +351</option>
                <option value="+55">Brasil +55</option>
              </select>
            </div>
            <input id="telefone" required inputmode="numeric" placeholder="900 000 000" class="phone-input" value="" />
          </div>
        </div>
        <div id="cadastro-error" class="error-msg hidden"></div>
        <div class="security-notice">
          ${Icons.shieldCheck}
          <div>
            <p class="security-notice__title">Seus dados estão protegidos</p>
            <p class="security-notice__desc">Não compartilhamos suas informações com terceiros.</p>
          </div>
        </div>
        <button type="submit" class="btn-primary">Criar conta</button>
      </form>
    </main>
  `;
}

function bindCadastro() {
  document.getElementById('btn-back-cadastro')?.addEventListener('click', () => navigate('/'));

  const countrySelect = document.getElementById('phone-country');
  const codeDisplay = document.getElementById('phone-code-display');
  countrySelect?.addEventListener('change', () => {
    codeDisplay.textContent = countrySelect.value;
  });

  const phoneInput = document.getElementById('telefone');
  phoneInput?.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 9);
  });

  document.getElementById('cadastro-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const errorEl = document.getElementById('cadastro-error');

    if (!nome || !telefone) {
      errorEl.textContent = 'Preencha seu nome e telefone.';
      errorEl.classList.remove('hidden');
      return;
    }

    errorEl.classList.add('hidden');
    const code = document.getElementById('phone-country').value;
    store.registered = true;
    store.name = nome;
    store.phone = `${code} ${telefone}`;

    showCadastroSuccess();
  });
}

function showCadastroSuccess() {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon modal-icon--success">
        ${Icons.check}
      </div>
      <h2 class="modal-title">CONTA CRIADA</h2>
      <p class="modal-text">Parabéns! Sua conta foi criada com sucesso!</p>
      <p class="modal-text-sm">Seja muito bem-vindo à KWIK.</p>
      <p class="modal-text-sm">Você já está dentro da nossa 1ª Campanha de Cupons de Desconto. 🚀</p>
      <p class="modal-text-orange">Seu próximo passo: encontrar seu primeiro KWIK!</p>
      <div class="modal-progress-track">
        <div class="modal-progress-bar"></div>
      </div>
    </div>
  `;
  overlay.classList.remove('hidden');

  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.innerHTML = '';
    navigate('/saque');
  }, 6000);
}

// --- Saque (Withdrawal Method) ---
function renderSaque() {
  return `
    <div class="page-main animate-fade-in">
      ${headerBar()}
      <main class="page-padded">
        <button class="btn-ghost" id="btn-back-saque" type="button">
          ${Icons.arrowLeft} Voltar
        </button>
        <h1 class="heading-page mt-4">Método de retirada</h1>
        <div class="divider-bar"></div>
        <form id="saque-form" class="mt-6 space-y-5">
          <div class="grid grid-cols-2 gap-3">
            <button type="button" class="method-btn method-btn--active" id="method-express" aria-pressed="true">
              <span style="font-size:1.5rem;">📱</span>
              Multicaixa Express
            </button>
            <button type="button" class="method-btn method-btn--inactive" id="method-iban" aria-pressed="false">
              ${Icons.landmark}
              IBAN
            </button>
          </div>
          <div>
            <label for="titular" class="form-label">Nome do titular</label>
            <div class="form-input-wrap">
              ${Icons.user}
              <input id="titular" placeholder="Nome completo" class="form-input" value="${store.name || ''}" />
            </div>
          </div>
          <div id="account-field">
            <label for="conta" class="form-label" id="conta-label">Número Multicaixa Express</label>
            <div class="form-input-wrap">
              ${Icons.smartphone}
              <input id="conta" inputmode="numeric" placeholder="900 000 000" class="form-input" value="" />
            </div>
          </div>
          <div id="saque-error" class="error-msg hidden"></div>
          <button type="submit" class="btn-primary">Continuar</button>
        </form>
      </main>
    </div>
  `;
}

function bindSaque() {
  let method = 'express';

  document.getElementById('btn-back-saque')?.addEventListener('click', () => navigate('/'));

  const expressBtn = document.getElementById('method-express');
  const ibanBtn = document.getElementById('method-iban');
  const contaLabel = document.getElementById('conta-label');
  const contaInput = document.getElementById('conta');

  expressBtn?.addEventListener('click', () => {
    method = 'express';
    expressBtn.className = 'method-btn method-btn--active';
    expressBtn.setAttribute('aria-pressed', 'true');
    ibanBtn.className = 'method-btn method-btn--inactive';
    ibanBtn.setAttribute('aria-pressed', 'false');
    contaLabel.textContent = 'Número Multicaixa Express';
    contaInput.placeholder = '900 000 000';
    contaInput.value = '';
  });

  ibanBtn?.addEventListener('click', () => {
    method = 'iban';
    ibanBtn.className = 'method-btn method-btn--active';
    ibanBtn.setAttribute('aria-pressed', 'true');
    expressBtn.className = 'method-btn method-btn--inactive';
    expressBtn.setAttribute('aria-pressed', 'false');
    contaLabel.textContent = 'IBAN (após AO06)';
    contaInput.placeholder = '000000000000000000000';
    contaInput.value = '';
  });

  contaInput?.addEventListener('input', () => {
    const max = method === 'express' ? 9 : 21;
    contaInput.value = contaInput.value.replace(/\D/g, '').slice(0, max);
  });

  document.getElementById('saque-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const holder = document.getElementById('titular').value.trim();
    const account = contaInput.value.trim();
    const errorEl = document.getElementById('saque-error');

    if (!holder) {
      errorEl.textContent = 'Indique o nome do titular.';
      errorEl.classList.remove('hidden');
      return;
    }

    if (method === 'express' && !/^\d{9}$/.test(account)) {
      errorEl.textContent = 'Indique um número Multicaixa Express válido (9 dígitos).';
      errorEl.classList.remove('hidden');
      return;
    }

    if (method === 'iban' && !/^\d{21}$/.test(account)) {
      errorEl.textContent = 'Indique um IBAN válido (21 dígitos após AO06).';
      errorEl.classList.remove('hidden');
      return;
    }

    errorEl.classList.add('hidden');
    store.withdrawalDetails = { method, holder, account };
    store.lastWithdrawal = store.balance || TOTAL_VALUE;
    navigate('/app');
  });
}

// --- App (Coupon Validation) ---
function renderApp() {
  if (!store.registered) {
    navigate('/');
    return '';
  }

  const currentStep = Math.min(store.couponStep, COUPONS.length);
  const allDone = currentStep >= COUPONS.length;
  const coupon = allDone ? null : COUPONS[currentStep];

  // Step counter dots
  function stepDots() {
    return `
      <div class="step-dots">
        ${COUPONS.map((c, i) => `
          <div class="step-dot ${i < currentStep ? 'step-dot--done' : i === currentStep ? 'step-dot--current' : 'step-dot--pending'}"></div>
        `).join('')}
      </div>
    `;
  }

  let mainContent = '';
  if (coupon) {
    mainContent = `
      ${stepDots()}
      <div class="coupon-step-label">Etapa ${coupon.step} de ${COUPONS.length}</div>
      <img
        src="${coupon.image}"
        alt="Cupom ${coupon.brand} — código ${coupon.code}"
        class="coupon-img"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      />
      <div class="coupon-fallback" style="display:none;">
        <div class="coupon-fallback__inner">
          <p class="coupon-fallback__label">Cupom de desconto</p>
          <h3 class="coupon-fallback__brand">${coupon.brand}</h3>
          <div class="coupon-fallback__code">${coupon.code}</div>
          <p class="coupon-fallback__value">Valor: <strong>${formatKz(coupon.value)}</strong></p>
        </div>
      </div>
      <form id="validate-form" class="mt-6">
        <label class="coupon-code-label">Código KWIK</label>
        <input id="coupon-input"
          inputmode="numeric"
          placeholder="Digite os 8 dígitos do KWIK"
          class="coupon-code-input coupon-code-input--default"
          value=""
          maxlength="8"
        />
        <button type="submit" class="btn-validate">Validar KWIK</button>
      </form>
    `;
  } else {
    mainContent = `
      <section class="final-card">
        <p class="final-card__label">Saldo final</p>
        <p class="final-card__value">${formatKz(TOTAL_VALUE)}</p>
        <p class="final-card__desc">Você validou os ${COUPONS.length} cupons da campanha KWIK.</p>
        <button type="button" class="final-card__btn" id="btn-levantamento">Levantar saldo</button>
      </section>
    `;
  }

  return `
    <div class="page-main animate-fade-in">
      ${headerBar()}
      <main style="padding: 1.25rem 1rem;">
        <div class="app-status ${allDone ? 'app-status--orange' : 'app-status--green'}">
          ${allDone ? Icons.partyPopper : Icons.circleCheck}
          <span class="app-status__text">${allDone ? 'Todos os KWIK validados!' : 'Novo KWIK localizado!'}</span>
        </div>
        <div class="mt-6"></div>
        ${mainContent}
        <div id="app-feedback" class="app-feedback hidden"></div>
      </main>
    </div>
  `;
}

function bindApp() {
  const input = document.getElementById('coupon-input');
  const currentStep = Math.min(store.couponStep, COUPONS.length);
  const coupon = currentStep < COUPONS.length ? COUPONS[currentStep] : null;

  if (input && coupon) {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '').slice(0, 8);
      const val = input.value;
      const startsCorrect = coupon.code.startsWith(val);
      const isComplete = val.length === 8 && startsCorrect;

      input.className = 'coupon-code-input';
      if (val.length === 0) {
        input.classList.add('coupon-code-input--default');
      } else if (isComplete) {
        input.classList.add('coupon-code-input--valid');
      } else if (startsCorrect) {
        input.classList.add('coupon-code-input--partial');
      } else {
        input.classList.add('coupon-code-input--invalid');
      }
    });
  }

  document.getElementById('validate-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!coupon) return;

    const val = input.value.trim();
    const feedbackEl = document.getElementById('app-feedback');

    const alreadyUsed = store.history.some(h => h.code === val);
    const matchOther = COUPONS.find(c => c.code === val);

    if (val !== coupon.code) {
      let msg = 'Código inválido. Confira os 8 dígitos do KWIK.';
      if (alreadyUsed) msg = 'Este KWIK já foi validado. Use o código do cupom atual.';
      else if (matchOther) msg = `Ainda não é a vez deste KWIK. Valide primeiro o cupom ${coupon.step}.`;

      feedbackEl.textContent = msg;
      feedbackEl.classList.remove('hidden');
      return;
    }

    // Success!
    const newBalance = store.balance + coupon.value;
    store.balance = newBalance;
    store.couponStep = currentStep + 1;
    store.history.unshift({
      id: Date.now().toString(),
      code: coupon.code,
      value: coupon.value,
      date: new Date().toISOString()
    });

    feedbackEl.classList.add('hidden');
    showPrizeModal(coupon.value);
  });

  document.getElementById('btn-levantamento')?.addEventListener('click', () => {
    navigate('/levantamento');
  });
}

function showPrizeModal(value) {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="prize-modal-overlay" id="prize-overlay-bg">
      <div class="prize-modal" id="prize-modal-card">
        <button class="prize-close" id="prize-close-btn" aria-label="Fechar">
          ${Icons.x}
        </button>
        <div class="modal-icon modal-icon--party">
          ${Icons.partyPopper}
        </div>
        <p class="prize-label">Parabéns!</p>
        <h2 class="prize-heading">Você ganhou!</h2>
        <p class="prize-value">+${formatKz(value)}</p>
        <button class="prize-continue" id="prize-continue-btn">Continuar</button>
      </div>
    </div>
  `;
  overlay.classList.remove('hidden');
  overlay.style.display = 'block';

  function closePrize() {
    overlay.classList.add('hidden');
    overlay.style.display = '';
    overlay.innerHTML = '';
    renderPage();
  }

  document.getElementById('prize-close-btn')?.addEventListener('click', closePrize);
  document.getElementById('prize-continue-btn')?.addEventListener('click', closePrize);
  document.getElementById('prize-overlay-bg')?.addEventListener('click', (e) => {
    if (e.target.id === 'prize-overlay-bg') closePrize();
  });

  setTimeout(closePrize, 3500);
}

// --- Levantamento (Loading) ---
function renderLevantamento() {
  return `
    <div class="loading-page animate-fade-in">
      <div class="spinner-wrap">
        <div class="spinner-outer"></div>
        <div class="spinner-inner"></div>
      </div>
      <p class="loading-title">Gerando factura</p>
      <p class="loading-subtitle">Aguarde um momento…</p>
    </div>
  `;
}

function bindLevantamento() {
  setTimeout(() => {
    store.lastWithdrawal = store.balance;
    navigate('/saque-sucesso');
  }, 4000);
}

// --- Saque Sucesso (NEW PAGE) ---
function renderSaqueSucesso() {
  const amount = store.lastWithdrawal || store.balance || TOTAL_VALUE;

  return `
    <div class="sucesso-page animate-fade-in">
      <div class="sucesso-check">
        ${Icons.check}
      </div>
      <h1 class="sucesso-title">Parabéns!</h1>
      <p class="sucesso-text">
        Seu cadastro foi realizado!<br>
        Você acaba de ganhar
        <strong>${formatKz(amount)}!</strong>
      </p>
      <p class="sucesso-subtext">
        Assista um curto vídeo com um passo a passo explicativo para você aprender a realizar o seu primeiro <strong>SAQUE</strong>.
      </p>
      <button class="sucesso-btn" id="btn-assistir-video">
        <span class="sucesso-btn__inner">
          <span class="sucesso-btn__play">
            ${Icons.play}
          </span>
          <span class="sucesso-btn__label">Assistir Vídeo</span>
        </span>
        ${Icons.arrowRight}
      </button>
    </div>
  `;
}

function bindSaqueSucesso() {
  document.getElementById('btn-assistir-video')?.addEventListener('click', () => {
    navigate('/multicaixa');
  });
}

// --- Multicaixa confirmation page ---
function renderMulticaixa() {
  const withdrawal = store.withdrawalDetails || {};
  const holder = withdrawal.holder || store.name || 'Titular';
  const account = withdrawal.account || '—';
  const amount = formatKz(store.lastWithdrawal || store.balance || TOTAL_VALUE);

  return `
  <div class="animate-fade-in" style="min-height:100vh;background:#f7f8fa;display:flex;justify-content:center;align-items:flex-start;">
    <main style="width:min(100%,860px);min-height:100vh;background:#f7f8fa;display:flex;flex-direction:column;align-items:center;color:#111827;font-family:Arial,sans-serif;">
      <header style="width:100%;background:#f97316;color:#fff;padding:28px 24px 24px;text-align:center;font-size:clamp(28px,6vw,58px);font-weight:800;letter-spacing:1px;">MULTICAIXA</header>
      <section style="width:100%;padding:clamp(52px,10vw,120px) 24px 28px;text-align:center;">
        <div style="font-size:clamp(28px,5vw,54px);font-weight:800;margin-bottom:26px;">${amount}</div>
        <div style="color:#f97316;font-size:clamp(22px,4vw,38px);margin-bottom:44px;">MONTANTE</div>
        <div style="font-size:clamp(24px,4vw,42px);font-weight:500;margin-bottom:24px;word-break:break-word;">${account}</div>
        <div style="color:#f97316;font-size:clamp(22px,4vw,38px);margin-bottom:44px;">DESTINATÁRIO</div>
        <div style="font-size:clamp(24px,4vw,42px);font-weight:500;word-break:break-word;">${holder}</div>
      </section>
      <section style="width:100%;border-top:1px solid #d9dde3;border-bottom:1px solid #d9dde3;padding:28px 12%;font-size:clamp(18px,3vw,30px);">
        <div style="display:flex;justify-content:space-between;gap:24px;margin-bottom:28px;"><span style="color:#6b7280;">Custo</span><span style="color:#6b7280;">Isento</span></div>
        <div style="display:flex;justify-content:space-between;gap:24px;font-weight:800;"><span>Total</span><span>${amount}</span></div>
      </section>
      <button id="btn-continuar-vsl" type="button" style="margin:80px 0 32px;width:min(80%,340px);border:0;border-radius:12px;background:#f97316;color:#fff;font-size:20px;font-weight:800;padding:16px 24px;cursor:pointer;box-shadow:0 8px 24px rgba(249,115,22,.25);">Confirmar</button>
    </main>
  </div>
  `;
}

function bindMulticaixa() {
  document.getElementById('btn-continuar-vsl')?.addEventListener('click', () => navigate('/vsl'));
}

// --- VSL / Video Page (NEW PAGE) ---
function renderVsl() {
  return `
    <div class="vsl-page animate-fade-in">
      <div style="position:fixed;inset:0;background:var(--card);z-index:-1;"></div>
      <h1 class="vsl-title">DESBLOQUEIO DE SALDO</h1>
      <p class="vsl-subtitle">
        Assista o vídeo informativo até o final para processar seu saque com segurança imediata
      </p>
      <div class="vsl-video-wrap">
  <vturb-smartplayer id="vid-6ae506f2d653f6988a102713" style="display:block;margin:0 auto;width:100%;max-width:400px;">
  <div class="vturb-player-placeholder" style="position:relative;width:100%;padding:177.77777777777777% 0 0;z-index:0;background-color:#000;"></div>
  </vturb-smartplayer>
  </div>
      <div id="vsl-cta" style="display:none;">
        <a href="https://mentora.ao/produto/4218b62b-4548-4fc1-9ce7-acb2e635358a" class="vsl-cta-btn" target="_blank" rel="noopener noreferrer">
          LIBERAR AGORA
          ${Icons.arrowRight}
        </a>
      </div>
      <p id="vsl-countdown" style="margin:16px 0 28px;color:var(--muted);font-size:14px;text-align:center;">O botão será liberado em 03:00</p>
    </div>
  `;
}

  function bindVsl() {
  if (!document.querySelector('script[data-vturb-vsl]')) {
  const playerScript = document.createElement('script');
  playerScript.dataset.vturbVsl = 'true';
  playerScript.src = 'https://scripts.converteai.net/55369419-630b-4afd-8556-faecd90bf85b/players/6ae506f2d653f6988a102713/v4/player.js';
  playerScript.async = true;
  document.head.appendChild(playerScript);
  }
  const cta = document.getElementById('vsl-cta');
  const countdown = document.getElementById('vsl-countdown');
  let remaining = 180;
  const timer = window.setInterval(() => {
    remaining -= 1;
    const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    if (countdown) countdown.textContent = remaining > 0 ? `O botão será liberado em ${minutes}:${seconds}` : 'O botão está liberado';
    if (remaining <= 0) {
      window.clearInterval(timer);
      if (cta) cta.style.display = 'block';
    }
  }, 1000);
}

// --- Bak1 / Oferta Especial 85% (MISSING PAGE) ---
function renderBak1() {
  return `
    <div class="bak-page animate-fade-in">
      <div style="position:fixed;inset:0;background:var(--card);z-index:-1;"></div>

      <h1 class="bak-heading">
        ⏰ <span class="bak-heading__orange">ESPERA!</span>
      </h1>

      <div class="bak-circle">
        <span class="bak-percent">85%</span>
        <span class="bak-percent-label">desconto</span>
      </div>

      <p class="bak-title">
        Ganhe <span class="bak-orange">85% de desconto</span> agora mesmo na
        <span class="bak-orange"> taxa de segurança!</span>
      </p>

      <p class="bak-desc">
        Não feche esta página. Use o cupom exclusivo abaixo e finalize sua compra com um super desconto de 85% na taxa de segurança.
      </p>

      <div class="bak-coupon-box">
        <p class="bak-coupon-label">Seu cupom de desconto:</p>
        <p class="bak-coupon-code">SEGURANCA85</p>
        <p class="bak-coupon-valid">Válido por tempo limitado!</p>
      </div>

      <a href="https://pay.bicaju.com/3064c3d2-383a-4935-8c46-f368c81ee2e3" class="bak-cta-btn">
        SIM, QUERO MEU DESCONTO DE 85% 🎁
      </a>
    </div>
  `;
}

function bindBak1() {
  // No blockers
}

// --- Desconto / Discount Page (NEW PAGE) ---
function renderDesconto() {
  const amount = store.lastWithdrawal || store.balance || TOTAL_VALUE;
  return `
    <div class="desconto-page animate-fade-in">
      <div style="position:fixed;inset:0;background:var(--card);z-index:-1;"></div>
      <div class="desconto-header">
        ${kwikLogo('md')}
      </div>

      <div class="desconto-card">
        <div class="desconto-icon">
          ${Icons.partyPopper}
        </div>
        <h1 class="desconto-title">Saldo Disponível</h1>
        <p class="desconto-amount">${formatKz(amount)}</p>
        <div class="desconto-divider"></div>
        <p class="desconto-text">
          Para liberar o seu saque, é necessário concluir a verificação de identidade e ativar a sua conta Premium.
        </p>
        <p class="desconto-text-sm">
          Este é um passo obrigatório de segurança para proteger os seus fundos.
        </p>
      </div>

      <a href="https://pay.bicaju.com/3064c3d2-383a-4935-8c46-f368c81ee2e3" class="desconto-btn">
        ATIVAR CONTA PREMIUM
        ${Icons.arrowRight}
      </a>

      <p class="desconto-footer">
        🔒 Pagamento seguro · Dados protegidos
      </p>
    </div>
  `;
}

function bindDesconto() {
  // No blockers
}

// ===== Router & Rendering =====
function renderPage() {
  const route = getCurrentRoute();
  const app = document.getElementById('app');

  let html = '';
  let bind = null;

  switch (route) {
    case '/':
      html = renderHome();
      bind = bindHome;
      break;
    case '/cadastro':
      html = renderCadastro();
      bind = bindCadastro;
      break;
    case '/saque':
      html = renderSaque();
      bind = bindSaque;
      break;
    case '/app':
      html = renderApp();
      bind = bindApp;
      break;
    case '/levantamento':
      html = renderLevantamento();
      bind = bindLevantamento;
      break;
    case '/saque-sucesso':
      html = renderSaqueSucesso();
      bind = bindSaqueSucesso;
      break;
    case '/multicaixa':
      html = renderMulticaixa();
      bind = bindMulticaixa;
      break;
    case '/vsl':
      html = renderVsl();
      bind = bindVsl;
      break;
    case '/desconto':
      html = renderDesconto();
      bind = bindDesconto;
      break;
    default:
      html = renderHome();
      bind = bindHome;
      break;
  }

  app.innerHTML = html;
  if (bind) bind();
  window.scrollTo(0, 0);
}

// Listen for hash changes
window.addEventListener('hashchange', renderPage);

// Initial render
document.addEventListener('DOMContentLoaded', renderPage);

// Make navigate available globally for inline onclick handlers
window.navigate = navigate;
