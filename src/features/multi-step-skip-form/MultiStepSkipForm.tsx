import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import styles from "./MultiStepSkipForm.module.scss";
import SkipSelector from "./components/skip-selector/SkipSelector";
import FakeStep from "./components/fake-step/FakeStep";
import FormProgressBar from "./components/form-progress-bar/FormProgressBar";

interface FormData {
  postcode: string;
  wasteType: string;
  skipSize: string;
  premitCheck: string;
  date: string;
  payment: string;
}

const MultiStepSkipForm: React.FC = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      postcode: "",
      wasteType: "",
      skipSize: "",
      premitCheck: "",
      date: "",
      payment: "",
    },
    mode: "onSubmit",
  });

  const { control, trigger, formState } = methods;

  const [currentStep, setCurrentStep] = useState(0);

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleChangeSelect = (index: number) => {
    setCurrentStep(index);
  };

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === 5;

  const handleNext = async () => {
    // const isValid = await trigger(); ** un comment for validation **
    // console.log(formState.errors);
    // if (!isValid) return;

    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const steps = [
    {
      label: "Postcode",
      fields: (
        <div>
          <Controller
            name="postcode"
            rules={{ required: true }}
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          {formState.errors.postcode && (
            <p style={{ color: "red" }}>postcode is required</p>
          )}
        </div>
      ),
    },
    {
      label: "Waste Type",
      fields: (
        <div>
          <Controller
            name="wasteType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {formState.errors.wasteType && (
            <p style={{ color: "red" }}>waste type is required</p>
          )}
        </div>
      ),
    },
    {
      label: "",
      fields: <SkipSelector onNext={handleNext} onBack={handleBack} />,
    },
    {
      label: "Premit Check",
      fields: (
        <div>
          <Controller
            name="premitCheck"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {formState.errors.premitCheck && (
            <p style={{ color: "red" }}>Premit Check is required</p>
          )}
        </div>
      ),
    },
    {
      label: "Choose Date",
      fields: (
        <div>
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {formState.errors.date && (
            <p style={{ color: "red" }}>date is required</p>
          )}
        </div>
      ),
    },
    {
      label: "payment",
      fields: (
        <div>
          <Controller
            name="payment"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {formState.errors.wasteType && (
            <p style={{ color: "red" }}>payment is required</p>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <FormProgressBar
        currentStep={currentStep}
        onStepClick={handleChangeSelect}
      />
      <FormProvider {...methods}>
        <div className={styles.container}>
          <FakeStep
            label={steps[currentStep].label}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            onNext={handleNext}
            onBack={handleBack}
          >
            {steps[currentStep].fields}
          </FakeStep>
        </div>
      </FormProvider>
    </>
  );
};

export default MultiStepSkipForm;
