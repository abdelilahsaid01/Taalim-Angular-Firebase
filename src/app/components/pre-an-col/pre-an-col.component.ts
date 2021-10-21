import { Tas3aPcService } from './../../services/tas3a-pc.service';
import { Tas3aMathService } from './../../services/tas3a-math.service';
import { Tas3aCtrPcService } from './../../services/tas3a-ctr-pc.service';
import { Tas3aCtrMathService } from './../../services/tas3a-ctr-math.service';
import { TamnaPcService } from './../../services/tamna-pc.service';
import { TamnaMathService } from './../../services/tamna-math.service';
import { TamnaCtrPcService } from './../../services/tamna-ctr-pc.service';
import { TamnaCtrMathService } from './../../services/tamna-ctr-math.service';
import { AuthentificationService } from './../../services/authentification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sab3aCtrPcService } from './../../services/sab3a-ctr-pc.service';
import { Sab3aCtrMathService } from './../../services/sab3a-ctr-math.service';
import { Controles } from './../../models/controles';
import { Sab3aPcService } from './../../services/sab3a-pc.service';
import { Sab3aMathService } from './../../services/sab3a-math.service';
import { Tas3aRegionalMathService } from './../../services/tas3a-regional-math.service';
import { Tas3aRegionalPcService } from './../../services/tas3a-regional-pc.service';
import { BacNationalMathService } from './../../services/bac-national-math.service';
import { BacNationalPcService } from './../../services/bac-national-pc.service';
import { TroncCtrMathService } from './../../services/tronc-ctr-math.service';
import { TroncCtrPcService } from './../../services/tronc-ctr-pc.service';
import { TroncMathService } from './../../services/tronc-math.service';
import { TroncPcService } from './../../services/tronc-pc.service';
import { OlaBacMathService } from './../../services/olaBac-math.service';
import { OlaBacPcService } from './../../services/olaBac-pc.service';
import { OlaBacCtrMathService } from './../../services/olaBac-ctr-math.service';
import { OlaBacCtrPcService } from './../../services/olaBac-ctr-pc.service';

import { TanyaBacCtrMathService } from './../../services/tanya-bac-ctr-math.service';
import { TanyaBacCtrPcService } from './../../services/tanya-bac-ctr-pc.service';
import { TanyaBacMathService } from './../../services/tanya-bac-math.service';
import { TanyaBacPcService } from './../../services/tanya-bac-pc.service';







