export default function css(): '' {
  return '';
}

css.resolve = (
  template: TemplateStringsArray,
  ...substitutions: any[]
): {
  className: string;
  styles: string;
} => ({
  className: 'dummy-class-name',
  styles: String.raw(template, ...substitutions),
});
