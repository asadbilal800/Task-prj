import {Component, OnInit} from '@angular/core';
import {Message} from "@progress/kendo-angular-conversational-ui";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {


  seriesData: number[] = [1, 3, 5, 6, 5, 3, 5, 7, 8, 55];
  //list of latest messages is basically an array coming from firebase to fetch 10 latest
  // messages from firebase of user
  listOfLatestMsgs: Message[];
  // list of frequent user will fetch the frequent employees the user has chat with.
  frequestUser: any;


  constructor(private firestore: AngularFirestore, private firestoreAuth: AngularFireAuth) {
  }


  //on initialization iam just fetching the stats which i have just mentioed in the above comments.
  ngOnInit(): void {

    this.firestoreAuth.user.subscribe(userData => {
      if (userData) {
        this.firestore.collection('mydb')
          .doc("xnr4pfHSdTTbfPfPFiRO")
          .collection('users')
          .doc(userData.uid)
          .valueChanges()
          .subscribe(data => {
            this.frequestUser = data['friends'] ?? ''
          })
      }

    })


    this.firestoreAuth.user.subscribe(userData => {
      if (userData) {
        this.firestore.collection('mydb')
          .doc("xnr4pfHSdTTbfPfPFiRO")
          .collection('users')
          .doc(userData.uid)
          .collection(`total-messages-received`)
          .valueChanges()
          .pipe(
            map(data => {
              let sortedArray = data.sort(function (a, b) {
                return a['timestamp'] - b['timestamp']
              });
              return sortedArray.slice(sortedArray.length - 10, sortedArray.length)
            })
          )
          .subscribe(data => {
            this.listOfLatestMsgs = data as Message[]
          })
      }

    })
  }

}
