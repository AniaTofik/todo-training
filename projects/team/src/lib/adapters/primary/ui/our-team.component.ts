import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  dane$ = of([
    {
      name: 'Agnieszka Woźniak',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg',
    },
    {
      name: 'Karol Balicki',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_960_720.jpg',
    },
    {
      name: 'Joanna Zawada',
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652_960_720.jpg',
    },
  ]);
}
