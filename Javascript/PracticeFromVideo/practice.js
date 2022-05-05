"'use strict'";
var project = {
    name: "Inkal",
    tasks: 
    [
        {
            taskname: "first"
        },
        {
            taskname: "second"
        }
    ]
};

console.log(project.tasks.taskname)
console.log(project.name)

var newProject = Object.create(project);
console.log(newProject.name);


var task ={ };
Object.defineProperty(task, "text",{
    value : "Get ready!",
    writable: true,
    enumerable: true
    })
console.log(task.text + "hi");
for(var f in task){
    console.log(f)
}