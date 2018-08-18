import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const myObservable = Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
});

const multiplyObservable = myObservable.map(obj => obj * 2);
const filterObservable = myObservable.filter(obj => obj < 3);

console.log('MY_OBSERVABLE');
myObservable.subscribe(obj => console.log(obj));
console.log('MULTIPLY_OBSERVABLE');
multiplyObservable.subscribe(obj => console.log(obj));
console.log('FILTER_OBSERVABLE');
filterObservable.subscribe(obj => console.log(obj));
