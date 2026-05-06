function calculateCalories() {

    let weight = document.getElementById("weight").value;

    let height = document.getElementById("height").value;

    let age = document.getElementById("age").value;

    let goal = document.getElementById("goal").value;

    let calories;

    if (goal === "loss") {
        calories = weight * 25;
    }

    else if (goal === "maintain") {
        calories = weight * 30;
    }

    else {
        calories = weight * 35;
    }

    let protein = weight * 2;

    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    document.getElementById("result").innerText =
        "Calories: " + calories +
        " | Protein: " + protein + "g" +
        " | BMI: " + bmi;

}