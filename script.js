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
      butt.innerText = "Remove Task";
      li.innerText = task;
      localStorage.setItem(i,task)
      ul.appendChild(li);
      ul.appendChild(butt);
      li.addEventListener("click", () => {
        (li.style.textDecoration = "line-through"),
          alert("Task completed")
      });
      butt.addEventListener("click", () => {
        this.tasks.splice(i, 1);
        localStorage.removeItem(i)
        this.render();
      });
    });
    this.container.appendChild(ul);
    this.renderElementSearch();
  }
  addTask(text) {
    this.text = text;
    this.tasks.push(text);
    this.render();
  }
  addSearch(search){
    this.search = search;
  }
  renderElementSearch() {
    const inptsrch = document.createElement("input");
    const butsrch = document.createElement('button')
    butsrch.innerText = 'Search'
    this.container.appendChild(inptsrch);
    this.container.appendChild(butsrch);
  }
  renderElement() {
    const inp = document.createElement("input");
    const but = document.createElement("button");
    const butc = document.createElement("button");
    but.innerText = "Add Task";
    butc.innerText = "Remove all tasks";
    but.addEventListener("click", () => {
      this.addTask(inp.value);
    });
    butc.addEventListener("click", () => {
      (this.tasks = []), this.render();
    });
    this.container.appendChild(inp);
    this.container.appendChild(but);
    this.container.appendChild(butc);
  }
}
const toDo1 = new ToDo(document.body);
