import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatKz,
  formatPhoneNumber,
  formatExpressAmount,
  getCouponInputState,
  validatePhone,
  validateWithdrawalAccount,
  validateCouponSubmission,
  COUPONS,
  TOTAL_VALUE,
  ValidationHistoryItem,
} from './kwik';

test('formatKz formats kwanza values with dots and comma', () => {
  assert.equal(formatKz(0), 'Kz 0,00');
  assert.equal(formatKz(3000), 'Kz 3.000,00');
  assert.equal(formatKz(150000), 'Kz 150.000,00');
});

test('TOTAL_VALUE sums up to 125000 Kz across 10 coupons', () => {
  assert.equal(COUPONS.length, 10);
  assert.equal(TOTAL_VALUE, 125000);
});

test('getCouponInputState tracks empty, partial, valid, and invalid states', () => {
  const code = '38154927';
  assert.equal(getCouponInputState('', code), 'default');
  assert.equal(getCouponInputState('381', code), 'partial');
  assert.equal(getCouponInputState('38154927', code), 'valid');
  assert.equal(getCouponInputState('999', code), 'invalid');
  assert.equal(getCouponInputState('38154928', code), 'invalid');
});

test('validatePhone validates 9-digit Angolan phone numbers', () => {
  assert.equal(validatePhone('923456789'), true);
  assert.equal(validatePhone('923 456 789'), true);
  assert.equal(validatePhone('123'), false);
  assert.equal(validatePhone(''), false);
});

test('validateWithdrawalAccount validates Multicaixa Express and IBAN correctly', () => {
  assert.deepEqual(validateWithdrawalAccount('express', '923456789'), { valid: true });
  assert.equal(validateWithdrawalAccount('express', '1234').valid, false);

  assert.deepEqual(validateWithdrawalAccount('iban', '000011112222333344445'), { valid: true });
  assert.equal(validateWithdrawalAccount('iban', '123456789').valid, false);
});

test('validateCouponSubmission handles exact match, used codes, out-of-order codes, and wrong codes', () => {
  const current = COUPONS[0]; // UNITEL, 38154927, 3000
  const history: ValidationHistoryItem[] = [];

  // Match
  const res1 = validateCouponSubmission('38154927', current, history);
  assert.equal(res1.success, true);
  assert.equal(res1.reward, 3000);

  // Out of order (step 2 code given at step 1)
  const res2 = validateCouponSubmission(COUPONS[1].code, current, history);
  assert.equal(res2.success, false);
  assert.match(res2.error || '', /Ainda não é a vez deste KWIK/);

  // Already used
  const historyWithCode = [{ id: '1', code: '38154927', value: 3000, date: '' }];
  const res3 = validateCouponSubmission('38154927', COUPONS[1], historyWithCode);
  assert.equal(res3.success, false);
  assert.match(res3.error || '', /já foi validado/);

  // Total mismatch
  const res4 = validateCouponSubmission('00000000', current, history);
  assert.equal(res4.success, false);
  assert.match(res4.error || '', /Código inválido/);
});

test('formatPhoneNumber formats into 3-digit groups', () => {
  assert.equal(formatPhoneNumber('928457885'), '928 457 885');
  assert.equal(formatPhoneNumber('+244 928457885'), '928 457 885');
  assert.equal(formatPhoneNumber('928 457 885'), '928 457 885');
});

test('formatExpressAmount formats currency matching receipt style', () => {
  assert.equal(formatExpressAmount(125000), '125.000 Kz');
  assert.equal(formatExpressAmount(3000), '3.000 Kz');
});

