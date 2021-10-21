import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Examens } from 'src/app/models/examens';
import { BacNationalMathService } from 'src/app/services/bac-national-math.service';
import { BacNationalPcService } from 'src/app/services/bac-national-pc.service';
import { Tas3aRegionalMathService } from 'src/app/services/tas3a-regional-math.service';
import { Tas3aRegionalPcService } from 'src/app/services/tas3a-regional-pc.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  param: string
  examen:Examens = {
    annee: "",
    linkExamen:"",
    linkRegion:"",
    linkCorrectionRegional:"",
  }
examenMath
examenPc
  matiere:string
  constructor(private route: ActivatedRoute,
    private tas3aRegionalMathService:Tas3aRegionalMathService,
    private tas3aRegionalPcService:Tas3aRegionalPcService,
    private bacNationalMathService:BacNationalMathService,
    private bacNationalPcService:BacNationalPcService,
    private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {return false;};
    this.params()
  }
  params() {
    this.param=this.route.snapshot.params['param']
    if(this.param=="regionalMath") {this.examenMath=this.tas3aRegionalMathService;this.matiere="Mathématique"}
    if(this.param=="regionalPc") {this.examenPc=this.tas3aRegionalPcService;this.matiere="Physique"}
    if(this.param=="nationalMath") {this.examenMath=this.bacNationalMathService;this.matiere="Mathématique"}
    if(this.param=="nationalPc") {this.examenPc=this.bacNationalPcService;this.matiere="Physique"}
}
addExamen() { 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    }).then((result) => {
      if (result.value) {
        if(this.matiere=="Mathématique") this.examenMath.addCours(this.examen)
        else if(this.matiere=="Physique") this.examenPc.addCours(this.examen)
        this.router.navigateByUrl('/source/'+this.param)
         Swal.fire({
          title:  'addet!',
          text:'Your file has been addet.',
         icon:  'success',
         timer: 3000
        })}
      })
}}