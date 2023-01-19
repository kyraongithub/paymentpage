import { ReactNode, createContext, useEffect, useState } from "react";
import { getPaymentStepLocal, setPaymentStepLocal } from "../utils/comon";

export const GlobalContext = createContext<any>({
  paymentStep: 1,
  setPaymentStep: () => {},
});

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider = (props: Props) => {
  const [paymentStep, setPaymentStep] = useState<string>("1");

  useEffect(() => {
    const currentStep = getPaymentStepLocal();
    if (typeof currentStep === "string") {
      setPaymentStep(currentStep);
    } else {
      setPaymentStepLocal("1");
    }
  }, []);

  useEffect(() => {
    setPaymentStepLocal(paymentStep);
  }, [paymentStep]);

  return (
    <GlobalContext.Provider
      value={{
        paymentStep,
        setPaymentStep,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
