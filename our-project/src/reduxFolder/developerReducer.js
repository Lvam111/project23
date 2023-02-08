import { handleActions } from "redux-actions";

export const Types = {
  GET_ALL_DEVS: "GET_ALL_DEVS",
  Add_ONE_DEV: "ADD_ONE_DEV",
  GET_ONE_DEV: "GET_ONE_DEV",
  DELETE_ONE_DEV: "DELETE_ONE_DEV",
  UPDATE_ONE_DEV: "UPDATE_ONE_DEV",
  // PATCH_ONE_DEV:"PATCH_ONE_DEV",
};

const devActions = {
  getAllDevsActionCreator: (developers) => ({
    type: Types.GET_ALL_DEVS,
    developers,
  }),
  getOneDevActionCreator: (developer) => ({
    type: Types.DELETE_ONE_DEV,
    developer,
  }),
  addOneDevActionCreator: (developer) => ({
    type: Types.Add_ONE_DEV,
    developer,
  }),
  deleteOneDevActionCreator: (id) => ({
    type: Types.DELETE_ONE_DEV,
    id,
  }),
  updateOneDevActionCreator: (id, developer) => ({
    type: Types.UPDATE_ONE_DEV,
    developer,
    id,
  }),
  reducer: handleActions(
    {
      [Types.GET_ALL_DEVS]: (state, action) => ({
        ...state,
        developers: action.developers,
      }),
      [Types.Add_ONE_DEV]: (state, action) => ({
        ...state,
        developers: [...state.developers, action.developer],
      }),
      [Types.DELETE_ONE_DEV]: (state, action) => {
        const developers = state.developers.filter(
          (dev) => dev.id != action.id
        );

        return { ...state, developers };
      },
      [Types.UPDATE_ONE_DEV]: (state, action) => {
        const newArr = state.developers.map((dev) => {
          if (dev.id === action.id) return action.developer; //   azu tedy nahi         [azu,luwam,nahi]                            tedy=> luwam
          return dev;
        });

        return { ...state, developers: newArr };
      },

      // get one, update and delete
    },
    {
      developers: [],
      teachers: [],
    }
  ),
};
export default devActions;
