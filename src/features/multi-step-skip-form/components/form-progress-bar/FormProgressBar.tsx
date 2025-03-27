import React from 'react';
import {
  MapPin,
  Trash2,
  ShieldCheck,
  Calendar,
  CreditCard,
  TruckIcon
} from 'lucide-react';

import styles from './formProgressBar.module.scss';

interface Step {
  icon: React.FC<{ size: number; className?: string }>;
  label: string;
}

interface formProgressBarProps {
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const stepsData: Step[] = [
  { icon: MapPin, label: 'Postcode' },
  { icon: Trash2, label: 'Waste Type' },
  { icon: TruckIcon, label: 'Select Skip' },
  { icon: ShieldCheck, label: 'Permit Check' },
  { icon: Calendar, label: 'Choose Date' },
  { icon: CreditCard, label: 'Payment' },
];

const FormProgressBar: React.FC<formProgressBarProps> = ({
  currentStep,
  onStepClick
}) => {
  return (
    <div className={styles.formProgressBar}>
      <div className={styles.stepsSection}>
        {stepsData.map((step, index) => {
          const isActive = index <= currentStep;
          const isNextStepActive = index + 1 <= currentStep;

          return (
            <React.Fragment key={step.label}>
              <div
                className={`${styles.step} ${isActive ? styles.active : ''}`}
                onClick={() => {
                  if (isActive) {
                    onStepClick(index);
                  }
                }}
                style={{ cursor: isActive ? 'pointer' : 'not-allowed' }}
              >
                <step.icon size={20} className={styles.icon} />
                <span className={styles.label}>{step.label}</span>
              </div>

              {index < stepsData.length - 1 && (
                <div
                  className={`${styles.line} ${
                    isActive && isNextStepActive ? styles.lineActive : ''
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FormProgressBar;
