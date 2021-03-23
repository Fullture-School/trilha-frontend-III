import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
class Tasks {
    titleButton = "Salvar";
    titleButtonList = "Limpar";
    book = {
        task: ''
    };
    allTasks: Array<string> = [];
 
    save(form: NgForm) {
        if (!form.invalid) {
            this.allTasks.push(this.book.task);
            form.resetForm(form);    
        }
    }

    clear() {
        this.allTasks = [];
    }       
}

export { Tasks }