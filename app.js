const muscleGroups = {
    chest: "Chest",
    back: "Back",
    shoulders: "Shoulders",
    arms: "Arms",
    legs: "Legs",
    core: "Core"
};

const equipmentLabels = {
    barbell: "Barbell",
    dumbbell: "Dumbbell",
    machine: "Machine",
    cable: "Cable",
    bodyweight: "Bodyweight"
};

const weekdays = [
    { id: "mon", label: "Mon" },
    { id: "tue", label: "Tue" },
    { id: "wed", label: "Wed" },
    { id: "thu", label: "Thu" },
    { id: "fri", label: "Fri" },
    { id: "sat", label: "Sat" },
    { id: "sun", label: "Sun" }
];

const exercises = [
    { id: 101, name: "Barbell Bench Press", group: "chest", equipment: "barbell", sets: "4 x 8-10", minutes: 12, calories: 120 },
    { id: 102, name: "Incline Dumbbell Press", group: "chest", equipment: "dumbbell", sets: "4 x 8-12", minutes: 12, calories: 110 },
    { id: 103, name: "Cable Fly", group: "chest", equipment: "cable", sets: "3 x 12-15", minutes: 9, calories: 75 },
    { id: 104, name: "Machine Chest Press", group: "chest", equipment: "machine", sets: "3 x 10-12", minutes: 10, calories: 85 },
    { id: 105, name: "Push-Up", group: "chest", equipment: "bodyweight", sets: "3 x 12-20", minutes: 8, calories: 65 },
    { id: 201, name: "Deadlift", group: "back", equipment: "barbell", sets: "4 x 5-8", minutes: 15, calories: 150 },
    { id: 202, name: "Single-Arm Dumbbell Row", group: "back", equipment: "dumbbell", sets: "4 x 10 each side", minutes: 12, calories: 105 },
    { id: 203, name: "Lat Pulldown", group: "back", equipment: "machine", sets: "4 x 10-12", minutes: 11, calories: 95 },
    { id: 204, name: "Seated Cable Row", group: "back", equipment: "cable", sets: "4 x 10-12", minutes: 11, calories: 100 },
    { id: 205, name: "Pull-Up", group: "back", equipment: "bodyweight", sets: "4 x 6-10", minutes: 10, calories: 100 },
    { id: 301, name: "Overhead Press", group: "shoulders", equipment: "barbell", sets: "4 x 6-10", minutes: 12, calories: 105 },
    { id: 302, name: "Dumbbell Lateral Raise", group: "shoulders", equipment: "dumbbell", sets: "3 x 12-15", minutes: 8, calories: 60 },
    { id: 303, name: "Face Pull", group: "shoulders", equipment: "cable", sets: "3 x 12-15", minutes: 8, calories: 60 },
    { id: 304, name: "Machine Shoulder Press", group: "shoulders", equipment: "machine", sets: "3 x 10-12", minutes: 10, calories: 85 },
    { id: 305, name: "Pike Push-Up", group: "shoulders", equipment: "bodyweight", sets: "3 x 8-12", minutes: 8, calories: 70 },
    { id: 401, name: "Barbell Curl", group: "arms", equipment: "barbell", sets: "3 x 10-12", minutes: 8, calories: 55 },
    { id: 402, name: "Dumbbell Hammer Curl", group: "arms", equipment: "dumbbell", sets: "3 x 10-12", minutes: 8, calories: 55 },
    { id: 403, name: "Cable Triceps Pushdown", group: "arms", equipment: "cable", sets: "3 x 12-15", minutes: 8, calories: 55 },
    { id: 404, name: "Assisted Dip", group: "arms", equipment: "machine", sets: "3 x 8-12", minutes: 9, calories: 70 },
    { id: 405, name: "Diamond Push-Up", group: "arms", equipment: "bodyweight", sets: "3 x 8-15", minutes: 8, calories: 70 },
    { id: 501, name: "Back Squat", group: "legs", equipment: "barbell", sets: "4 x 6-10", minutes: 15, calories: 155 },
    { id: 502, name: "Dumbbell Romanian Deadlift", group: "legs", equipment: "dumbbell", sets: "4 x 8-10", minutes: 12, calories: 120 },
    { id: 503, name: "Leg Press", group: "legs", equipment: "machine", sets: "4 x 10-12", minutes: 12, calories: 125 },
    { id: 504, name: "Cable Glute Kickback", group: "legs", equipment: "cable", sets: "3 x 12 each side", minutes: 9, calories: 75 },
    { id: 505, name: "Walking Lunge", group: "legs", equipment: "bodyweight", sets: "3 x 12 each side", minutes: 10, calories: 100 },
    { id: 601, name: "Weighted Sit-Up", group: "core", equipment: "dumbbell", sets: "3 x 12-15", minutes: 8, calories: 55 },
    { id: 602, name: "Cable Wood Chop", group: "core", equipment: "cable", sets: "3 x 12 each side", minutes: 8, calories: 60 },
    { id: 603, name: "Machine Crunch", group: "core", equipment: "machine", sets: "3 x 12-15", minutes: 8, calories: 60 },
    { id: 604, name: "Plank", group: "core", equipment: "bodyweight", sets: "3 x 45-60 sec", minutes: 6, calories: 45 },
    { id: 605, name: "Hanging Knee Raise", group: "core", equipment: "bodyweight", sets: "3 x 10-15", minutes: 8, calories: 65 }
];

