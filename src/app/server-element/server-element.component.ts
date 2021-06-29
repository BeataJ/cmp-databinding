import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
  }

}
