import {inject, NewInstance} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {ValidationRules} from 'aurelia-validatejs';

@inject(DataRepository, ValidationController, NewInstance.of(ValidationRules))
export class AddJob{
    constructor(dataRepository, validationController, validationRules){
        this.dataRepository = dataRepository;
        this.dataRepository.getStates().then(states => this.states = states);
        this.dataRepository.getJobTypes().then(jt => this.jobTypes = jt);
        this.dataRepository.getJobSkills().then(js => this.jobSkills = js);

        this.job = { jobType: "Full Time", title: "", description: "", jobSkills: [] };

        //TODO: get validation to run properly
        this.validationController = validationController;
        this.validationController.validateTrigger = validateTrigger.manual;

        this.validationRules = validationRules.on(this.job)
                                              .ensure('title').required()
                                              .ensure('description').required();
        // http://blog.durandal.io/2016/06/14/new-validation-alpha-is-here/
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