const storageKey = "exerciseMapperState";
let state = {
    groupFilter: "",
    equipmentFilter: "",
    pool: [],
    selectedDays: [],
    dailyPlans: {}
};

function loadState() {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    try {
        const parsed = JSON.parse(saved);
        state = {
            groupFilter: parsed.groupFilter || "",
            equipmentFilter: parsed.equipmentFilter || "",
            pool: Array.isArray(parsed.pool) ? parsed.pool : [],
            selectedDays: Array.isArray(parsed.selectedDays) ? parsed.selectedDays : [],
            dailyPlans: parsed.dailyPlans || {}
        };
    } catch (error) {
        console.warn("Could not load saved planner state.", error);
    }
}

function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
}

function getExercise(id) {
    return exercises.find((exercise) => exercise.id === Number(id));
}

function filteredExercises() {
    return exercises.filter((exercise) => {
        const groupMatch = !state.groupFilter || exercise.group === state.groupFilter;
        const equipmentMatch = !state.equipmentFilter || exercise.equipment === state.equipmentFilter;
        return groupMatch && equipmentMatch;
    });
}

function populateFilters() {
    const groupFilter = document.getElementById("groupFilter");
    const equipmentFilter = document.getElementById("equipmentFilter");

    Object.entries(muscleGroups).forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        groupFilter.appendChild(option);
    });

    Object.entries(equipmentLabels).forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        equipmentFilter.appendChild(option);
    });
}

function renderExercises() {
    const grid = document.getElementById("exerciseGrid");
    const count = document.getElementById("exerciseCount");
    const data = filteredExercises();
    grid.innerHTML = "";
    count.textContent = `${data.length} shown`;

    if (data.length === 0) {
        grid.innerHTML = '<p class="empty-state">No exercises match the selected filters.</p>';
        return;
    }

    data.forEach((exercise) => {
        const card = document.createElement("article");
        card.className = "exercise-card";
        card.draggable = true;
        card.dataset.id = exercise.id;
        card.innerHTML = `
            <div class="card-title-row">
                <h3>${exercise.name}</h3>
                <button class="add-button" type="button" aria-label="Add ${exercise.name}">+</button>
            </div>
            <div class="badge-row">
                <span class="badge group-${exercise.group}">${muscleGroups[exercise.group]}</span>
                <span class="badge equipment">${equipmentLabels[exercise.equipment]}</span>
            </div>
            <p>${exercise.sets}</p>
            <div class="metric-row">
                <span>${exercise.minutes} min</span>
                <span>${exercise.calories} kcal</span>
            </div>
        `;

        card.querySelector(".add-button").addEventListener("click", () => addToPool(exercise.id));
        card.addEventListener("dblclick", () => addToPool(exercise.id));
        card.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", String(exercise.id));
        });
        grid.appendChild(card);
    });
}

function addToPool(id) {
    const exercise = getExercise(id);
    if (!exercise) return;
    if (!state.pool.includes(exercise.id)) {
        state.pool.push(exercise.id);
        saveState();
        renderPool();
        renderDailyPlans();
    }
}

function removeFromPool(id) {
    state.pool = state.pool.filter((item) => item !== Number(id));
    Object.keys(state.dailyPlans).forEach((day) => {
        state.dailyPlans[day] = (state.dailyPlans[day] || []).filter((item) => item !== Number(id));
    });
    saveState();
    renderPool();
    renderDailyPlans();
}

