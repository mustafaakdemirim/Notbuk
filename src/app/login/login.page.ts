import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  parola: string;
  eposta: string;
  girisHata: string;

  constructor(public alertController: AlertController, private firestoreservis: FirestoreService, private router: Router) { }

  ngOnInit() {
  }

  login() {

    if (!this.eposta) {
    return;
    }

    // eslint-disable-next-line prefer-const
    let kullanici = {
      parola: this.parola,
      eposta: this.eposta
    };
    // eslint-disable-next-line max-len
    this.firestoreservis.GirisYap(kullanici).then(() => this.router.navigateByUrl('/home')).catch(error => {console.log(error); this.girisHata = error.message; } );
      }

      async sifreHatirlat(eposta): Promise<any> {
        return await this.firestoreservis.sifreyiSifirla(eposta).then(() => true).catch(() => false);
      }
      async presentAlertPrompt() {
        const alert = await this.alertController.create({
          header: 'Şifre Hatırlat',
          inputs: [
            {
              name: 'email',
              type: 'text',
              value: this.eposta ? this.eposta : '',
              placeholder: this.eposta ? '' : 'eposta adresinizi giriniz'
            },
          ],
          buttons: [
            {
              text: 'Vazgeç',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Vazgeç');
              }
            }, {
              text: 'Tamam',
              handler: (value) => {
              if (value.email.length >= 6) {
                if (this.sifreHatirlat(value.email)) {
                  console.log(value.email + ' adresine gönderildi');
                } else {
                  console.log('Şifre Sıfırlama Hatası');
                }
              } else {
                console.log('Geçersiz e-posta adresi');
              }
              }
            }
          ]
        });
        await alert.present();
      }

}
