export class Events{
    configureRouter(config, router){
        this.router = router;
        config.title = 'Events';
        config.options.pushState = true; //remove the # from the paths
        config.map([
            {route: ['', 'future'], moduleId: 'events/eventsList', name: 'future', title: 'Future Events', nav: true},
            {route: 'past', moduleId: 'events/eventsList', name: 'past', title: 'Past Events', nav: true, href: '/events/past'}
        ]);
    }
}