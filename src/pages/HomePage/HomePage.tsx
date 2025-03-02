import React from 'react';
import styles from './homePage.module.scss'
import {SearchBlock} from './Bloks/SearchBlock/SearchBlock';
import {FilterBlock} from './Bloks/FilterBlock/FilterBlock';
import {CardListBlock} from './Bloks/CardListBlock/CardListBlock';
import { TopSliderBlock } from './Bloks/TopSliderBlock/TopSliderBlock';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <TopSliderBlock/>
      <SearchBlock/>
      <FilterBlock/>
      <CardListBlock/>
    </div>
  )
}

export default HomePage
