import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '4d173b8ea31d76212a176dfd93996c60';

  constructor(private http: HttpClient) {}

  // -------------------------- Movies functions --------------------------
  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getTrendingMovies(): Observable<any> {
    const url = `${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getToRatedMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovieDetails(id: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getMovieGenres(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map((data: any) => {
        return data.genres.map((genre: any) => genre.name);
      })
    );
  }

  getMovieCredits(id: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // --------------------------bTvShows functions --------------------------
  getPopularTvShows(): Observable<any> {
    const url = `${this.baseUrl}/tv/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getTrendingTvShows(): Observable<any> {
    const url = `${this.baseUrl}/trending/tv/week?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getToRatedTvShows(): Observable<any> {
    const url = `${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getTvShowDetails(id: number): Observable<any> {
    const url = `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getTvShowGenres(tvId: number): Observable<any> {
    const url = `${this.baseUrl}/tv/${tvId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map((data: any) => {
        return data.genres.map((genre: any) => genre.name);
      })
    );
  }

  getTvShowCredits(id: number): Observable<any> {
    const url = `${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
