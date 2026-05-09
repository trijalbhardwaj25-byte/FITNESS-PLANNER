function calculateCalories() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let goal = document.getElementById("goal").value;

    let calories;
    let workout;
    let meal;

    // Calorie logic
    if (goal === "loss") {
        calories = weight * 25;
        workout = "Incline Walking + Full Body Strength Training";
        meal = "High-protein calorie deficit diet";
    } else if (goal === "maintain") {
        calories = weight * 30;
        workout = "Push Pull Legs + Moderate Cardio";
        meal = "Balanced diet with protein and healthy fats";
    } else {
        calories = weight * 35;
        workout = "Progressive Overload Strength Training";
        meal = "High-protein calorie surplus diet";
    }

    // Protein
    let protein = weight * 2;

    // BMI
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    // BMI Category
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Healthy Weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Final Output
    document.getElementById("result").innerHTML =
        "<h2>Your Fitness Plan</h2>" +
        "<p><strong>Calories:</strong> " + calories + " kcal/day</p>" +
        "<p><strong>Protein:</strong> " + protein + " g/day</p>" +
        "<p><strong>BMI:</strong> " + bmi + " (" + category + ")</p>" +
        "<p><strong>Workout:</strong> " + workout + "</p>" +
        "<p><strong>Meal Suggestion:</strong> " + meal + "</p>";
}