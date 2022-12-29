import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  form = new FormGroup({});
  model = {
    firstname: 'Mike',
    age: 34
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Firstname'
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age'
      }
    }
  ];

  // Ignore TypeScript compiler error for onSubmit variables
  // @ts-ignore
  onSubmit({ valid, value }) {
    console.log(`valid: ${valid}`);
    console.log(value);
  }
}
