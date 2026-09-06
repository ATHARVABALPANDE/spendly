// main.js — students will add JavaScript here as features are built

// Landing page: clicking the "your expense saviour" badge reveals a monkey.
document.addEventListener("DOMContentLoaded", function () {
    var badge = document.getElementById("saviour-badge");
    var monkey = document.getElementById("monkey-pop");
    if (!badge || !monkey) return;

    badge.addEventListener("click", function () {
        monkey.hidden = !monkey.hidden;
        if (!monkey.hidden) {
            // retrigger the pop animation on every reveal
            monkey.classList.remove("is-popping");
            void monkey.offsetWidth;
            monkey.classList.add("is-popping");
        }
    });
});
