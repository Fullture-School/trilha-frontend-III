import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'button-action',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
class Button {
    @Input() titleButton = '';
    @Output('event') actionToDispatch = new EventEmitter();

    action(click:Event) {
        this.actionToDispatch.emit({ status: 'executar'});
    }
}

export { Button }