function renderPool() {
    const poolList = document.getElementById("poolList");
    poolList.innerHTML = "";

    if (state.pool.length === 0) {
        poolList.innerHTML = '<p class="empty-state">Your plan pool is empty.</p>';
        return;
    }

    state.pool.forEach((id) => {
        const exercise = getExercise(id);
        if (!exercise) return;
        const item = document.createElement("div");
        item.className = "pool-item";
        item.draggable = true;
        item.dataset.id = exercise.id;
        item.innerHTML = `
            <div>
                <strong>${exercise.name}</strong>
                <span>${muscleGroups[exercise.group]} - ${equipmentLabels[exercise.equipment]}</span>
            </div>
            <button type="button" aria-label="Remove ${exercise.name}">x</button>
        `;
        item.querySelector("button").addEventListener("click", () => removeFromPool(exercise.id));
        item.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", String(exercise.id));
        });
        poolList.appendChild(item);
    });
}

function renderDaySelector() {
    const container = document.getElementById("daySelector");
    container.innerHTML = "";
    weekdays.forEach((day) => {
        const label = document.createElement("label");
        label.className = "day-pill";
        label.innerHTML = `
            <input type="checkbox" value="${day.id}">
            <span>${day.label}</span>
        `;
        const checkbox = label.querySelector("input");
        checkbox.checked = state.selectedDays.includes(day.id);
        checkbox.addEventListener("change", () => {
            if (checkbox.checked && !state.selectedDays.includes(day.id)) {
                state.selectedDays.push(day.id);
                state.dailyPlans[day.id] = state.dailyPlans[day.id] || [];
            }
            if (!checkbox.checked) {
                state.selectedDays = state.selectedDays.filter((item) => item !== day.id);
                delete state.dailyPlans[day.id];
            }
            saveState();
            renderDailyPlans();
        });
        container.appendChild(label);
    });
}

function renderDailyPlans() {
    const container = document.getElementById("dailyPlans");
    container.innerHTML = "";

    if (state.selectedDays.length === 0) {
        container.innerHTML = '<p class="empty-state">Select one or more training days to start scheduling.</p>';
        return;
    }

    state.selectedDays.forEach((dayId) => {
        const day = weekdays.find((item) => item.id === dayId);
        const section = document.createElement("article");
        section.className = "day-plan";
        section.dataset.day = dayId;
        section.innerHTML = `
            <div class="day-plan-header">
                <h3>${day.label}</h3>
                <div class="assign-row">
                    <select aria-label="Choose exercise for ${day.label}">
                        <option value="">Choose from plan pool</option>
                    </select>
                    <button type="button">Add</button>
                </div>
            </div>
            <div class="assigned-list"></div>
        `;

        const select = section.querySelector("select");
        state.pool.forEach((id) => {
            const exercise = getExercise(id);
            if (!exercise) return;
            const option = document.createElement("option");
            option.value = String(exercise.id);
            option.textContent = exercise.name;
            select.appendChild(option);
        });

        section.querySelector("button").addEventListener("click", () => {
            if (select.value) addToDay(dayId, Number(select.value));
        });

        section.addEventListener("dragover", (event) => event.preventDefault());
        section.addEventListener("drop", (event) => {
            event.preventDefault();
            const id = Number(event.dataTransfer.getData("text/plain"));
            if (id) addToDay(dayId, id);
        });

        renderAssignedList(section.querySelector(".assigned-list"), dayId);
        container.appendChild(section);
    });
}

function addToDay(dayId, id) {
    if (!state.pool.includes(id)) addToPool(id);
    state.dailyPlans[dayId] = state.dailyPlans[dayId] || [];
    if (!state.dailyPlans[dayId].includes(id)) {
        state.dailyPlans[dayId].push(id);
        saveState();
        renderDailyPlans();
    }
}

function removeFromDay(dayId, id) {
    state.dailyPlans[dayId] = (state.dailyPlans[dayId] || []).filter((item) => item !== Number(id));
    saveState();
    renderDailyPlans();
}

function renderAssignedList(container, dayId) {
    const ids = state.dailyPlans[dayId] || [];
    if (ids.length === 0) {
        container.innerHTML = '<p class="empty-state compact">Drop exercises here or add them from the plan pool.</p>';
        return;
    }

    ids.forEach((id) => {
        const exercise = getExercise(id);
        if (!exercise) return;
        const item = document.createElement("div");
        item.className = "assigned-item";
        item.innerHTML = `
            <div>
                <strong>${exercise.name}</strong>
                <span>${exercise.sets} - ${exercise.minutes} min</span>
            </div>
            <button type="button" aria-label="Remove ${exercise.name}">x</button>
        `;
        item.querySelector("button").addEventListener("click", () => removeFromDay(dayId, exercise.id));
        container.appendChild(item);
    });
}

