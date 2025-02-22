import React from 'react';
import styles from './cardListBlock.module.scss';

import icoCommonButton from '../../../../assets/svg/icoButton.svg'
import searchIco from '../../../../assets/svg/search.png'

import CommonButton from '../../../../components/Common/CommonButton/CommonButton';
import CommonSelector from '../../../../components/Common/CommonSelector/CommonSelector';
import DefaultInput from '../../../../components/Common/CommonInput/CommonInput';

function CardListBlock() {

  const [activeItem, setActiveItem] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  const data = [
    {id:0, title:'Вариант 1'},
    {id:1, title:'Вариант 2'},
    {id:2, title:'Вариант 3'},
    {id:3, title:'Вариант 4'},
  ];

  const handleChange = (value: string) => {
      setSearchValue(value);
  };


  return (
    <div className={styles.cardListBlock}>
      <div className={styles.cardListBlock__content}>
        Кнопки
        <CommonButton text='Заказать' type='default_bg' onClick={() => console.log(1)}/>
        <CommonButton text='Заказать' type='default_bg_none' onClick={() => console.log(2)}/>
        <CommonButton text='Заказать' type='default_bg_img' image={icoCommonButton} onClick={() => console.log(3)}/>
        <CommonButton text='Заказать' type='default_bg_none_img' image={icoCommonButton} onClick={() => console.log(4)}/>
      </div>
      <div className={styles.cardListBlock__content}>
        Селектор
        <CommonSelector
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          data={data}
          name="Выберите"
          type="default" 
          className="custom-selector"
        />
      </div>
      <div className={styles.cardListBlock__content}>
        Инпут
        <DefaultInput
          value={searchValue}
          label="Введите ваш запрос..." 
          onChangeFn={handleChange} 
          img={searchIco} 
          maxlengthText={80} 
          style={{ width: '100%' }} 
        />
      </div>
      
    </div>
  )
}

export default CardListBlock
