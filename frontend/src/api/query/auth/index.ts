import { useMutation, useQuery } from '@tanstack/react-query';

import {
  changePassword,
  createSchool,
  deactivate,
  getSchools,
  login,
  register,
} from '@api/axios/auth';

export const useGetSchoolsQuery = () => {
  return useQuery({ queryKey: ['schools'], queryFn: getSchools });
};

export const useRegisterMutation = () => {
  return useMutation({ mutationFn: register });
};

export const useLoginMutation = () => {
  return useMutation({ mutationFn: login });
};

export const useDeactivateMutation = () => {
  return useMutation({ mutationFn: deactivate });
};

export const useChangePasswordMutation = () => {
  return useMutation({ mutationFn: changePassword });
};

export const useCreateSchoolMutation = () => {
  return useMutation({ mutationFn: createSchool });
};
