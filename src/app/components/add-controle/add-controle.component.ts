import { Tas3aCtrPcService } from './../../services/tas3a-ctr-pc.service';
import { Tas3aCtrMathService } from './../../services/tas3a-ctr-math.service';
import { TamnaCtrPcService } from './../../services/tamna-ctr-pc.service';
import { TamnaCtrMathService } from './../../services/tamna-ctr-math.service';
import { Sab3aCtrPcService } from './../../services/sab3a-ctr-pc.service';
import { Sab3aCtrMathService } from './../../services/sab3a-ctr-math.service';
import { Controles } from './../../models/controles';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TroncCtrMathService } from './../../services/tronc-ctr-math.service';
import { TroncCtrPcService } from './../../services/tronc-ctr-pc.service';
import { OlaBacCtrMathService } from './../../services/olaBac-ctr-math.service';
import { OlaBacCtrPcService } from './../../services/olaBac-ctr-pc.service';
import { TanyaBacCtrMathService } from 'src/app/services/tanya-bac-ctr-math.service';
import { TanyaBacCtrPcService } from 'src/app/services/tanya-bac-ctr-pc.service';
@Component({
  selector: 'app-add-controle',
  templateUrl: './add-controle.component.html',
  styleUrls: ['./add-controle.component.css']
})
export class AddControleComponent implements OnInit {

  param: string
  controle: Controles = {
    num: "",
    semestre: "",
    linkControle: "",
  }
  ctrMath
  ctrPc
  matiere: string
  constructor(private route: ActivatedRoute,
    private sab3aCtrMathService: Sab3aCtrMathService,
    private sab3aCtrPcService: Sab3aCtrPcService,
    private tamnaCtrMathService: TamnaCtrMathService,
    private tamnaCtrPcService: TamnaCtrPcService,
    private tas3aCtrMathService: Tas3aCtrMathService,
    private tas3aCtrPcService: Tas3aCtrPcService,
    private troncCtrMathService: TroncCtrMathService,
    private troncCtrPcService: TroncCtrPcService,
    private olaBacCtrMathService: OlaBacCtrMathService,
    private olaBacCtrPcService: OlaBacCtrPcService,
    private tanyaBacCtrMathService: TanyaBacCtrMathService,
    private tanyaBacCtrPcService: TanyaBacCtrPcService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    this.params()
  }

  params() {
    this.param = this.route.snapshot.params['param']
    ////// 1AC
    if (this.param == "1AcMath") { this.ctrMath = this.sab3aCtrMathService; this.matiere = "Mathématique" }
    if (this.param == "1AcPc") { this.ctrPc = this.sab3aCtrPcService; this.matiere = "Physique" }
    ////// 2AC
    if (this.param == "2AcMath") { this.ctrMath = this.tamnaCtrMathService; this.matiere = "Mathématique" }
    if (this.param == "2AcPc") { this.ctrPc = this.tamnaCtrPcService; this.matiere = "Physique" }
    ////// 3AC
    if (this.param == "3AcMath") { this.ctrMath = this.tas3aCtrMathService; this.matiere = "Mathématique" }
    if (this.param == "3AcPc") { this.ctrPc = this.tas3aCtrPcService; this.matiere = "Physique" }
    ////// Tronc
    if (this.param == "troncMath") { this.ctrMath = this.troncCtrMathService; this.matiere = "Mathématique" }
    if (this.param == "troncPc") { this.ctrPc = this.troncCtrPcService; this.matiere = "Physique" }
    ////// 1BAC
    if (this.param == "1BacMath") { this.ctrMath = this.olaBacCtrMathService; this.matiere = "Mathématique" }
    if (this.param == "1BacPc") { this.ctrPc = this.olaBacCtrPcService; this.matiere = "Physique" }
     ////// 2BAC
     if (this.param == "2BacMath") { this.ctrMath = this.tanyaBacCtrMathService; this.matiere = "Mathématique" }
     if (this.param == "2BacPc") { this.ctrPc = this.tanyaBacCtrPcService; this.matiere = "Physique" }
  }

  addCtr() {

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
        if (this.matiere == "Mathématique") this.ctrMath.addCours(this.controle)
        else if (this.matiere == "Physique") this.ctrPc.addCours(this.controle)
        this.router.navigateByUrl('/source/' + this.param)
        Swal.fire({
          title: 'addet!',
          text: 'Your file has been addet.',
          icon: 'success',
          timer: 3000
        })
      }
    })
  }
}