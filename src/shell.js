import toastr from 'toastr';

export class Shell {
    constructor(){
        
    }

    configureRouter(config, router){
        this.router = router;
        config.title = "Aurelia Test Application";
        config.options.pushState = true;  //remove the # from the paths
        config.addPipelineStep('modelbind', ToastNavResult); //if we want to add something to the global pipeline
        config.map([
            {route: ['', 'events'], name: 'Events', title: 'Events', nav: true, viewPorts: {mainContent: { moduleId: 'events/events' }, sideBar: { moduleId: "sideBar/sponsors" }}} //use blank route or events route.
           ,{route: 'eventDetail/:eventId', name: 'eventDetail', viewPorts: {mainContent: { moduleId: 'events/eventDetail' }, sideBar: { moduleId: "sideBar/ads" }}}
           ,{route: 'jobs', name: 'Jobs', title: 'Jobs', nav: true, viewPorts: {mainContent: { moduleId: 'jobs/jobs' }, sideBar: { moduleId: "sideBar/ads" }}}
           ,{route: 'discussion', name: 'Discussion', title: 'Discussion', nav: true, viewPorts: {mainContent: { moduleId: 'discussion/discussion' }, sideBar: { moduleId: "sideBar/ads" }}}
        ]);
    }
}

class ToastNavResult{
    run(navigationInstruction, next){
        return next().then(a => {
            toastr.info(a.status);
            return a;
        });
    }
}