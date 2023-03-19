import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/MoviesComponents/movies/movies.component';
import { TvShowsComponent } from './components/TvShowsComponents/tv-shows/tv-shows.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/MoviesComponents/movie-details/movie-details.component';
import { PopularMoviesComponent } from './components/MoviesComponents/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './components/MoviesComponents/top-rated-movies/top-rated-movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrendingdMoviesComponent } from './components/MoviesComponents/trending-movies/trending-movies.component';
import { PopularTvShowsComponent } from './components/TvShowsComponents/popular-tv-shows/popular-tv-shows.component';
import { TopRatedTvShowsComponent } from './components/TvShowsComponents/top-rated-tv-shows/top-rated-tv-shows.component';
import { TrendingTvShowsComponent } from './components/TvShowsComponents/trending-tv-shows/trending-tv-shows.component';
import { TvShowDetailsComponent } from './components/TvShowsComponents/tv-show-details/tv-show-details.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { RegisterComponent } from './components/Authentification/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvShowsComponent,
    HomeComponent,
    MovieDetailsComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    NavbarComponent,
    TrendingdMoviesComponent,
    PopularTvShowsComponent,
    TopRatedTvShowsComponent,
    TrendingTvShowsComponent,
    TvShowDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
