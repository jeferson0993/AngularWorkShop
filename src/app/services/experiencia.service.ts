import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Experiencia } from '../models/experiencia';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ExperienciaService {

  private experienciasUrl = 'http://localhost:8080/AngularWorkshopBackend/experiencias';

  constructor(private http: HttpClient) { }

  getexperiencias (): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.experienciasUrl)
      .pipe(
        tap(_ => this.log('fetched experiencias')),
        catchError(this.handleError<Experiencia[]>('getexperiencias', []))
      );
  }

  getexperienciaNo404<Data>(id: number): Observable<Experiencia> {
    const url = `${this.experienciasUrl}/?id=${id}`;
    return this.http.get<Experiencia[]>(url)
      .pipe(
        map(experiencias => experiencias[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} experiencia id=${id}`);
        }),
        catchError(this.handleError<Experiencia>(`getexperiencia id=${id}`))
      );
  }
  
  getexperiencia(id: number): Observable<Experiencia> {
    const url = `${this.experienciasUrl}/${id}`;
    return this.http.get<Experiencia>(url).pipe(
      tap(_ => this.log(`fetched experiencia id=${id}`)),
      catchError(this.handleError<Experiencia>(`getexperiencia id=${id}`))
    );
  }

  searchexperiencias(term: string): Observable<Experiencia[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Experiencia[]>(`${this.experienciasUrl}/?cargo=${term}`).pipe(
      tap(_ => this.log(`found experiencias matching "${term}"`)),
      catchError(this.handleError<Experiencia[]>('searchexperiencias', []))
    );
  }

  addexperiencia (experiencia: Experiencia, candidato_id: number): Observable<Experiencia> {
    console.log("experiencia a ser inserida: ", experiencia);
    experiencia.candidato_id = candidato_id;
    return this.http.post<Experiencia>(this.experienciasUrl, experiencia, httpOptions).pipe(
      tap((newexperiencia: Experiencia) => this.log(`added experiencia => ${newexperiencia.cargo}`)),
      catchError(this.handleError<Experiencia>('addexperiencia'))
    );
  }

  deleteexperiencia (experiencia: Experiencia | number): Observable<Experiencia> {
    const id = typeof experiencia === 'number' ? experiencia : experiencia.id;
    const url = `${this.experienciasUrl}/${id}`;

    return this.http.delete<Experiencia>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted experiencia id=${id}`)),
      catchError(this.handleError<Experiencia>('deleteexperiencia'))
    );
  }

  updateexperiencia (experiencia: Experiencia): Observable<any> {
    return this.http.put(this.experienciasUrl, experiencia, httpOptions).pipe(
      tap(_ => this.log(`updated experiencia id=${experiencia.id}`)),
      catchError(this.handleError<any>('updateexperiencia'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`experienciaService: ${message}`);
  }
}
