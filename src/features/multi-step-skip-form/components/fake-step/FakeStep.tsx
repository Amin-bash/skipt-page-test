import React from "react";

interface FakeStepProps {
  label: string;
  isFirstStep: boolean;
  isLastStep: boolean;
  onNext: () => void;
  onBack: () => void;
  children?: React.ReactNode;
}

const FakeStep: React.FC<FakeStepProps> = ({
  label,
  isFirstStep,
  isLastStep,
  onNext,
  onBack,
  children,
}) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      {label && <h2>{label}</h2>}

      <div>{children}</div>

      {!!label && (
        <div style={{ marginTop: "2rem" }}>
          {!isFirstStep && (
            <button
              type="button"
              onClick={onBack}
              style={{ marginRight: "1rem" }}
            >
              Back
            </button>
          )}

          <button type="button" onClick={onNext}>
            {isLastStep ? "Finish" : "Continue"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FakeStep;
