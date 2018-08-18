import { Observable } from 'rxjs/Observable'

new Promise((resolve) => {
    console.log('Hello from Promise');
    resolve(1);
});

Observable.create((observer) => {
    console.log('Hello from Observable');
    observer.next(1);
    observer.next(2);
    observer.next(3);
});
