import { IEmployee } from "@models/employee";
import { createAction, createReducer, on, props } from "@ngrx/store";

// Actions
export const UPDATE_EMPLOYEES = 'UPDATE_EMPLOYEES';

export interface IInitialState {
  employees: IEmployee[];
}

const initialState: IInitialState = {
  employees: []
};

export const UpdateEmployees = createAction(
  UPDATE_EMPLOYEES,
  props<{ employees: IEmployee[] }>()
);

export const homeReducer = createReducer(
  initialState,
  on(UpdateEmployees, (state, { employees }) => {
    return {
      ...state,
      employees: employees
    }
  })
);
