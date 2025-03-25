import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";
const FilterMeals = (props) => {

    const [keyword, setKeyword] = useState("");

    const inputChangeHandler = (e) => {
        setKeyword(e.target.value);
    };



    useEffect(() => {
        //设置定时器，在停止输入1秒后触发搜索
        const timer = setTimeout(() => {
            props.onFilter(keyword);
        }, 1000);

        //清除定时器，当keyword改变时清除定时器
        return () => {
            clearTimeout(timer);
        }
    }, [keyword, props]);




    return (
        <div className={classes.FilterMeals}>


            <div className={classes.InputOuter}>
                <input type="text"
                    className={classes.SearchInput}
                    value={keyword}
                    onChange={inputChangeHandler}
                    placeholder={"请输入关键字"} />
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
            </div>

        </div>

    )
};

export default FilterMeals;