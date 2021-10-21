import { Tas3aPcService } from './../../services/tas3a-pc.service';
import { Tas3aMathService } from './../../services/tas3a-math.service';
import { TamnaPcService } from './../../services/tamna-pc.service';
import { TamnaMathService } from './../../services/tamna-math.service';
import { Sab3aPcService } from './../../services/sab3a-pc.service';
import { Sab3aMathService } from './../../services/sab3a-math.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OlaBacMathService } from 'src/app/services/olaBac-math.service';
import { OlaBacPcService } from 'src/app/services/olaBac-pc.service';
import { TroncMathService } from 'src/app/services/tronc-math.service';
import { TroncPcService } from 'src/app/services/tronc-pc.service';
import { TanyaBacMathService } from 'src/app/services/tanya-bac-math.service';
import { TanyaBacPcService } from 'src/app/services/tanya-bac-pc.service';
@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.css']
})
export class EditCoursComponent implements OnInit {
  cours:Cours
    id:string
    param: string
    matiere:string
    coursMath
    coursPc
    constructor(private route: ActivatedRoute,
      private router:Router,
      private sab3aMathService:Sab3aMathService,
      private sab3aPcService:Sab3aPcService,
      private tamnaMathService:TamnaMathService,
      private tamnaPcService:TamnaPcService,
      private tas3aMathService:Tas3aMathService,
      private tas3aPcService:Tas3aPcService,
      private troncMathService: TroncMathService,
      private troncPcService: TroncPcService,
      private olaBacMathService: OlaBacMathService,
      private olaBacPcService: OlaBacPcService,
      private tanyaBacMathService: TanyaBacMathService,
      private tanyaBacPcService: TanyaBacPcService,
      )
 { }
  
    ngOnInit(): void {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {return false;};
     this.params()
    }
  
    getCoursMath() {
      this.coursMath.getCoursById(this.id).subscribe(res=> {
        this.cours=res
      })}
  
      getCoursPc() {
        this.coursPc.getCoursById(this.id).subscribe(res=> {
          this.cours=res
        })}
  
  
updateCours() {
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
      this.cours.id=this.id
      if(this.matiere=="Mathématique") this.coursMath.updateCours(this.cours)
      else if(this.matiere=="Physique") this.coursPc.updateCours(this.cours)
      this.router.navigateByUrl('/source/'+this.param)
       Swal.fire({
        title:  'Updated!',
        text:'Your file has been updated.',
       icon:  'success',
       timer: 3000
      })}
    })
  }
  
  
  
  params() {
    this.id=this.route.snapshot.params['id'] 
   this.param=this.route.snapshot.params['param']
///////// 1AC
    if(this.param=="1AcMath") {this.coursMath=this.sab3aMathService;this.getCoursMath(); this.matiere="Mathématique"}
    if(this.param=="1AcPc") { this.coursPc=this.sab3aPcService;this.getCoursPc(); this.matiere="Physique"} 
//////////// 2AC
      if(this.param=="2AcMath") {this.coursMath=this.tamnaMathService;this.getCoursMath();this.matiere="Mathématique" }
      if(this.param=="2AcPc") {this.coursPc=this.tamnaPcService;this.getCoursPc();this.matiere="Physique" }
//////////// 3AC
        if(this.param=="3AcMath") { this.coursMath=this.tas3aMathService;this.getCoursMath();this.matiere="Mathématique" }
        if(this.param=="3AcPc") {this.coursPc=this.tas3aPcService;this.getCoursPc(); this.matiere="Physique"}  
//////////// Tronc
if(this.param=="troncMath") { this.coursMath=this.troncMathService;this.getCoursMath();this.matiere="Mathématique" }
if(this.param=="troncPc") {this.coursPc=this.troncPcService;this.getCoursPc(); this.matiere="Physique"}  
//////////// 1BAC
if(this.param=="1BacMath") { this.coursMath=this.olaBacMathService;this.getCoursMath();this.matiere="Mathématique" }
if(this.param=="1BacPc") {this.coursPc=this.olaBacPcService;this.getCoursPc(); this.matiere="Physique"}  
//////////// 2BAC
if(this.param=="1BacMath") { this.coursMath=this.tanyaBacMathService;this.getCoursMath();this.matiere="Mathématique" }
if(this.param=="1BacPc") {this.coursPc=this.tanyaBacPcService;this.getCoursPc(); this.matiere="Physique"}  
}

      

    

  
}
