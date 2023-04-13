import React from 'react';
import { HomeCategory } from '../../components/home';
import HomeBanners from "../../components/home/homeBanners/HomeBanners";
import styles from "./homePage.module.css";


const HomePage = () => {
  return (
    <div className={styles.home__page}>
        <HomeBanners />
        <HomeCategory />
    </div>
  )
}

export default HomePage