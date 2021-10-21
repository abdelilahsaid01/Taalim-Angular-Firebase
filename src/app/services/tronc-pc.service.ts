import { CoursService } from './cours.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TroncPcService extends CoursService {

  constructor(afs: AngularFirestore) {
    super(afs, "coursTroncPc");
  }
}