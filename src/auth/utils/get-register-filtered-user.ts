import type { RegisterFormValues } from '../schemas/register.schema';

export const getFilteredRegisterUser = (user: RegisterFormValues) => {
  const newUser = {
    ...user,
    name: user.firstName + user.lastName,
  };
  const { confirmPassword, firstName, lastName, ...filteredUserProps } = newUser;
  if (confirmPassword && firstName && lastName) console.log('register in process...');

  return filteredUserProps;
};
