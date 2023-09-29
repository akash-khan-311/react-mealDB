import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const allFoods = useLoaderData();
    const foods = allFoods.meals;
    return (
        <div className='container mx-auto '>
            <div className='bg-slate-800 mt-10 text-white py-10 text-center'>
                <h1 className='text-4xl font-bold capitalize'>Yes 😍!! Here are all the dishes </h1>
                <div className='mt-10'>
                    <h1 className='text-3xl font-bold'>Find Your Favorite Food</h1>


                </div>
            </div>
            <div className='my-10 grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2'>
                {
                    foods.map(food => <Food key={food.idMeal} food={food} />)
                }
            </div>

        </div>
    );
};

export default Foods;