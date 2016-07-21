import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router} from 'aurelia-router';
import {DialogService} from 'aurelia-dialog';
import {EditDialog} from 'events/EditDialog';

@inject(DataRepository, Router, DialogService, EditDialog)
export class EventDetail{
    constructor(dataRepository, router, dialogService, editDialog){
        this.dataRepository = dataRepository;
        this.router = router;
        this.dialogService = dialogService;
        this.editDialog = editDialog;
    }

    activate(params, routeConfig){
        var eventId = parseInt(params.eventId);
        this.event = this.dataRepository.getEvent(eventId);
    }

    goHome(){
        // this.router.navigate("#/events");
        this.router.navigateToRoute('Events', { /* no params */});
    }

    editEvent(event){
        var original = JSON.parse(JSON.stringify(event));
        this.dialogService.open({viewModel: EditDialog, model: this.event})
                          .then(result =>{
                              if(result.wasCancelled){
                                  this.event.title = original.title;
                                  this.event.description = original.description;
                              }
                          });
    }
}