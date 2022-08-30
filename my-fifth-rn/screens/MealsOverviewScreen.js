import React from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeal} />;
}
