import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

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
        debounceTime(this.term.length >= 2  ? 300 : 500)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      });

  }

  search() {
    // al presionar enter emite el valor
    this.onEnter.emit( this.term );
    console.log(this.term);
  }

  keyPressed() {
    // al presionar un tecla activa el debouce
    this.debouncer.next( this.term );
  }

}
