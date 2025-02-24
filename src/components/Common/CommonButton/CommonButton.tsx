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

export const CommonButton = function ( props : Props) {

  const {text = '', type, image, onClick, style, disabled, inForm, imgStyle} = props

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
