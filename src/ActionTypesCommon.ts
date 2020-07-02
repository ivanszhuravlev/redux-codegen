export enum ActionTypesCommon {
  RUN = 'RUN',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export const ActionTypes: { [key in ActionTypesCommon]: string } = {
  [ActionTypesCommon.RUN]: ActionTypesCommon.RUN,
  [ActionTypesCommon.SUCCESS]: ActionTypesCommon.SUCCESS,
  [ActionTypesCommon.FAIL]: ActionTypesCommon.FAIL,
}