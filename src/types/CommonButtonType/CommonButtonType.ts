import styles from '../../components/Common/CommonButton/commonButton.module.scss';

type InlineStyle = { [key: string]: any };

type ButtonType = 'default_bg' | 'default_bg_none' | 'default_bg_img' | 'default_bg_none_img';

export type DefaultButtonProps = {
    text?: string;
    type: ButtonType;
    image?: string;
    onClick?: Function;
    styles?: InlineStyle;
};

export const dynamicStylesObject = {
    default_bg: styles.default_bg,
    default_bg_none: styles.default_bg_none,
    default_bg_img: styles.default_bg_img,
    default_bg_none_img: styles.default_bg_none_img
} as InlineStyle