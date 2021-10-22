import {Component, OnInit} from '@angular/core';
import { SendMessageEvent, User} from "@progress/kendo-angular-conversational-ui";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  bot: User = {
    id: 0,
  };

  user: User = {
    id: 1,
  };
  chatData$: Observable<any>;
  userUID: string;
  recipientUserUID: string;

  constructor(private firestore: AngularFirestore, private firestoreAuth: AngularFireAuth,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.router.params.subscribe(data => {
      this.recipientUserUID = data['id'];
    })

    this.firestoreAuth.user.subscribe(data => {
      this.userUID = data.uid
      this.chatData$ = this.firestore.collection('users')
        .doc(this.userUID)
        .collection('chat')
        .valueChanges()
        .pipe(
          map(data => {
            let sortedArray = data.sort(function (a, b) {
              return a['timestamp'] - b['timestamp']
            });
            sortedArray.forEach(item => {
              delete item['timestamp']
            })
            return sortedArray
          })
        )
    })


  }

  public sendMessage(e: SendMessageEvent): void {
    this.firestore.collection('users').doc(this.userUID)
      .collection('chat')
      .add(e.message).then(() => {
      e.message['author'] = {id: 0};
      this.firestore.collection('users').doc(this.recipientUserUID)
        .collection('chat')
        .add(e.message).then(() => {});
    });
  }

}
