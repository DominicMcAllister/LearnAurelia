import toastr from 'toastr';

export class Jobs{
    canActivate(params, routeConfig, navigationInstruction){

        var promise = new Promise((resolve, reject) =>
        {
            setTimeout(_ =>{
                toastr.info('Access denied.');
                resolve(false);
            }, 3000);
        });

        return promise;
    }
}