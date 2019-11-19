import { Component } from '@angular/core';
import { LyTheme2, ThemeVariables } from "@alyle/ui";

const styles = (theme: ThemeVariables) => ({
  '@global': {
    main: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  },
  grow: {
    flexGrow: 1
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema de Controle de vagas de trabalho';
  classes = this._theme.addStyleSheet(styles);
  constructor(private _theme: LyTheme2) { }
}
