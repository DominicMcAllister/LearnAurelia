import {eventsData} from 'services/eventsData';
import {jobsData, states, jobTypes, jobSkills} from 'services/jobsData';
import moment from 'moment';
import {BindingSignaler} from 'aurelia-templating-resources';
import {inject} from 'aurelia-framework';

function filterEvents(futureOrPast, events){
    let results = JSON.parse(JSON.stringify(events));
    if(futureOrPast == 'future'){
        results = results.filter(item => moment(item.dateTime) >= moment());
    }
    else if(futureOrPast == 'past'){
        results = results.filter(item => moment(item.dateTime) < moment());
    }

    //replaced via converter
    // results.forEach(item => {
    //     var datetime = moment(item.dateTime).format("MM/DD/YYYY HH:mm");
    //     item.dateTime = datetime;
    // });

    return results;
}

@inject(BindingSignaler)
export class DataRepository{
    constructor(signaler){
        setInterval(() => {signaler.signal('check-freshness');}, 1000);
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

    addJob(job){
        return new Promise((resolve, reject) =>{
            this.jobs.push(job);
            resolve(job);
        });
    }

    getJobs(){
        return new Promise((resolve, reject) =>{
            if(!this.jobs) this.jobs = jobsData;
            resolve(this.jobs);
        });
    }

    getStates(){
        return new Promise((resolve, reject) =>{
            if(!this.states) this.states = states;
            resolve(this.states);
        });
    }

    getJobTypes(){
        return new Promise((resolve, reject) =>{
            if(!this.jobTypes) this.jobTypes = jobTypes;
            resolve(this.jobTypes);
        });
    }

    getJobSkills(){
        return new Promise((resolve, reject) =>{
            if(!this.jobSkills) this.jobSkills = jobSkills;
            resolve(this.jobSkills);
        });
    }
}