import { Component, OnInit,ViewChild  } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-policyservicing',
  templateUrl: './policyservicing.component.html',
  styleUrls: ['./policyservicing.component.scss'],
})
export class PolicyservicingComponent implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor() { }

  ngOnInit() {}
  ScrollToTop(){
    this.content.scrollToTop(1500);
  }

}
