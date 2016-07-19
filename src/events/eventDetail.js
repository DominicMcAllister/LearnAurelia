import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router} from 'aurelia-router';

@inject(DataRepository, Router)
export class EventDetail{
    constructor(dataRepository, router){
        this.dataRepository = dataRepository;
        this.router = router;
    }

    activate(params, routeConfig){
        var eventId = parseInt(params.eventId);
        this.event = this.dataRepository.getEvent(eventId);
    }

    goHome(){
        // this.router.navigate("#/events");
        this.router.navigateToRoute('Events', { /* no params */});
    }
}