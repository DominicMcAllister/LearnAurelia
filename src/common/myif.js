import {BoundViewFactory, ViewSlot, customAttribute, templateController, inject} from 'aurelia-framework';

@templateController
@inject(BoundViewFactory, ViewSlot)
@customAttribute('my-if');
export class MyIf{
    constructor(viewFactory, viewSlot){
        this.viewFactory = viewFactory;
        this.viewSlot = ViewSlot;
        this.showing = false;
    }

    bind(bindingContext){
        this.bindingContext = bindingContext;
    }

    valueChanged(newValue){
        if(!newValue){
            if(this.view){
                this.viewSlot.remove(this.view);
                this.view.unbind();
            }

            this.showing = false;
            return;
        }

        if(!this.view){
            this.view = this.viewFactory.create();
        }

        if(!this.showing){
            this.showing = true;

            if(!this.view.bound){
                this.view.bind(this.bindingContext);
            }

            this.viewSlot.add(this.view);
        }
    }
}