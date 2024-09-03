//for usersSlice.ts
type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website?: string;
  company?: Company;
};

export type UsersState = {
  users: TUser[],
  isLoading: boolean,
  error: string | undefined
}

//for useFilter.ts
export type TFilterProps = {
  inputValue: string,
  array: TUser[]
}

//for formSlice.ts
export type TForm = {
  inputValue: string
}