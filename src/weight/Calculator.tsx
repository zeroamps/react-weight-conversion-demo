import { SubmitHandler, useForm } from 'react-hook-form';
import { Result, Units, convert } from './conversions';
import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';

type Inputs = {
  value: number;
  unit: Units;
};

export function Calculator() {
  const [inputs, setInputs] = useLocalStorage<Inputs>('inputs', { value: 0, unit: 'kilograms' });
  const [result, setResult] = useState<Result>(convert(inputs.value, inputs.unit));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInputs({ value: data.value, unit: data.unit });
    setResult(convert(data.value, data.unit));
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mx-4 text-center text-5xl font-light leading-tight">React Weight Conversion Demo</h1>
      <div className="mt-8 rounded-lg border border-yellow-600 bg-yellow-100 p-4">
        <form className="flex flex-col justify-center gap-1 sm:flex-row" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`rounded-lg ${errors.value && 'border-red-900 bg-red-100'}`}
            defaultValue={inputs.value}
            {...register('value', {
              valueAsNumber: true,
              required: true,
              min: 0,
              max: 100_000_000,
              validate: (value) => value >= 0
            })}
          />
          <select className="rounded-lg" defaultValue={inputs.unit} {...register('unit', { required: true })}>
            <option value="pounds">pounds</option>
            <option value="grams">grams</option>
            <option value="kilograms">kilograms</option>
            <option value="ounces">ounces</option>
          </select>
          <button className="rounded-lg bg-green-900 px-12 py-4 text-white" type="submit">
            Calculate
          </button>
        </form>
        <div className="mt-4">
          <div className="rounded-lg bg-yellow-500 p-2">
            <strong>Pounds:</strong> {result.pounds.toFixed(2)}
          </div>
          <div className="mt-1 rounded-lg bg-yellow-500 p-2">
            <strong>Grams:</strong> {result.grams.toFixed(2)}
          </div>
          <div className="mt-1 rounded-lg bg-yellow-500 p-2">
            <strong>Kilograms:</strong> {result.kilograms.toFixed(2)}
          </div>
          <div className="mt-1 rounded-lg bg-yellow-500 p-2">
            <strong>Ounces:</strong> {result.ounces.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
