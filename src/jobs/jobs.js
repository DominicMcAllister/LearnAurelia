import toastr from 'toastr';
import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class Jobs{
    constructor(dataRepository){
        this.dataRepository = dataRepository;
    }

    activate(params, routeConfig, navigationInstruction){
        this.router = navigationInstruction.router;
        return this.dataRepository.getJobs().then(f => this.jobs = f);        
    }

    addJob(){
        this.router.navigateToRoute("addJob");
    }

    //used in the demo to reject the person coming into the view.
    // canActivate(params, routeConfig, navigationInstruction){

    //     var promise = new Promise((resolve, reject) =>
    //     {
    //         setTimeout(_ =>{
    //             toastr.info('Access denied.');
    //             resolve(false);
    //         }, 3000);
    //     });

    //     return promise;
    // }
}