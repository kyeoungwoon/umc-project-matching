import { TransformFnParams } from 'class-transformer';

export const transformBigintToString = ({ value }: TransformFnParams) => {
  if (value === null || value === undefined) {
    return value;
  }

  return typeof value === 'bigint' ? String(value) : value;
};

export const transformStringToBigint = ({ value }: TransformFnParams) => {
  if (value === null || value === undefined) {
    return value;
  }

  try {
    return BigInt(value);
  } catch {
    return value;
  }
};

export const transformDate = ({ value }: TransformFnParams) => {
  if (!value) return value;
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
};
