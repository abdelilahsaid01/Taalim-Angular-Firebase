import { CoursService } from './cours.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class Sab3aMathService extends CoursService {

  constructor(afs: AngularFirestore) {
    super(afs, "cours1AcMath");
  }
}
