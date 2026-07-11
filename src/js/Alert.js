export default class Alert {
  constructor(jsonPath) {
    this.jsonPath = jsonPath;
  }

  async getData() {
    const response = await fetch(this.jsonPath);
    return await response.json();
  }

  async render() {
    const alerts = await this.getData();

    if (!alerts.length) return;

    const section = document.createElement("section");
    section.classList.add("alert-list");

    alerts.forEach(alert => {
      const p = document.createElement("p");
      p.textContent = alert.message;
      p.style.backgroundColor = alert.background;
      p.style.color = alert.color;

      section.appendChild(p);
    });

    document.querySelector("main").prepend(section);
  }
}