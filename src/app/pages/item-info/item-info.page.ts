import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { movieInterface } from 'src/app/Models/movies.interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {

  constructor(private activroute: ActivatedRoute,private router:Router,private modalCtrl:ModalController,private movieservice:MovieServiceService) { }

  ngOnInit() {
  }

  //Salir Modal
  exitModal(){
    this.modalCtrl.dismiss();
  }
  ionViewWillEnter(){
    let id= this.activroute.snapshot.paramMap.get('id');
  }

}
