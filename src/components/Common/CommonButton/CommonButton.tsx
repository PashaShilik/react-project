import React from 'react';
import styles from './commonButton.module.scss';
import { dynamicStylesObject } from '../../../types/CommonButtonType/CommonButtonType';

type Props = {
    style?: React.CSSProperties;
    type?: string;
    imgStyle?: any; 
    onClick?: any;
    text?: string;
    image?: string;
    inForm?: boolean; 
    disabled?: boolean;
  };

function CommonButton({ text = '', type, image, onClick, style, disabled, inForm, imgStyle }: Props) {
    return (
      <button
        style={style || {}}
        disabled={disabled ? disabled : false}
        className={type && dynamicStylesObject[type]}
        onClick={onClick}
        type={inForm? "submit" : 'button'}
      >
        {image && <img className={styles.default_img} style={imgStyle} src={image} alt="img" />}
        {text}
      </button>
    )
  }

export default CommonButton
