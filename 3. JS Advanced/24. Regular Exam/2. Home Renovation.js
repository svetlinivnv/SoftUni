class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        this.tasks.push({ description, cost, priority });
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        const taskIndex = this.tasks.findIndex(task => task.description === description);
        if (taskIndex === -1) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }
        const [completedTask] = this.tasks.splice(taskIndex, 1);
        this.completedTasks.push(completedTask);
        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        }
        const tasksCount = this.tasks.filter(task => task.priority >= minimalPriority).length;
        return tasksCount > 0 ? `You have ${tasksCount} tasks to prioritize.` : `No tasks found with priority ${minimalPriority} or higher.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error('No tasks have been completed yet!');
        }
        let information = `Budget left $${this.budget}.\n`;
        information += `You have completed ${this.completedTasks.length} tasks.\n`;
        information += 'Pending tasks in the renovation plan:\n';
        this.tasks.forEach(task => {
            information += `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}\n`;
        });
        return information.trim();
    }
}

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.addTask("New Roof", 5000, 1)); 


// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.markTaskAsCompleted("Change doors")); 

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.getPriorityTasksCount(1));

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());


