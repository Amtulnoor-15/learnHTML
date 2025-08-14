const scenarios = [
  {
    text: "Your teammate criticizes your idea in front of others.",
    choices: [
      {
        text: "Snap back and defend yourself aggressively.",
        feedback: "Reacting impulsively may escalate the situation. Try pausing first.",
      },
      {
        text: "Stay silent and walk away.",
        feedback: "Avoiding may prevent conflict, but it leaves things unresolved.",
      },
      {
        text: "Calmly ask them for more details in private.",
        feedback: "Great choice! You're showing emotional regulation and communication.",
      }
    ]
  },
  {
    text: "You failed an important test after working hard.",
    choices: [
      {
        text: "Blame your teacher and complain online.",
        feedback: "This may feel good short-term but doesn’t help growth.",
      },
      {
        text: "Reflect on what went wrong and plan better for next time.",
        feedback: "Excellent emotional intelligence – using failure as a learning tool.",
      },
      {
        text: "Ignore the result and distract yourself.",
        feedback: "It’s okay to rest, but avoiding emotions doesn’t help in the long run.",
      }
    ]
  }
];

let currentScenario = 0;

function loadScenario() {
  const scenario = scenarios[currentScenario];
  document.getElementById("scenario-text").textContent = scenario.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = ""; // clear previous buttons
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";

  scenario.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      document.getElementById("feedback").textContent = choice.feedback;
      document.getElementById("next-btn").style.display = "inline-block";
    };
    choicesDiv.appendChild(btn);
  });
}

function loadNextScenario() {
  currentScenario++;
  if (currentScenario < scenarios.length) {
    loadScenario();
  } else {
    document.getElementById("scenario-box").innerHTML = "<h2>Well done!</h2><p>You just took a step toward better emotional intelligence 👏</p>";
  }
}

window.onload = loadScenario;
