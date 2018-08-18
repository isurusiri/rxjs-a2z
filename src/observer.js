import { Observable } from 'rxjs/Observable';

const myObservable = Observable.create((observer) => {
    console.log('Hello from observer');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});

myObservable.subscribe({
    next: obj => console.log(obj),
    error: err => console.log(err),    
    complete: () => console.log('Completed')
});

myObservable.subscribe({
    next: obj => console.log(obj),
    error: err => console.log(err),    
    complete: () => console.log('Completed')
});
