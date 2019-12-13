import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Empresa } from '../models/empresa';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class EmpresaService {

  private empresasUrl = 'https://fierce-escarpment-08191.herokuapp.com/api/v1/empresas';

  constructor(private http: HttpClient) { }

  getEmpresas (): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.empresasUrl)
      .pipe(
        tap(_ => this.log('fetched Empresas')),
        catchError(this.handleError<Empresa[]>('getEmpresas', []))
      );
  }

  getEmpresaNo404<Data>(id: number): Observable<Empresa> {
    const url = `${this.empresasUrl}/?id=${id}`;
    return this.http.get<Empresa[]>(url)
      .pipe(
        map(Empresas => Empresas[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Empresa id=${id}`);
        }),
        catchError(this.handleError<Empresa>(`getEmpresa id=${id}`))
      );
  }
  
  getEmpresa(id: number): Observable<Empresa> {
    const url = `${this.empresasUrl}/${id}`;
    return this.http.get<Empresa>(url).pipe(
      tap(_ => this.log(`fetched Empresa id=${id}`)),
      catchError(this.handleError<Empresa>(`getEmpresa id=${id}`))
    );
  }

  searchEmpresasByRazaoSocial(razaoSocial: string): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.empresasUrl}/razao-social/${razaoSocial}`)
      .pipe(
        tap(_ => this.log('fetched Empresas')),
        catchError(this.handleError<Empresa[]>('getEmpresas', []))
      );
  }

  searchEmpresasByEstado(estado: string): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.empresasUrl}/razao-social/estado/${estado}`)
      .pipe(
        tap(_ => this.log('fetched Empresas')),
        catchError(this.handleError<Empresa[]>('getEmpresas', []))
      );
  }

  searchEmpresasByCidade(cidade: string): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.empresasUrl}/razao-social/estado/cidade/${cidade}`)
      .pipe(
        tap(_ => this.log('fetched Empresas')),
        catchError(this.handleError<Empresa[]>('getEmpresas', []))
      );
  }

  searchEmpresasByBairro(bairro: string): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.empresasUrl}/razao-social/estado/cidade/bairro/${bairro}`)
      .pipe(
        tap(_ => this.log('fetched Empresas')),
        catchError(this.handleError<Empresa[]>('getEmpresas', []))
      );
  }

  addEmpresa (Empresa: Empresa): Observable<Empresa> {
    Empresa.bairro = '';
    Empresa.cep = '';
    Empresa.cidade = '';
    Empresa.cnpj = '';
    Empresa.email = '';
    Empresa.endereco = '';
    Empresa.telefone = '';
    Empresa.uf = '';    
    return this.http.post<Empresa>(this.empresasUrl, Empresa, httpOptions).pipe(
      tap((newEmpresa: Empresa) => this.log(`added Empresa => id=${newEmpresa.id}`)),
      catchError(this.handleError<Empresa>('addEmpresa'))
    );
  }

  deleteEmpresa (Empresa: Empresa | number): Observable<Empresa> {
    const id = typeof Empresa === 'number' ? Empresa : Empresa.id;
    const url = `${this.empresasUrl}/${id}`;

    return this.http.delete<Empresa>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Empresa id=${id}`)),
      catchError(this.handleError<Empresa>('deleteEmpresa'))
    );
  }

  updateEmpresa (Empresa: Empresa): Observable<Empresa> {
    console.log('update empresa: ', Empresa);
    return this.http.put(this.empresasUrl + '/' + Empresa.id, Empresa, httpOptions).pipe(
      tap(_ => this.log(`updated Empresa id=${Empresa.id}`)),
      catchError(this.handleError<any>('updateEmpresa'))
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
    console.log(`Empresa-Service -> ${message}`);
  }
}
