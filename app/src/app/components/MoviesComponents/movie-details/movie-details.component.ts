// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { TmdbService } from '../../tmdb.service';

// @Component({
//   selector: 'app-movie-details',
//   templateUrl: './movie-details.component.html',
//   styleUrls: ['./movie-details.component.css']
// })
// export class MovieDetailsComponent implements OnInit {
//   movie: any;

//   constructor(private tmdbService: TmdbService, private route: ActivatedRoute) { }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       const id = params['id'];
//       if (id) {
//         this.tmdbService.getMovieById(id).subscribe(data => {
//           this.movie = data;
//         });
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); // <-- convertit l'ID en nombre
    this.tmdbService.getMovieDetails(id).subscribe((data) => {
      this.movie = data;
    });
  }
}
