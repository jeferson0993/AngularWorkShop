import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from "@alyle/ui";

const styles = ({
  root: {
    width: '100%',
    maxWidth: '360px'
  }
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly classes = this.theme.addStyleSheet(styles);
  
  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
