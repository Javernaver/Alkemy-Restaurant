import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = 'Buscar...';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit(): void {

    // cada 500ms despues de escribir emite el valor del input
    this.debouncer
      .pipe(
        debounceTime(this.term.length >= 2  ? 0 : 500)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      });

  }

  search(keyword: string) {
    this.term = keyword;
    // al presionar enter emite el valor
    this.onEnter.emit( keyword );
  }

  keyPressed(keyword: string) {
    this.term = keyword;
    // al presionar un tecla activa el debouce
    this.debouncer.next( keyword );
  }
}
