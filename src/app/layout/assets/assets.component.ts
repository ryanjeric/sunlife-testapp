import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  total:String = '';
  assets:any = {};
  ngOnInit() {
    this.assets = this.apiService.getAssets();
    this.total = this.assets.reduce((sum,data) => {return data.value + sum},0);
  }

}
