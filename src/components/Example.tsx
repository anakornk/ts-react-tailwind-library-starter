export type ExampleProps = {
  value: string;
};

export const Example = ({ value }: ExampleProps) => {
  return <div className="bg-red-500">{value}</div>;
};
