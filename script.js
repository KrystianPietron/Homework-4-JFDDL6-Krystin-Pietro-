class ToDo{
    constructor(){
        this.tasks = []
        this.render();
    }

    addTask(){

    }
    render(){
    document.body.innerHTML=''
    const ul = document.createElement("ol");
    this.tasks.forEach(task => {
      const div = document.createElement("li");
      ul.appendChild(div);
    });
    document.body.appendChild(ul);
    }
}
const toDo1 = new ToDo();
console.log(toDo1);