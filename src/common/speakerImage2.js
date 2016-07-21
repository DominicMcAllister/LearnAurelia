import {customAttribute, bindable, inject} from 'aurelia-framework';

@inject(Element)
@customAttribute('speaker-img2') //what to call the markup tag
export class SpeakerImage{

    @bindable imageName;
    @bindable isBordered;

    constructor(element){
        this.element = element;
    }

    imageNameChanged(newValue, oldValue){
        this.element.src = "../images/speakers/" + newValue;
    }

    isBorderedChanged(newValue){
        let customStyle = "width:100%;max-width:200px;height:100px;";
        if(newValue){
            customStyle += "border:1px solid purple;";
        }

        this.element.style = customStyle;
    }
}