import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Vaga } from '../models/vaga';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class VagaService {

  private vagasUrl = 'http://localhost:8080/WebServiceWorkshop/vagas';

  constructor(private http: HttpClient) { }

  getVagas (): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.vagasUrl)
      .pipe(
        tap(_ => this.log('fetched Vagas')),
        catchError(this.handleError<Vaga[]>('getVagas', []))
      );
  }

  getVagaNo404<Data>(id: number): Observable<Vaga> {
    const url = `${this.vagasUrl}/?id=${id}`;
    return this.http.get<Vaga[]>(url)
      .pipe(
        map(Vagas => Vagas[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Vaga id=${id}`);
        }),
        catchError(this.handleError<Vaga>(`getVaga id=${id}`))
      );
  }
  
  getVaga(id: number): Observable<Vaga> {
    const url = `${this.vagasUrl}/${id}`;
    return this.http.get<Vaga>(url).pipe(
      tap(_ => this.log(`fetched Vaga id=${id}`)),
      catchError(this.handleError<Vaga>(`getVaga id=${id}`))
    );
  }

  searchVagas(term: string): Observable<Vaga[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Vaga[]>(`${this.vagasUrl}/?cargo=${term}`).pipe(
      tap(_ => this.log(`found Vagas matching "${term}"`)),
      catchError(this.handleError<Vaga[]>('searchVagas', []))
    );
  }

  addVaga (Vaga: Vaga, empresa_id: number): Observable<Vaga> {
    Vaga.empresa_id = empresa_id;
    return this.http.post<Vaga>(this.vagasUrl, Vaga, httpOptions).pipe(
      tap((newVaga: Vaga) => this.log(`added Vaga => id=${newVaga.nome}`)),
      catchError(this.handleError<Vaga>('addVaga'))
    );
  }

  deleteVaga (Vaga: Vaga | number): Observable<Vaga> {
    const id = typeof Vaga === 'number' ? Vaga : Vaga.id;
    const url = `${this.vagasUrl}/${id}`;

    return this.http.delete<Vaga>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Vaga id=${id}`)),
      catchError(this.handleError<Vaga>('deleteVaga'))
    );
  }

  updateVaga (Vaga: Vaga): Observable<any> {
    return this.http.put(this.vagasUrl, Vaga, httpOptions).pipe(
      tap(_ => this.log(`updated Vaga id=${Vaga.id}`)),
      catchError(this.handleError<any>('updateVaga'))
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
    console.log(`Vaga-Service -> ${message}`);
  }
}
