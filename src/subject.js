import { Subject } from 'rxjs/Subject'

const mySubject = new Subject();
mySubject.subscribe({
    next: obj => console.log(`Observer A: ${obj}`),
});
mySubject.subscribe({
    next: obj => console.log(`Observer B: ${obj}`),
});
mySubject.next(1);
mySubject.next(2);
