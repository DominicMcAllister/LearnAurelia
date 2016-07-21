import {containerless, customElement, bindable} from 'aurelia-framework';

@containerless() //if we don't want the element called 'navigation-bar' (html5 validation worries)
@customElement('navigation-bar') //if we want to use 'navigation-bar' as the element instead of 'nav-bar'
export class NavBar{
    @bindable router;

    //reference to the view that is hosting the element with access to the entire dom
    created(view){

    }

    bind(bindingContext, overrideContext){

    }

    //removed from dom
    unbind(){

    }

    //added to dom
    attached(){

    }

    //pulled from the dom
    detached(){

    }
}