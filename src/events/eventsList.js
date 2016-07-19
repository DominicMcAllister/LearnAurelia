import {inject, Lazy} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router, activationStrategy} from 'aurelia-router';

@inject(DataRepository, Router)
export class EventsList{
    constructor(dataRepository, router){
        this.PageTitle = "Events";
        this.dataRepository = dataRepository;
        this.router = router;
    }

    activate(params, routeConfig){
        var pastOrFuture = routeConfig.name == '' ? 'future' : routeConfig.name;

        return this.dataRepository.getEvents(pastOrFuture).then(events => {
            if(params.speaker || params.topic){
                var filteredResults = [];
                events.forEach(function(element) {
                    let include = false;
                    if(params.speaker){
                        include = include || (element.speaker.toLowerCase().indexOf(params.speaker.toLowerCase()) > -1);
                    }
                    if(params.topic){
                        include = include || (element.title.toLowerCase().indexOf(params.title.toLowerCase()) > -1);
                    }

                    if(include){
                        filteredResults.push(element);
                    }
                });
                this.events = filteredResults;
            }
            else{
                this.events = events;
            }

            this.events.forEach(item => item.detailUrl = this.router.generate('eventDetail', {eventId: item.id}));
        });
    }

    determineActivationStrategy(){
        return activationStrategy.invokeLifecycle;
        // return activationStrategy.replace;
    }
}