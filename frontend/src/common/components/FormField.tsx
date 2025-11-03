import { Field, FieldError, FieldLabel } from '@styles/components/ui/field';
import { Input } from '@styles/components/ui/input';

const FormField = ({
  form,
  name,
  label,
  type = 'text',
  placeholder,
}: {
  form: any;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <form.Field
      name={name}
      children={(field: any) => {
        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
        return (
          <Field>
            <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
            <Input
              type={type}
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder={placeholder}
            />
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </Field>
        );
      }}
    />
  );
};

export default FormField;
