import {FormControl} from "@angular/forms";

export interface MovieAddForm {
  title: FormControl<string | null>
  genre: FormControl<string | null>
  productionDate: FormControl<Date | null>
}