function generateMarkdown() {
    const createdAt = new Date().toLocaleString("en-US");
    let markdown = `# Weekly Workout Plan\n\nGenerated: ${createdAt}\n\n`;

    if (state.selectedDays.length === 0) {
        markdown += "No training days have been selected yet.\n";
        return markdown;
    }

    state.selectedDays.forEach((dayId) => {
        const day = weekdays.find((item) => item.id === dayId);
        const ids = state.dailyPlans[dayId] || [];
        markdown += `## ${day.label}\n\n`;

        if (ids.length === 0) {
            markdown += "- [ ] Rest or open slot\n\n";
            return;
        }

        let totalMinutes = 0;
        let totalCalories = 0;
        ids.forEach((id) => {
            const exercise = getExercise(id);
            if (!exercise) return;
            totalMinutes += exercise.minutes;
            totalCalories += exercise.calories;
            markdown += `- [ ] ${exercise.name}\n`;
            markdown += `  - Sets: ${exercise.sets}\n`;
            markdown += `  - Focus: ${muscleGroups[exercise.group]}\n`;
            markdown += `  - Equipment: ${equipmentLabels[exercise.equipment]}\n`;
            markdown += `  - Estimate: ${exercise.minutes} min, ${exercise.calories} kcal\n`;
        });
        markdown += `\nEstimated total: ${totalMinutes} min, ${totalCalories} kcal\n\n`;
    });

    markdown += "Generated by ExerciseMapper.\n";
    return markdown;
}

function exportMarkdown() {
    const markdown = generateMarkdown();
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `workout-plan-${date}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function renderPreview() {
    const panel = document.getElementById("previewPanel");
    const content = document.getElementById("previewContent");
    content.textContent = generateMarkdown();
    panel.hidden = !panel.hidden;
}

function resetFilters() {
    state.groupFilter = "";
    state.equipmentFilter = "";
    document.getElementById("groupFilter").value = "";
    document.getElementById("equipmentFilter").value = "";
    saveState();
    renderExercises();
}

function resetAll() {
    if (!confirm("Reset all workout planning data on this device?")) return;
    state = { groupFilter: "", equipmentFilter: "", pool: [], selectedDays: [], dailyPlans: {} };
    localStorage.removeItem(storageKey);
    document.getElementById("groupFilter").value = "";
    document.getElementById("equipmentFilter").value = "";
    renderAll();
}

function openDrawer() {
    const drawer = document.getElementById("muscleDrawer");
    const overlay = document.getElementById("drawerOverlay");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
}

function closeDrawer() {
    const drawer = document.getElementById("muscleDrawer");
    const overlay = document.getElementById("drawerOverlay");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
}

function setupEvents() {
    document.getElementById("groupFilter").addEventListener("change", (event) => {
        state.groupFilter = event.target.value;
        saveState();
        renderExercises();
    });

    document.getElementById("equipmentFilter").addEventListener("change", (event) => {
        state.equipmentFilter = event.target.value;
        saveState();
        renderExercises();
    });

    document.getElementById("resetFiltersBtn").addEventListener("click", resetFilters);
    document.getElementById("clearPoolBtn").addEventListener("click", () => {
        state.pool = [];
        state.dailyPlans = {};
        saveState();
        renderPool();
        renderDailyPlans();
    });
    document.getElementById("clearScheduleBtn").addEventListener("click", () => {
        state.dailyPlans = {};
        saveState();
        renderDailyPlans();
    });
    document.getElementById("exportMarkdownBtn").addEventListener("click", exportMarkdown);
    document.getElementById("previewBtn").addEventListener("click", renderPreview);
    document.getElementById("resetAllBtn").addEventListener("click", resetAll);
    document.getElementById("viewMuscleBtn").addEventListener("click", openDrawer);
    document.getElementById("drawerClose").addEventListener("click", closeDrawer);
    document.getElementById("drawerOverlay").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeDrawer();
    });
}

function renderAll() {
    document.getElementById("groupFilter").value = state.groupFilter;
    document.getElementById("equipmentFilter").value = state.equipmentFilter;
    renderExercises();
    renderPool();
    renderDaySelector();
    renderDailyPlans();
}

document.addEventListener("DOMContentLoaded", () => {
    populateFilters();
    loadState();
    setupEvents();
    renderAll();
});
