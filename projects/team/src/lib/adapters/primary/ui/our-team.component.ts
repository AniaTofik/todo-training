import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  employees$: Observable<EmployeeDTO[]> = of([
    {
      id: '1',
      name: 'Agnieszka Woźniak',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg',
      routerLink: '/pracownik/agnieszkawozniak',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      position: 'Kierownik ds. Obsługi Klienta',
      alt: 'Zdjęcie Agnieszki Woźniak',
    },
    {
      id: '2',
      name: 'Karol Balicki',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg',
      routerLink: '/pracownik/karolbalicki',
      text: 'This card has supporting text below as a natural lead-in to additional content.',
      position: 'Kierownik Działu Kadr',
      alt: 'Zdjęcie Karola Balickiego',
    },
    {
      id: '3',
      name: 'Joanna Zawada',
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652_960_720.jpg',
      routerLink: '/pracownik/joannazawada',
      text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      position: 'Administrator Bazy Danych',
      alt: 'Zdjęcie Joanny Zawady',
    },
  ]);
}

// {
//   name: 'Agnieszka Woźniak',
//   imageUrl:
//     'https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_960_720.jpg',
//   routerLink: '/pracownik/agnieszkawozniak',
//   text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
//   position: 'Kierownik ds. Obsługi Klienta',
//   alt: 'Zdjęcie Agnieszki Woźniak',
// },
// {
//   name: 'Karol Balicki',
//   imageUrl:
//     'https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_960_720.jpg',
//   routerLink: '/pracownik/karolbalicki',
//   text: 'This card has supporting text below as a natural lead-in to additional content.',
//   position: 'Kierownik Działu Kadr',
//   alt: 'Zdjęcie Karola Balickiego',
// },
// {
//   name: 'Joanna Zawada',
//   imageUrl:
//     'https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652_960_720.jpg',
//   routerLink: '/pracownik/joannazawada',
//   text: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//   position: 'Administrator Bazy Danych',
//   alt: 'Zdjęcie Joanny Zawady',
// },
