import { CoursService } from './cours.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sab3aPcService extends CoursService {

  constructor(afs: AngularFirestore) {
    super(afs, "cours1AcPc");
  }
}
