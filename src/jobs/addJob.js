import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class AddJob{
    constructor(dataRepository){
        this.dataRepository = dataRepository;
        this.dataRepository.getStates().then(states => this.states = states);
        this.dataRepository.getJobTypes().then(jt => this.jobTypes = jt);
        this.dataRepository.getJobSkills().then(js => this.jobSkills = js);

        this.job = { jobType: "Full Time", jobSkills: [] };
    }

    activate(params, routeConfig, navigationInstruction){
        this.router = navigationInstruction.router;
    }

    save(){
        if(this.job.needDate){
            this.job.needDate = new Date(this.job.needDate);
        }
        this.dataRepository.addJob(this.job).then(j => this.router.navigateToRoute('jobs'));
    }
}