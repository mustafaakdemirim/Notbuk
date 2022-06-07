import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  parola: string;
  eposta: string;
  girisHata: string;

  constructor(private firestoreservis: FirestoreService, private router: Router) { }

  ngOnInit() {
  }

  kayitOl() {

    if (!this.eposta) {
      return;
      }

      // eslint-disable-next-line prefer-const
      let kullanici = {
        parola: this.parola,
        eposta: this.eposta
      };
      // eslint-disable-next-line max-len
      this.firestoreservis.KayitOl(kullanici).then(() => this.router.navigateByUrl('/home')).catch(error => {console.log(error); this.girisHata = error.message; } );
        }

}
