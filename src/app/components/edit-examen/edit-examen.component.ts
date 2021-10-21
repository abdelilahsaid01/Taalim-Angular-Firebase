import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Examens } from 'src/app/models/examens';
import { Tas3aRegionalMathService } from 'src/app/services/tas3a-regional-math.service';
import { Tas3aRegionalPcService } from 'src/app/services/tas3a-regional-pc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-examen',
  templateUrl: './edit-examen.component.html',
  styleUrls: ['./edit-examen.component.css']
})
export class EditExamenComponent implements OnInit {
  id: string
  param: string
  examen: Examens
  examenMath
  examenPc
  matiere: string
  constructor(private route: ActivatedRoute,
    private tas3aRegionalMathService: Tas3aRegionalMathService,
    private tas3aRegionalPcService: Tas3aRegionalPcService,
    private router: Router) { }
  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    this.params()
  }
  
  params() {
    this.id = this.route.snapshot.params['id']
    this.param = this.route.snapshot.params['param']
    if (this.param == "regionalMath") { this.examenMath = this.tas3aRegionalMathService; this.getExamenMath(); this.matiere = "Mathématique" }
    if (this.param == "regionalPc") { this.examenPc = this.tas3aRegionalPcService; this.getExamenPc(); this.matiere = "Physique" }
  }


  getExamenMath() {
    this.examenMath.getCoursById(this.id).subscribe(res => {
      this.examen = res
    })
  }

  getExamenPc() {
    this.examenPc.getCoursById(this.id).subscribe(res => {
      this.examen = res
    })
  }


  updateExamen() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.value) {
        this.examen.id=this.id
        if(this.matiere=="Mathématique") this.examenMath.updateCours(this.examen)
        else if(this.matiere=="Physique") this.examenPc.updateCours(this.examen)
        this.router.navigateByUrl('/source/'+this.param)
         Swal.fire({
          title:  'Updated!',
          text:'Your file has been updated.',
         icon:  'success',
         timer: 3000
        })}
      })
    }

}
