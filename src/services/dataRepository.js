import {eventsData} from 'services/eventsData';
import moment from 'moment';

function filterEvents(futureOrPast, events){
    let results = JSON.parse(JSON.stringify(events));
    if(futureOrPast == 'future'){
        results = results.filter(item => moment(item.dateTime) >= moment());
    }
    else if(futureOrPast == 'past'){
        results = results.filter(item => moment(item.dateTime) < moment());
    }

    results.forEach(item => {
        var datetime = moment(item.dateTime).format("MM/DD/YYYY HH:mm");
        item.dateTime = datetime;
    });

    return results;
}

export class DataRepository{
    constructor(){
    }



    getEvents(pastOrFuture){
        var promise = new Promise((resolve, reject) =>{
            setTimeout(_ => {
                this.events = eventsData.sort((a, b) => a.dateTime >= b.dateTime ? 1 : -1);
                resolve(filterEvents(pastOrFuture, this.events));
            }, 250);
        });

        return promise;
    }

    getEvent(eventId){
        return this.events.find(item => item.id == eventId);
    }
}