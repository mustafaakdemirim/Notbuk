import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore, public firebaseAuth: AngularFireAuth) { }

    // eslint-disable-next-line @typescript-eslint/naming-convention
  GirisYap(kullanici) {
    return this.firebaseAuth.signInWithEmailAndPassword(kullanici.eposta, kullanici.parola);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  KayitOl(kullanici) {
    return this.firebaseAuth.createUserWithEmailAndPassword(kullanici.eposta, kullanici.parola);
  }

  notlariListele(user)
  {
    return this.firestore.doc<any>('kullanicilar/' + user).collection('Notlar').snapshotChanges();
  }

  notOlustur(kayit, user)
  {
    return this.firestore.doc<any>('kullanicilar/' + user).collection('Notlar').add(kayit);
  }

   // eslint-disable-next-line @typescript-eslint/naming-convention
  notuSil(kayit_id,user) {
    this.firestore.doc('kullanicilar/' + user + '/Notlar/' + kayit_id).delete();
  }

     // eslint-disable-next-line @typescript-eslint/naming-convention
  notuGuncelle(kayit_id, kayit, user) {
    this.firestore.doc('kullanicilar/' + user + '/Notlar/' + kayit_id).update(kayit);
  }

  sifreyiSifirla(eposta)
  {
    return this.firebaseAuth.sendPasswordResetEmail(eposta);
  }

}

