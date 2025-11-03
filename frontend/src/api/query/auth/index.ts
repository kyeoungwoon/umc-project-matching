import { useMutation, useQuery } from '@tanstack/react-query';

import * as auth from '@api/axios/auth';

export const useGetSchoolsQuery = () => {
  return useQuery({ queryKey: ['schools'], queryFn: auth.getSchools });
};

export const useRegisterMutation = () => {
  return useMutation({ mutationFn: auth.register });
};

export const useLoginMutation = () => {
  return useMutation({ mutationFn: auth.login });
};

export const useDeactivateMutation = () => {
  return useMutation({ mutationFn: auth.deactivate });
};

export const useChangePasswordMutation = () => {
  return useMutation({ mutationFn: auth.changePassword });
};

export const useCreateSchoolMutation = () => {
  return useMutation({ mutationFn: auth.createSchool });
};
