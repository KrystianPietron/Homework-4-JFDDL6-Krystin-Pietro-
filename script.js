class ToDo {
  constructor(container) {
    this.container = container;
    this.tasks = [];
    this.filterTasks = [];
    this.init();
  }
  init() {
    const recarr = localStorage.getItem("tablica");
    if (recarr != null) {
      this.tasks = JSON.parse(recarr);
    }
    this.render();
  }
  render(arr) {
    this.container.innerHTML = "";
    this.renderElement();
    if (this.filterTasks.length === 0) {
      this.renderList(this.tasks);
    } else {
      this.renderList(arr);
    }
    this.renderElementSearch();
    this.renderFiltration();
  }
  renderList(arr) {
    const ul = document.createElement("ul");
    arr.forEach((task, i) => {
      const li = document.createElement("li");
      const butt = document.createElement("button");
      butt.innerText = "Remove Task";
      li.innerText = task.text;
      localStorage.setItem("tablica", JSON.stringify(this.tasks));
      if (task.t === 1) {
        li.style.textDecoration = "line-through";
      }
      ul.appendChild(li);
      if(arr === this.tasks){ul.appendChild(butt);}      
      li.addEventListener("click", () => {
        (task.t = 1),
          localStorage.setItem("tablica", JSON.stringify(this.tasks)),
          (li.style.textDecoration = "line-through"),
          alert("Task completed");
      });
      butt.addEventListener("click", () => {
        this.tasks.splice(i, 1);
        localStorage.setItem("tablica", JSON.stringify(this.tasks));
        this.render(arr);
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
          arr2.push(el);
        }
      });
      this.filterTasks = arr2;
      if(arr2.length === 0){alert('The finish list is empty')}
      console.log(this.filterTasks)
      this.render(this.filterTasks);
    });
    nfinisch.addEventListener("click", () => {
      const arr2 = [];
      this.tasks.filter(function(el) {
        if (el.t === 0) {
          arr2.push(el);
        }
      });
      this.filterTasks = arr2;
      if(arr2.length === 0){alert('The not finish list is empty')}
      console.log(this.filterTasks)
      this.render(this.filterTasks);
    });
    all.addEventListener("click", () => {
      this.render(this.tasks);
      if(this.tasks.length === 0){alert('The list is empty')}
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
        if (el.text == inptsrch.value) {
          arr2.push(el);
        }
      });
      this.filterTasks = arr2;
      if(arr2.length === 0){alert('Task not find')}
      console.log(this.filterTasks)
      this.render(this.filterTasks);
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
