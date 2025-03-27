import React from "react";
import styles from "./SkipCard.module.scss";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Skip } from "../../../../services/skips/skipModules";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(skip);
  };

  return (
    <div
      onClick={handleClick}
      className={
        isSelected
          ? `${styles["skip-card"]} ${styles["selected"]}`
          : styles["skip-card"]
      }
    >
      <div className={styles["skip-card__image-container"]}>
        <img
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          alt={`${skip.size} Yard Skip`}
        />
        <div className={styles["skip-card__image-container-badge"]}>
          {skip.size} Yards
        </div>
        {skip.forbidden && (
          <div className={styles["skip-card__image-container-badge-triangle"]}>
            <AlertTriangle width={16} />
            <span>Private Property Only</span>
          </div>
        )}
      </div>

      <div className={styles["skip-card__content"]}>
        <h3 className={styles["skip-card__content-title"]}>
          {skip.size} Yard Skip
        </h3>
        <p className={styles["skip-card__content-period"]}>
          14 day hire period
        </p>
        <p className={styles["skip-card__content-price"]}>
          £{skip.totalPrice} 
          <span className={styles["skip-card__content-price-text"]}>
          per week
          </span>
        </p>
        <button
          className={
            isSelected
              ? `${styles["skip-card__content-button"]} ${styles["is-selected"]}`
              : styles["skip-card__content-button"]
          }
          onClick={handleClick}
        >
          {isSelected ? (
            <span>Selected</span>
          ) : (
            <span>
              Select This Skip <ArrowRight width={16} />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
