import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const FoodDeltails = useLoaderData()
    const { strMeal, strInstructions, strMealThumb } = FoodDeltails.meals[0];
    console.log(FoodDeltails.meals)
    return (
        <div>
            <h1 className='font-bold text-4xl text-white text-center capitalize my-5 mt-10'>this is the details of : {strMeal}</h1>
            <div className="flex justify-center container mx-auto">
                <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700  md:flex-row">
                    <img className="rounded-t-lg  md:h-auto md:min-w-48 md:rounded-none md:rounded-l-lg" src={strMealThumb} alt={strMeal} />
                    <div className="flex flex-col justify-start p-6">
                        <h5 className="mb-20 text-5xl font-medium text-neutral-800 dark:text-neutral-50">
                            {strMeal}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {strInstructions}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default FoodDetails;