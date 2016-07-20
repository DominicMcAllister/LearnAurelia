
import moment from 'moment';

export class DateFormatValueConverter{
    toView(value, format){
        if(!format) format = 'MM/DD/YYYY hh:mm a';

        return moment(value).format(format);
    }

    fromView(value){
        return moment(value);
    }
}