import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
        //Transform the ingredients object into an array
        let transformedIngredients = Object.keys( props.ingredients )
        //map through the new array string
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients</p>;
        }
        
        return(
            <div className={classes.Burger}>
              <BurgerIngredient type="bread-top" />
              {transformedIngredients}
              <BurgerIngredient type="bread-bottom" />
            </div>
        )};

export default burger;
