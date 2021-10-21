import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  getCollection:AngularFirestoreCollection<Cours>
  constructor(private afs: AngularFirestore, collection:string) { 
    this.getCollection=this.afs.collection(collection)
  }

  getCours() {
    return this.getCollection.snapshotChanges().pipe(  //Récupérer la liste avec ID
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Cours;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

 getCoursById(id):Observable<Cours> {
   return this.getCollection.doc(id).valueChanges()  //Récupérer le doc sans ID
  } 

 updateCours(cours: Cours) {
    this.getCollection.doc(cours.id).update(cours)
  }

  deleteCours(id) {
   this.getCollection.doc(id).delete()
  }

   addCours(cours:Cours) {
    this.getCollection.add(cours)
  }

// sendEmail() {
//     this.getCollection.add({
//     to: 'someone@example.com',
//     message: {
//       subject: 'Hello from Firebase!',
//       html: 'This is an <code>HTML</code> email body.',
//     },
//   })
// }



 
}
