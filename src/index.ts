import { ActionTypesCommon, ActionTypes } from "./ActionTypesCommon"

export type InitFn = (fields: string[]) => void
export type GenerateActionTypesFn = (key: string) => void

export interface CodeGenType {
  init: InitFn
  generateActionTypes: GenerateActionTypesFn
}

const CodeGen: CodeGenType = {
  generateActionTypes: function (fieldKey) {
    return Object.keys(ActionTypesCommon).reduce((actions, actionTypeKey) => {
      const actionTypeName = `${fieldKey.toUpperCase()}_${actionTypeKey}`

      return { ...actions, [actionTypeName]: actionTypeName }
    }, {})
  },
  init: function (fields) {
    return fields.reduce((instance, key) => {
      return {
        ...instance,
        actionTypes: this.generateActionTypes(key)
      }
    }, {})
  }
}