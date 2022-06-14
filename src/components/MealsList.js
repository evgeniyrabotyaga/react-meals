import MealsItem from "./MealsItem";

const MealsList = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      price={meal.price}
      description={meal.description}
      name={meal.name}
      key={meal.id}
      id={meal.id}
    ></MealsItem>
  ));

  return (
    <section className="meals">
      <ul className="meals__list">{mealsList}</ul>
    </section>
  );
};

export default MealsList;
