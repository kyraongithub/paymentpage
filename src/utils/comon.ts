import { isBrowser } from "./isBrowser";

const PAYMENT_STEP = "USER_ PAYMENT_STEP";

export const setPaymentStepLocal = (step: string) => {
  if (isBrowser()) {
    localStorage.setItem(PAYMENT_STEP, step);
  }
};
export const getPaymentStepLocal = () => {
  if (isBrowser()) {
    return localStorage.getItem(PAYMENT_STEP);
  }
};
