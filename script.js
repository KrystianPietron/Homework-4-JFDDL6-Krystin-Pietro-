class ToDo {
  constructor(container) {
    this.container = container;
    this.tasks = [];
    this.renderElement();
    this.render();
  }

  render() {
    this.container.innerHTML = "";
    this.renderElement();
    const ul = document.createElement("ul");
    this.tasks.forEach((task, i) => {
      const li = document.createElement("li");
      const butt = document.createElement("button");
      butt.innerText = "clear";
      li.innerText = task;
      ul.appendChild(li);
      ul.appendChild(butt);
      li.addEventListener("click", () => alert(`asd`));
      butt.addEventListener("click", () => {
        this.tasks.splice(i, 1);
        this.render();
      });
    });
    this.container.appendChild(ul)
  }
  addTask(text) {
    this.text = text;
    this.tasks.push(text);
    this.render();
  }

  renderElement() {
    const inp = document.createElement("input");
    const but = document.createElement("button");
    but.innerText = "Dodaj";
    but.addEventListener("click", () => {
      this.addTask(inp.value);
    });
    this.container.appendChild(inp);
    this.container.appendChild(but);
  }
}
const toDo1 = new ToDo(document.body);
