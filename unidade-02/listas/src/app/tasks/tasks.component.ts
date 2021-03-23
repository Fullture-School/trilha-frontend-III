import { Component, Input } from '@angular/core';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
class Tasks {
    titleButton = "Salvar";
    titleButtonList = "Limpar";
}

export { Tasks }