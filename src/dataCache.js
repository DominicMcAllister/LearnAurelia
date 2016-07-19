// import {singleton} from 'aurelia-framework';
// import {transient} from 'aurelia-framework';

// @singleton() //specifies singleton
// @transient() //specifies instance based
export class DataCache{
    constructor(){
        //blank.
        console.log('DataCache constructor ran.');
    }

    getEvents(){
        return [
            {id: 1, title: "Aurelia Fundamentals"},
            {id: 2, title: "Data-Centric SPAs with BreezeJS"},
            {id: 3, title: "Advanced Javascript Techniques"}
        ];
    };
}