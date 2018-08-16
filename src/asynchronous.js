import { Observable } from 'rxjs/Observable';

// Normal
const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Normal'), 3000);
});
myPromise.then(obj => console.log(obj));

//RxJS
/*const myObservable = Observable.create((observer) => {
    setTimeout(() => {
        observer.next('RxJS'),
        observer.complete()
    }, 3000);
});

myObservable.subscribe(obj => console.log(obj));*/
Observable.create((observer) => {
    setTimeout(() => {
        observer.next('RxJS'),
        observer.complete()
    }, 3000);
}).subscribe(obj => console.log(obj));

const myObservable = Observable.create((observer) => {
    setTimeout(() => {
        observer.next('RxJS'),
        observer.complete()
    }, 3000);
});

myObservable.subscribe(obj => console.log(obj));
myObservable.subscribe(obj => console.log(obj.toLowerCase()));

//Output
//RxJS
//RxJS
//rxjs
//Normal
