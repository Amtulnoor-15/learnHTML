class DigitalClock {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  start() {
    this.update();
    setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    this.container.textContent = timeString;
  }
}

// Usage
const clock = new DigitalClock('clock');
clock.start();
