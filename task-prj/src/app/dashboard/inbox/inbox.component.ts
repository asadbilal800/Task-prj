import {Component, OnInit} from '@angular/core';
import {SendMessageEvent} from "@progress/kendo-angular-conversational-ui";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, take} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {signupModel} from "../../../common/models/register.model";
import {USER} from "../../../common/globals";
import firebase from "firebase/compat/app";
import FieldValue = firebase.firestore.FieldValue;
import {CommonService} from "../../../common/Services/common.service";


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {


  user = USER;
  chatData$: Observable<any>;
  userUID: string;
  recipientUserUID: string;
  listOfAvailableUsers: signupModel[] = []
  currentChat;

  constructor(private firestore: AngularFirestore, private firestoreAuth: AngularFireAuth,
              private commonSrv: CommonService) {
  }

  ngOnInit(): void {

    this.commonSrv.washNotification$.next();
    this.firestoreAuth.user.subscribe(userData => {
      this.firestore.collection('mydb')
        .doc("xnr4pfHSdTTbfPfPFiRO")
        .collection('users')
        .doc(userData?.uid)
        .update({'unSeenMessages': 0})
    })

    this.firestoreAuth.user.subscribe(userData => {
      this.userUID = userData.uid
      //get all users
      this.firestore.collection('mydb')
        .doc('xnr4pfHSdTTbfPfPFiRO')
        .collection('users')
        .valueChanges()
        .pipe(take(1))
        .subscribe((data) => {
          data.forEach(user => {
            if (user.uid !== this.userUID) {
              this.listOfAvailableUsers.push(user as signupModel)
            }
          })
        })
    })


  }

  sendMessage(e: SendMessageEvent): void {
    if (this.recipientUserUID) {
      this.firestore.collection('mydb')
        .doc("xnr4pfHSdTTbfPfPFiRO")
        .collection('users')
        .doc(this?.userUID)
        .collection(`chat-${this.recipientUserUID}`)
        .add(e.message).then(() => {
        e.message['author'] = {id: 0};
        this.firestore.collection('mydb')
          .doc("xnr4pfHSdTTbfPfPFiRO")
          .collection('users')
          .doc(this.recipientUserUID)
          .collection(`chat-${this.userUID}`)
          .add(e.message)
          .then(() => {
            this.firestore.collection('mydb')
              .doc("xnr4pfHSdTTbfPfPFiRO")
              .collection('users')
              .doc(this?.recipientUserUID)
              .update({'unSeenMessages': FieldValue.increment(1)})
          });
      });
    }

  }

  showChat(uid: string, username: string) {
    this.recipientUserUID = uid;
    this.currentChat = username
    this.chatData$ = this.firestore.collection('mydb')
      .doc("x" +
        "nr4pfHSdTTbfPfPFiRO")
      .collection('users')
      .doc(this.userUID)
      .collection(`chat-${this.recipientUserUID}`)
      .valueChanges()
      .pipe(
        map(data => {
          console.log(data)
          let sortedArray = data.sort(function (a, b) {
            return a['timestamp'] - b['timestamp']
          });
          sortedArray.forEach(item => {
            delete item['timestamp']
          })
          return sortedArray
        })
      )
  }
}
