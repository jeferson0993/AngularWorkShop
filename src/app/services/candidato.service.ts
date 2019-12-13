import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Candidato } from '../models/candidato';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CandidatoService {

  private CandidatosUrl = 'https://fierce-escarpment-08191.herokuapp.com/api/v1/candidatos';

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<any> {
    return this.http.get<any>(this.CandidatosUrl)
      .pipe(
        tap(_ => this.log('fetched Candidatos')),
        catchError(this.handleError<any>('getCandidatos', []))
      );
  }

  getCandidatoNo404<Data>(id: number): Observable<Candidato> {
    const url = `${this.CandidatosUrl}/?id=${id}`;
    return this.http.get<Candidato[]>(url)
      .pipe(
        map(Candidatos => Candidatos[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Candidato id=${id}`);
        }),
        catchError(this.handleError<Candidato>(`getCandidato id=${id}`))
      );
  }

  getCandidato(id: number): Observable<Candidato> {
    const url = `${this.CandidatosUrl}/${id}`;
    return this.http.get<Candidato>(url).pipe(
      tap(_ => this.log(`fetched Candidato id=${id}`)),
      catchError(this.handleError<Candidato>(`getCandidato id=${id}`))
    );
  }

  searchCandidatos(term: string): Observable<Candidato[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Candidato[]>(`${this.CandidatosUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found Candidatos matching "${term}"`)),
      catchError(this.handleError<Candidato[]>('searchCandidatos', []))
    );
  }

  searchCandidatosByEstadoCivil(estadoCivil: string): Observable<any> {
    return this.http.get<Candidato[]>(`${this.CandidatosUrl}/nome/sexo/estado-civil/${estadoCivil}`).pipe(
      tap(_ => this.log(`found Candidatos matching "${estadoCivil}"`)),
      catchError(this.handleError<Candidato[]>('searchCandidatos', []))
    );
  }

  searchCandidatosBySexo(sexo: string): Observable<any> {
    return this.http.get<Candidato[]>(`${this.CandidatosUrl}/nome/sexo/${sexo}`).pipe(
      tap(_ => this.log(`found Candidatos matching "${sexo}"`)),
      catchError(this.handleError<Candidato[]>('searchCandidatos', []))
    );
  }

  searchCandidatosByNome(nome: string): Observable<any> {
    return this.http.get<Candidato[]>(`${this.CandidatosUrl}/nome/${nome}`).pipe(
      tap(_ => this.log(`found Candidatos matching "${nome}"`)),
      catchError(this.handleError<Candidato[]>('searchCandidatos', []))
    );
  }

  addCandidato(Candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.CandidatosUrl, Candidato, httpOptions).pipe(
      tap((newCandidato: Candidato) => this.log(`added Candidato => id=${newCandidato.id}`)),
      catchError(this.handleError<Candidato>('addCandidato'))
    );
  }

  deleteCandidato(Candidato: Candidato | number): Observable<Candidato> {
    const id = typeof Candidato === 'number' ? Candidato : Candidato.id;
    const url = `${this.CandidatosUrl}/${id}`;

    return this.http.delete<Candidato>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Candidato id=${id}`)),
      catchError(this.handleError<Candidato>('deleteCandidato'))
    );
  }

  updateCandidato(Candidato: Candidato): Observable<any> {
    return this.http.put(this.CandidatosUrl, Candidato, httpOptions).pipe(
      tap(_ => this.log(`updated Candidato id=${Candidato.id}`)),
      catchError(this.handleError<any>('updateCandidato'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`CandidatoService -> ${message}`);
  }
}
