import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/map'

const array = [1, 2, 3];

console.log('Normal');
/*var newArray = array.map(element => `${element.toString()} + !!!`);
newArray.map(element => console.log(element));*/

array.map(element => console.log(`${element.toString()} + !!!`));

console.log('RxJS');
/*const arrayObservable = Observable.from(array).map(element => `${element.toString()} + !!!`);
arrayObservable.subscribe(obj => console.log(obj));*/

Observable.from(array).map(element => `${element.toString()} + !!!`).subscribe(obj => console.log(obj));
