import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpresasListComponent } from './components/empresas-list/empresas-list.component';
import { EmpresaDetailComponent } from './components/empresa-detail/empresa-detail.component';

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

/** Alyle UI Theme Template*/
import { LyCommonModule }                 from '@alyle/ui';
import { LyThemeModule, LY_THEME }        from '@alyle/ui';
import { LyCardModule }                   from '@alyle/ui/card';
import { LyIconModule }                   from '@alyle/ui/icon';
import { LyGridModule }                   from '@alyle/ui/grid';
import { LyFieldModule }                  from '@alyle/ui/field';
import { LyButtonModule }                 from '@alyle/ui/button';
import { LyToolbarModule }                from '@alyle/ui/toolbar';
import { LyDividerModule }                from '@alyle/ui/divider';
import { LyTypographyModule }             from '@alyle/ui/typography';
import { MinimaLight, MinimaDark }        from '@alyle/ui/themes/minima';
import { LyResizingCroppingImageModule }  from '@alyle/ui/resizing-cropping-images';
import { HomeComponent } from './components/home/home.component';
import { CandidatosListComponent } from './components/candidatos-list/candidatos-list.component';
import { CandidatoDetailComponent } from './components/candidato-detail/candidato-detail.component';
import { VagaDetailComponent } from './components/vaga-detail/vaga-detail.component';
import { ExperienciaDetailComponent } from './components/experiencia-detail/experiencia-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresasListComponent,
    EmpresaDetailComponent,
    HomeComponent,
    CandidatosListComponent,
    CandidatoDetailComponent,
    VagaDetailComponent,
    ExperienciaDetailComponent
  ],
  imports: [
    LyDividerModule,
    LyCommonModule,
    LyButtonModule,    
    LyFieldModule,
    LyCardModule,
    LyIconModule,
    LyTypographyModule,
    LyGridModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,

    CommonModule,
    BrowserAnimationsModule,

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
