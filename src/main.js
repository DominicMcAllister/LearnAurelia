import 'bootstrap';
import {ViewLocator} from 'aurelia-framework';
import {DataCache} from 'dataCache';

export function configure(aurelia){

    aurelia.use.instance('githubApiRoot', 'https://api.github.com/')
    aurelia.use.globalResources('common/dateFormat');

    aurelia.use.standardConfiguration()
               .developmentLogging();
               
    //explicitely declare singleton for datacache
    aurelia.use.singleton(DataCache);

    //override the locator so we can separate the views and models
    // ViewLocator.prototype.convertOriginToViewUrl = (origin) =>{
    //     let moduleId = origin.moduleId;
    //     var id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts')) ? moduleId.substring(0, moduleId.length - 3) : moduleId;
    //     return id.replace("viewmodels", "views") + '.html';
    // };

    // aurelia.start().then(a => a.setRoot("viewmodels/shell"));
    aurelia.start().then(a => a.setRoot("shell"));
}