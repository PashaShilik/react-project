import styles from "./commonInput.module.scss";
import deleteIco from "@/assets/svg/Delete.svg";
import { CSSProperties, useState } from "react";

type Props = {
  value: string;
  name?: string;
  label: string;
  onChangeFn?: any;
  style?: CSSProperties;
  maxlengthText?: number;
  type?: string;
  img?: any;
};

export const DefaultInput = function ( props: Props ) {
  const {value, name, label, onChangeFn, style, maxlengthText, type = 'text', img} = props
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChangeFn) {
      onChangeFn(event.target.value);
    }
  };

  const handleDeleteClick = () => {
    setInputValue("");
  };

  return (
    <div className={styles.default_input} style={style}>
      <div className={styles.default_input_label}>
        <input
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          className={styles.default_input_type_description}
          placeholder={label}
          type={type}
          maxLength={maxlengthText}
        />
        <label className={styles.label_content}>{label}</label>
        {inputValue && (
          <img alt="ico" src={deleteIco} className={styles.delete_value_ico} onClick={handleDeleteClick}/>
        )}
        {img && (
          <img alt="custom" src={img} className={styles.custom_image}/>
        )}
      </div>
    </div>
  );
}


