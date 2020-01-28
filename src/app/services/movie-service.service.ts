import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument,DocumentReference } from '@angular/fire/firestore';
import { map,take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { movieInterface } from '../Models/movies.interface'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private movies: Observable<movieInterface[]>;
  private CollectionMovies: AngularFirestoreCollection<movieInterface>;

  constructor(private firestore: AngularFirestore) { 
    this.CollectionMovies= this.firestore.collection<movieInterface>('Movies');
    this.movies= this.CollectionMovies.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const info=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id,...info};
        });
      })
    );
  }
  getMovies(): Observable<movieInterface[]>{
    return this.movies;
  }
  getSingleMovie(id: string):Observable<movieInterface>{
    return this.CollectionMovies.doc<movieInterface>(id).valueChanges().pipe(
      take(1),
      map(movie=>{
        movie.id=id;
        return movie;
      })
    );
  }
  RateMovie(movie: movieInterface): Promise<void>{
    return this.CollectionMovies.doc(movie.id).update({rating: movie.rating});
  }
}