import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { Examens } from 'src/app/models/examens';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pre-an-col',
  templateUrl: './pre-an-col.component.html',
  styleUrls: ['./pre-an-col.component.css']
})
export class PreAnColComponent implements OnInit {
  param: string
  matiere: string
  alert: string
  cycle: string
  cours: Cours[]
  examens: Examens[]
  coursFilter: Cours[]
  examensFilter: Examens[]
  cours1: Cours[]
  controles: Controles[]
  logged: boolean = false
  coursPc
  cousMath
  CtrMath
  CtrPc
  examensMath
  examensPc
  is_controle = true
  title = "Ajouter un cours";
  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private route: ActivatedRoute,
    private sab3aMathService: Sab3aMathService,
    private sab3aPcService: Sab3aPcService,
    private sab3aCtrPcService: Sab3aCtrPcService,
    private sab3aCtrMathService: Sab3aCtrMathService,
    private tamnaCtrMathService: TamnaCtrMathService,
    private tamnaCtrPcService: TamnaCtrPcService,
    private tamnaMathService: TamnaMathService,
    private tamnaPcService: TamnaPcService,
    private tas3aCtrMathService: Tas3aCtrMathService,
    private tas3aCtrPcService: Tas3aCtrPcService,
    private tas3aMathService: Tas3aMathService,
    private tas3aPcService: Tas3aPcService,
    private tas3aRegionalMathService: Tas3aRegionalMathService,
    private tas3aRegionalPcService: Tas3aRegionalPcService,
    private bacNationalMathService: BacNationalMathService,
    private bacNationalPcService: BacNationalPcService,
    private troncCtrMathService: TroncCtrMathService,
    private troncCtrPcService: TroncCtrPcService,
    private troncMathService: TroncMathService,
    private troncPcService: TroncPcService,
    private olaBacMathService: OlaBacMathService,
    private olaBacPcService: OlaBacPcService,
    private olaBacCtrMathService: OlaBacCtrMathService,
    private olaBacCtrPcService: OlaBacCtrPcService,
    private tanyaBacCtrMathService: TanyaBacCtrMathService,
    private tanyaBacCtrPcService: TanyaBacCtrPcService,
    private tanyaBacMathService: TanyaBacMathService,
    private tanyaBacPcService: TanyaBacPcService
  ) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    this.authService.getAuth().subscribe(auth => { if (auth) { this.logged = true } })
    this.params()
  }

  params() {
    this.param = this.route.snapshot.params['param']
    /// College
    /////// 1AC
    if (this.param == "1AcMath") {
      this.cousMath = this.sab3aMathService
      this.CtrMath = this.sab3aCtrMathService
      this.matiere = "Mathématique"
      this.alert = "1ère Année Collège"
      this.cycle = "college"
      this.getAllMath();
    }
    else if (this.param == "1AcPc") {
      this.coursPc = this.sab3aPcService
      this.CtrPc = this.sab3aCtrPcService
      this.matiere = "Physique"
      this.alert = "1ère Année Collège"
      this.cycle = "college"
      this.getAllPc();
    }
    /////// 2AC
    else if (this.param == "2AcMath") {
      this.cousMath = this.tamnaMathService
      this.CtrMath = this.tamnaCtrMathService
      this.matiere = "Mathématique"
      this.alert = "2ème Année Collège"
      this.cycle = "college"
      this.getAllMath();
    }
    else if (this.param == "2AcPc") {
      this.coursPc = this.tamnaPcService
      this.CtrPc = this.tamnaCtrPcService
      this.matiere = "Physique"
      this.alert = "2ème Année Collège"
      this.cycle = "college"
      this.getAllPc();
    }
    /////// 3AC
    else if (this.param == "3AcMath") {
      this.cousMath = this.tas3aMathService
      this.CtrMath = this.tas3aCtrMathService
      this.matiere = "Mathématique"
      this.alert = "3ème Année Collège"
      this.cycle = "college"
      this.getAllMath();
    }
    else if (this.param == "3AcPc") {
      this.coursPc = this.tas3aPcService
      this.CtrPc = this.tas3aCtrPcService
      this.matiere = "Physique"
      this.alert = "3ème Année Collège"
      this.cycle = "college"
      this.getAllPc();
    }
    /////// Examen régional 3AC
    else if (this.param == "regionalMath") {
      this.examensMath = this.tas3aRegionalMathService
      this.matiere = "Mathématique"
      this.alert = "Examens régionaux en 3ème Année Collège"
      this.cycle = "regional"
      this.title = "Ajouter un examen"
      this.is_controle = false
      this.getAllExamensMath();
    }
    else if (this.param == "regionalPc") {
      this.examensPc = this.tas3aRegionalPcService
      this.matiere = "Physique"
      this.alert = "Examens régionaux en 3ème Année Collège"
      this.cycle = "regional"
      this.title = "Ajouter un examen"
      this.is_controle = false
      this.getAllExamensPc();
    }

    /// Lycee
    /////// Tronc Cummun
    else if (this.param == "troncMath") {
      this.cousMath = this.troncMathService
      this.CtrMath = this.troncCtrMathService
      this.matiere = "Mathématique"
      this.alert = "Tronc Commun"
      this.cycle = "lycee"
      this.getAllMath();
    }
    else if (this.param == "troncPc") {
      this.coursPc = this.troncPcService
      this.CtrMath = this.troncCtrPcService
      this.matiere = "Physique"
      this.alert = "Tronc Commun"
      this.cycle = "lycee"
      this.getAllPc();
    }
    /////// 1 BAC
    else if (this.param == "1BacMath") {
      this.cousMath = this.olaBacMathService
      this.CtrMath = this.olaBacCtrMathService
      this.matiere = "Mathématique"
      this.alert = "1Bac Sience EX"
      this.cycle = "lycee"
      this.getAllMath();
    }
    else if (this.param == "1BacPc") {
      this.coursPc = this.olaBacPcService
      this.CtrMath = this.olaBacCtrPcService
      this.matiere = "Physique"
      this.alert = "1Bac Sience EX"
      this.cycle = "lycee"
      this.getAllPc();
    }
    /////// 2 BAC
    else if (this.param == "2BacMath") {
      this.cousMath = this.tanyaBacMathService
      this.CtrMath = this.tanyaBacCtrMathService
      this.matiere = "Mathématique"
      this.alert = "2Bac Sience EX"
      this.cycle = "lycee"
      this.getAllMath();
    }
    else if (this.param == "2BacPc") {
      this.coursPc = this.tanyaBacPcService
      this.CtrMath = this.tanyaBacCtrPcService
      this.matiere = "Physique"
      this.alert = "2Bac Sience EX"
      this.cycle = "lycee"
      this.getAllPc();
    }
    /////// Examen National 2 BAC
    else if (this.param == "nationalMath") {
      this.examensMath = this.bacNationalMathService
      this.matiere = "Mathématique"
      this.alert = "Examens Nationaux en Baccalauréat"
      this.cycle = "national"
      this.title = "Ajouter un examen"
      this.is_controle = false
      this.getAllExamensMath();
    }
    else if (this.param == "nationalPc") {
      this.examensPc = this.bacNationalPcService
      this.matiere = "Physique"
      this.alert = "Examens Nationaux en Baccalauréat"
      this.cycle = "national"
      this.title = "Ajouter un examen"
      this.is_controle = false
      this.getAllExamensPc();
    }
  }

  getAllPc() {
    this.coursPc.getCours().subscribe(res => {
      this.coursFilter = res
      const varr = (a, b) => a.num - b.num;
      this.cours = this.coursFilter.sort(varr);
    })
    this.CtrPc.getCours().subscribe(res => {
      this.controles = res
      const varr = (a, b) => a.num - b.num;
      this.controles.sort(varr);
    })
  }

  getAllMath() {
    this.cousMath.getCours().subscribe(res => {
      this.coursFilter = res
      console.log(res)
      const varr = (a, b) => a.num - b.num;
      this.cours = this.coursFilter.sort(varr);
    })
    this.CtrMath.getCours().subscribe(res => {
      this.controles = res
      const varr = (a, b) => a.num - b.num;
      this.controles.sort(varr);
    })
  }

  getAllExamensMath() {
    this.examensMath.getCours().subscribe(res => {
      this.examensFilter = res
      const varr = (a, b) => a.annee - b.annee;
      this.examens = this.examensFilter.sort(varr);
    })
  }

  getAllExamensPc() {
    this.examensPc.getCours().subscribe(res => {
      this.examensFilter = res
      const varr = (a, b) => a.annee - b.annee;
      this.examens = this.examensFilter.sort(varr);
    })
  }

  deleteCours(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        if (this.matiere == "Mathématique") { this.cousMath.deleteCours(id) }
        else if (this.matiere == "Physique") { this.coursPc.deleteCours(id) }
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 3000
        }
        )
      }
    })
  }

  deleteCtr(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        if (this.matiere == "Mathématique") { this.CtrMath.deleteCours(id) }
        if (this.matiere == "Physique") { this.CtrPc.deleteCours(id) }
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 3000
        }
        )
      }
    })
  }

  deleteExamen(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        if (this.matiere == "Mathématique") { this.examensMath.deleteCours(id) }
        if (this.matiere == "Physique") { this.examensPc.deleteCours(id) }
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 3000
        }
        )
      }
    })
  }




  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


  search(data: string) {
    this.cours = (data) ? this.cours.filter(res => res.nom.toLowerCase().includes(data.toLowerCase())) : this.coursFilter
  }
}
