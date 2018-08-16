import { Observable } from 'rxjs/Observable';
import { resolve } from 'path';

//Normal
const asyncA = () => new Promise((resolve) => {
    setTimeout(() => {resolve('Normal A')}, 1000);
}); 

const asyncB = () => new Promise((resolve) => {
    setTimeout(() => {resolve('Normal B')}, 1000);
});

const asyncC = () => new Promise((resolve) => {
    setTimeout(() => {resolve('Normal C')}, 1000);
});

asyncA()
    .then(obj => {console.log(obj)})
    .then(asyncB)
    .then(obj => {console.log(obj)})
    .then(asyncC)
    .then(obj => {console.log(obj)});

//RxJS
const myObservable = Observable.create(observer => {
    setTimeout(() => {
        observer.next('RxJS A');
        setTimeout(() => {
            observer.next('RxJS B');
            setTimeout(() => {
                observer.next('RxJS C');
                observer.complete();
            }, 1000)
        }, 1000)
    }, 1000)
});

myObservable.subscribe(obj => console.log(obj));
