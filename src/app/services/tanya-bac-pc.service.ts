import { AngularFirestore } from 'angularfire2/firestore';
import { CoursService } from './cours.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TanyaBacPcService extends CoursService {

  constructor(afs: AngularFirestore) {
    super(afs, "cours2BacPc");
  }
}
