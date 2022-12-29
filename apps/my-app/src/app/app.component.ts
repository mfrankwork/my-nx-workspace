import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { DataService } from './core/data.service';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  form: FormGroup = new FormGroup({});
  model: any = {
    firstname: 'Mike',
    age: 34,
    nationId: 1
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      props: {
        label: 'Firstname'
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          if (field.props) {
            field.props.label = 'Firstname changed';
          }
        }
      }
    },
    {
      key: 'age',
      type: 'input',
      props: {
        label: 'Age',
        type: 'number'
      }
    },
    {
      key: 'nationId',
      type: 'select',
      props: {
        label: 'Nation',
        options: this.dataService.getNations()
      }
    }
  ];

  constructor(private dataService: DataService) {}

  onSubmit(form: { valid: any; value: any }) {
    console.log(`form.valid: ${form.valid}`);
    console.log(`form.value: ${form.value}`);
  }
}
