"use client";
import styles from "./index.module.scss";


const Index = ({
    value,
    type,
    handleChange,
    name,
    label
}) => {
    return (
        <div className={styles.wrapper}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
            />
        </div>
    );
}

export default Index;
