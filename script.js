let weightChart = null;
function calculateCalories() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let goal = document.getElementById("goal").value;

    let calories;
    let workout;
    let meal;

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

    let protein = weight * 2;
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

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

    // Simulated AI-style recommendation
    let aiAdvice =
        "Based on your goal, aim for " + calories + " kcal and " +
        protein + " g of protein daily. " +
        "Follow the workout plan consistently, prioritize sleep, " +
        "and stay hydrated for the best results.";

    document.getElementById("result").innerHTML =
        "<h2>Your Fitness Plan</h2>" +
        "<p><strong>Calories:</strong> " + calories + " kcal/day</p>" +
        "<p><strong>Protein:</strong> " + protein + " g/day</p>" +
        "<p><strong>BMI:</strong> " + bmi + " (" + category + ")</p>" +
        "<p><strong>Workout:</strong> " + workout + "</p>" +
        "<p><strong>Meal Suggestion:</strong> " + meal + "</p>" +
        "<hr>" +
        "<h3>AI Personalized Recommendation</h3>" +
        "<p>" + aiAdvice + "</p>";
}function saveProgress() {
    let weight = document.getElementById("weight").value;

    if (!weight) {
        alert("Please enter your weight first.");
        return;
    }

    let progressData = JSON.parse(localStorage.getItem("progressData")) || [];

    let entry = {
        date: new Date().toLocaleString(),
        weight: weight
    };

    progressData.push(entry);

    localStorage.setItem("progressData", JSON.stringify(progressData));

    displayProgress();
}

function displayProgress() {
    let progressData = JSON.parse(localStorage.getItem("progressData")) || [];

    let html = "<h3>Progress History</h3>";

    if (progressData.length === 0) {
        html += "<p>No entries saved yet.</p>";
    } else {
        html += "<ul>";

        for (let i = 0; i < progressData.length; i++) {
            html += "<li>" +
                progressData[i].date +
                " - " +
                progressData[i].weight +
                " kg</li>";
        }

        html += "</ul>";
    }

    document.getElementById("progress").innerHTML = html;
    drawChart(progressData);
}

displayProgress();
l

function drawChart(progressData) {
    const canvas = document.getElementById("weightChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const labels = progressData.map(entry => entry.date);
    const weights = progressData.map(entry => Number(entry.weight));

    if (weightChart) {
        weightChart.destroy();
    }

    if (weights.length === 0) {
        return;
    }

    weightChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Weight (kg)",
                data: weights,
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.1)",
                borderWidth: 3,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}