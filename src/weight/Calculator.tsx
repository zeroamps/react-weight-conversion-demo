import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  value: number;
  unit: 'pounds' | 'grams' | 'kilograms' | 'ounces';
};

export function Calculator() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mx-4 text-center text-5xl font-light leading-tight">React Weight Conversion Demo</h1>
      <div className="mt-8 rounded-lg border border-yellow-600 bg-yellow-100 p-4">
        <form className="flex flex-col justify-center gap-1 sm:flex-row" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`rounded-lg ${errors.value && 'border-red-900 bg-red-100'}`}
            defaultValue={0}
            {...register('value', { required: true, min: 0, max: 100_000_000, validate: (value) => value >= 0 })}
          />
          <select className="rounded-lg" defaultValue="kilograms" {...register('unit', { required: true })}>
            <option value="pounds">pounds</option>
            <option value="grams">grams</option>
            <option value="kilograms">kilograms</option>
            <option value="ounces">ounces</option>
          </select>

          <input className="rounded-lg bg-green-900 px-12 py-4 text-white" type="submit" />
        </form>
      </div>
    </div>
  );
}
