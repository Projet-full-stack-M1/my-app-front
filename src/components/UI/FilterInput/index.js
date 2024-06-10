"use client";
import { useState } from 'react';
import {  FaGlobe } from 'react-icons/fa';
import styles from './index.module.scss';

const FilterInput = ({ countries, onSelectCountry }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCountry = (country) => {
    onSelectCountry(country);
    setIsOpen(false);
  };

  return (
    <div className={styles.filterInput}>
      <FaGlobe className={styles.filterIcon} onClick={handleToggle} />
      {isOpen && (
        <div className={styles.countryList}>
          {countries.map((country) => (
            <div
              key={country}
              className={styles.countryItem}
              // onClick={() => handleSelectCountry(country)}
            >
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterInput;
