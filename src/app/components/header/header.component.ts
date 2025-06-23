import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartCount } from '../../store/selectors/cart.selectors';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
    count$: Observable<number> = this.store.select(selectCartCount);
    constructor(private store: Store) {}
  
}
