import { useState, useEffect } from "react"
import Meal from "./mealItem"

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([])
  
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals')
  
      if (!response.ok) {
        // ...
      }
  
      const meals = await response.json()
      setLoadedMeals(meals)
    }

    fetchMeals()
  },[setLoadedMeals])
  

  return(
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return(
          <Meal key={meal.id} meal={meal}/>
        )
      })}
    </ul>
  )

}

export default Meals