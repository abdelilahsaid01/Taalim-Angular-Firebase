import { CoursService } from './cours.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tas3aPcService extends CoursService {

  constructor(afs: AngularFirestore) {
    super(afs, "cours3AcPc");
  }
}
