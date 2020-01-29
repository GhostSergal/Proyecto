import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemInfoPage } from '../item-info/item-info.page';
import { Observable } from 'rxjs';
import { movieInterface } from 'src/app/Models/movies.interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  private movieload: Observable<movieInterface[]>;

  constructor(private modalCtrl: ModalController, private movieservice:MovieServiceService) { }

  //origin of the loaded information
  ngOnInit() {
    this.movieload=this.movieservice.getMovies();
    this.movieservice.getMovies().subscribe(res=>{console.log('Movies',res);});
    this.movieservice.getMovies().subscribe(console.log);
  }
  //abrir modal
  async OpenModal(){
    const modal= await this.modalCtrl.create({
      component: ItemInfoPage
    });
    await modal.present();
  }
}
