import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

function FilterMeals(props: any) {
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onFilter(keyword);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [keyword]);

    const inputChangeHandler = (e: any) => {
        setKeyword(e.target.value.trim());
    };

    return (
        <div className={classes.FilterMeal}>
            <div className={classes.InputOuter}>
                <input
                    onChange={inputChangeHandler}
                    className={classes.SearchInput}
                    type="text" placeholder={"请输入关键字"}/>
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} />
            </div>
        </div>
    );
}

export default FilterMeals;