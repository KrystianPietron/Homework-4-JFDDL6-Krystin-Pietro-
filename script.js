class ToDo {
  constructor(container) {
    this.container = container;
    this.tasks = []
    this.renderElement();
  }

  render() {}
  addTask() {}
  renderElement() {
    this.container.innerHTML = "";
    const inp = document.createElement("input");
    const but = document.createElement("button");
    but.innerText = "Dodaj";
    but.addEventListener('click', ()=>{this.tasks.push(inp)})
    this.container.appendChild(inp);
    this.container.appendChild(but);
  }
}
const toDo1 = new ToDo(document.body);
