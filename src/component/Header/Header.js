import React, { useState } from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import HomePage from '../Home/HomePage';

import FilterMeals from '.././FilterMeals/FilterMeals';


const Header = (props) => {

    const [showHomePage, setShowHomePage] = useState(false);

    const showHomePageButton = () => {
        setShowHomePage(true);
    };

    const hideHomePage = () => {
        setShowHomePage(false);
    };

    // 创建一个过滤meals的函数
    const filterHandler = (keyword) => {
        // const newMealsData = props.MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1);
        // setMealsData(newMealsData);
    };


    return (
        <div className={classes.Header}>
            <button className={classes.showHomePageButton} onClick={showHomePageButton}>
                <FontAwesomeIcon icon={faHouse} style={{ color: "#f0c733", }} />
            </button>
            {showHomePage && <HomePage showHomePage={showHomePage} onHide={hideHomePage} />}
            <FilterMeals onFilter={filterHandler} />
        </div>
    )


}

export default Header;