import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CoursService } from './cours.service';

@Injectable({
  providedIn: 'root'
})
export class Tas3aRegionalPcService extends CoursService {

  constructor(afs: AngularFirestore) {
    super(afs, "regional3AcPc");
  }
}
