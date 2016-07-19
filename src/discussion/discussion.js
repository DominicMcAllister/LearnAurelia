function getDiscussionInput(){
    return "";
}

function cloneObject(obj){
    return JSON.parse(JSON.stringify(obj));
}

export class Discussion{
    activate(){
        this.discussionInput = getDiscussionInput();
        this.originalInput = cloneObject(this.discussionInput);   
    }

    save(){
        this.originalInput = cloneObject(this.discussionInput);
    }

    canDeactivate(params, routeConfig, navigation){
        if(JSON.stringify(cloneObject(this.discussionInput)) != JSON.stringify(this.originalInput)){
            return confirm("Unsaved data, are you sure you want to navigate away?");
        }

        return true;
    }

    deactivate(){
        console.log("discussion deactivated");
    }
}