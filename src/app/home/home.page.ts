import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  kayitlar: any;
  not: string;
  userID: string;

  constructor(private firestoreservis: FirestoreService, private router: Router, public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userID = user.uid;
        console.log(this.userID);
        this.listele();
      } else {
        this.router.navigateByUrl('/login');
      }
    });

  }

  listele() {
    this.firestoreservis.notlariListele(this.userID).subscribe(data => {this.kayitlar = data; console.log(data); },  error => {});

}

  notOlustur() {
    const kayit = {};
    // eslint-disable-next-line @typescript-eslint/dot-notation
    kayit['not'] = this.not;

    this.firestoreservis.notOlustur(kayit, this.userID).then(sonuc => {
      this.not = null;
      console.log(sonuc);
    })
      .catch(error => {
        console.log(error);
      });
  }
  cikis() {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }

  notuGuncelle(secilenKayit) {
    // eslint-disable-next-line prefer-const
    let kayit = {};
    // eslint-disable-next-line @typescript-eslint/dot-notation
    kayit['not'] = secilenKayit.gNot;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    this.firestoreservis.notuGuncelle(secilenKayit.payload.doc.id, kayit, this.userID);
    secilenKayit.guncelleniyor = false;
  }

  notuSil(id) {
    this.firestoreservis.notuSil(id, this.userID);
  }

  notuDuzenle(kayit) {
    kayit.guncelleniyor = true;
    kayit.gNot = kayit.payload.doc.data().not;
  }



}
