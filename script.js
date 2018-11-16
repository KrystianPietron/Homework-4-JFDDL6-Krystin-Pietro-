class ToDo {
  constructor(container) {
    this.container = container;
    this.tasks = [];
    this.init();
  }
  init() {
    const recarr = localStorage.getItem("tablica");
    if (recarr != null) {
      this.tasks = JSON.parse(recarr);
    }
    this.render();
  }
  render() {
    this.container.innerHTML = "";
    console.log(this.tasks);
    this.renderElement();
    this.renderList();
    this.renderElementSearch();
    this.renderFiltration();
  }
  renderList() {
    const ul = document.createElement("ul");
    this.tasks.forEach((task, i) => {
      const li = document.createElement("li");
      const butt = document.createElement("button");
      butt.innerText = "Remove Task";
      li.innerText = task.text;
      localStorage.setItem("tablica", JSON.stringify(this.tasks));
      if (task.t === 1) {
        li.style.textDecoration = "line-through";
      }
      ul.appendChild(li);
      ul.appendChild(butt);
      li.addEventListener("click", () => {
        (task.t = 1),
          localStorage.setItem("tablica", JSON.stringify(this.tasks)),
          (li.style.textDecoration = "line-through"),
          alert("Task completed");
      });
      butt.addEventListener("click", () => {
        this.tasks.splice(i, 1);
        localStorage.setItem("tablica", JSON.stringify(this.tasks));
        this.render();
      });
    });
    this.container.appendChild(ul);
  }
  addTask(text) {
    this.text = text;
    this.tasks.push({ text, t: 0 });
    this.render();
  }
  renderFiltration() {
    const finisch = document.createElement("button");
    const nfinisch = document.createElement("button");
    const all = document.createElement("button");
    finisch.innerText = "completed";
    nfinisch.innerText = "not completed";
    all.innerText = "all";
    finisch.addEventListener("click", () => {
      const arr2 = [];
      this.tasks.filter(function(el) {
        if (el.t === 1) {
          arr2.push(el.text);
        }
      });
      console.log(arr2);
    });
    nfinisch.addEventListener("click", () => {
      const arr2 = [];
      this.tasks.filter(function(el) {
        if (el.t === 0) {
          arr2.push(el.text);
        }
      });
      console.log(arr2);
    });
    this.container.appendChild(finisch);
    this.container.appendChild(nfinisch);
    this.container.appendChild(all);
  }

  addSearch(search) {
    this.search = search;
  }
  renderElementSearch() {
    const inptsrch = document.createElement("input");
    const butsrch = document.createElement("button");
    butsrch.innerText = "Search";
    butsrch.addEventListener("click", () => {
      const arr2 = [];
      console.log(inptsrch.value);
      this.tasks.filter(function(el) {
        if (el.text === inptsrch.value) {
          arr2.push(inptsrch.value);
        }
      });
      console.log(arr2);
    });
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
      (this.tasks = []), localStorage.clear(), this.render();
    });
    this.container.appendChild(inp);
    this.container.appendChild(but);
    this.container.appendChild(butc);
  }
}
const toDo1 = new ToDo(document.body);
