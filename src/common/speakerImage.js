import {customAttribute, inject} from 'aurelia-framework';

@inject(Element)
@customAttribute('speaker-img') //what to call the markup tag
export class SpeakerImage{
// export class SpeakerImageCustomAttribute{ //if we wanted it called "speaker-image"

    constructor(element){
        this.element = element;
    }

    valueChanged(newValue, oldValue){
        this.element.src = "../images/speakers/" + newValue;
    }

    bind(bindingContext){
        this.valueChanged(this.value);
    }
}