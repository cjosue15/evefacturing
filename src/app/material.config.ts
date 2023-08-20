import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const MATERIAL_OPTIONS = [
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline',
    },
  },
];

export { MATERIAL_OPTIONS };
