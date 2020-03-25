import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-allpolicies',
  templateUrl: './allpolicies.component.html',
  styleUrls: ['./allpolicies.component.scss'],
})
export class AllpoliciesComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  allPolicies:any = {};
  ngOnInit() {
    this.allPolicies =this.apiService.getAllpolicies();
  }

}
