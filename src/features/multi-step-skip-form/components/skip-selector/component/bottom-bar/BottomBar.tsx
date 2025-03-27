import React from 'react';
import { useSelector } from 'react-redux';
import styles from './BottomBar.module.scss';
import { ArrowRight } from 'lucide-react';
import { RootState } from '../../../../store/store';

interface BottomBarProps {
    onNext: () => void;
    onBack: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ onNext, onBack }) => {
  const selectedSkip = useSelector((state: RootState) => state.skipSelection.selectedSkip);

  if (!selectedSkip) {
    return null;
  }

  return (
    <div className={styles.bottomBarContainer}>
      <div className={styles.bottomBar}>
        <div className={styles.skipInfo}>
          <span>{selectedSkip.size}</span>
          <span className={styles.skipPrice}>£</span>
          <span>{selectedSkip.hirePeriodDays} day hire</span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.backBtn} onClick={onBack}>
            Back
          </button>
          <button className={styles.continueBtn} onClick={onNext}>
            <span>Continue</span><ArrowRight width={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
