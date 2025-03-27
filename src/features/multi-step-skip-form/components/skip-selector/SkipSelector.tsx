import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SkipCard from "./component/skip-card/SkipCard";
import { getSkips, selectSkip } from "../../services/skips/skipSlice";
import styles from "./SkipSelector.module.scss";
import { Skip } from "../../services/skips/skipModules";
import BottomBar from "./component/bottom-bar/BottomBar";
import { AppDispatch, RootState } from "../../store/store";

interface SkipSelectorProps {
  onNext: () => void;
  onBack: () => void;
}

const SkipSelector: React.FC<SkipSelectorProps> = ({onNext, onBack}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { skips, selectedSkip, loading, error } = useSelector(
    (state: RootState) => state.skipSelection
  );

  React.useEffect(() => {
    dispatch(getSkips());
  }, [dispatch]);

  const handleSelectSkip = (skip: Skip) => {
    dispatch(selectSkip(skip));
  };

  if (loading) {
    return <p>Loading skips...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <div className={styles.header}>
      <h2>Choose Your Skip Size</h2>
      <p>Select the skip size that best suits your needs</p>
    </div>
      <div className={styles["skip-list"]}>
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={handleSelectSkip}
          />
        ))}
      </div>

      <BottomBar onNext={onNext} onBack={onBack} />
    </>
  );
};

export default SkipSelector;
