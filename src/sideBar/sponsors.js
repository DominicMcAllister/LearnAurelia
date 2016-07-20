import {computedFrom} from "aurelia-framework";

export class Sponsors {
    constructor(){
        this.title="Sponsors";
        setTimeout(() => this.title = "Sponsors!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", 3000);

        this.mapCollection = new window.Map();
        this.mapCollection.set("a", "Alpha");
        this.mapCollection.set("b", "Beta");
        this.mapCollection.set("c", "Charlie");
        this.mapCollection.set("d", "Delta");

        this.styleString = "background: red";
        this.styleObject = { background: "green" };
        this.yellowBackgroundColor = "yellow";

        this.states = ["Alabama", "Florida", "Georgia", "Tennessee", "Texas", "Wyoming"];
        this.states2 = [ {Name: "Alabama", Abbreviation: "AL"}, {Name: "Florida", Abbreviation: "FL"}, {Name: "Georgia", Abbreviation: "GA"}, ];

        this.person = new Person();

        this.trades = [{amount: 99.93, time: new Date()}];
        setInterval(() => this.trades.push({amount: Math.round(Math.random() * 100.00, 2), time: new Date()}), 3000);
    }

    Persist(foo){
        switch (foo) {
            case 'PersistedSponsor1':
                this.PersistedSponsor1 = this.SponsorName;
                break;
            case 'PersistedSponsor2':
                this.PersistedSponsor2 = this.SponsorName;
                break;
            case 'PersistedSponsor3':
                this.PersistedSponsor3 = this.SponsorName;
                break;
        }
    }
}

class Person{
    constructor(){
        this.firstName = "Dominic";
        this.lastName = "McAllister";
    }

    @computedFrom("firstName", "lastName")
    get fullName() { return this.firstName + " " + this.lastName; }
}