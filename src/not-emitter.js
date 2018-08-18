import { Observable } from 'rxjs/Observable';

//Promise
const myPromise = new Promise((resolve) => {
    console.log('Hello from Promise');
    resolve(1);
    resolve(2);
    resolve(3);
});

myPromise.then(obj => console.log(obj));
myPromise.then(obj => console.log(obj));

const myObservable = Observable.create((observer) => {
    console.log('Hello from Observable');
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

myObservable.subscribe(obj => console.log(obj));
myObservable.subscribe(obj => console.log(obj));
