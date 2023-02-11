import { handleActions } from "redux-actions";

export const Types = {
  GET_ALL_DEVS_SUCCESS: "GET_ALL_DEVS_SUCCESS",
  GET_ALL_DEVS_REQUEST: "GET_ALL_DEVS_REQUEST",
  Add_ONE_DEV_REQUEST: "ADD_ONE_DEV_REQUEST",
  Add_ONE_DEV_SUCCESS: "ADD_ONE_DEV_SUCCESS",
  GET_ONE_DEV: "GET_ONE_DEV",
  DELETE_ONE_DEV: "DELETE_ONE_DEV",
  UPDATE_ONE_DEV: "UPDATE_ONE_DEV",
  // PATCH_ONE_DEV:"PATCH_ONE_DEV",
};

const devActions = {
  getAllDevsSuccessActionCreator: (developers) => ({
    type: Types.GET_ALL_DEVS_SUCCESS,
    developers,
  }),
  getAllDevsRequestActionCreator: () => ({
    type: Types.GET_ALL_DEVS_REQUEST,
    
  }),
  getOneDevActionCreator: (developer) => ({
    type: Types.DELETE_ONE_DEV,
    developer,
  }),
  // addOneDevSuccessActionCreator: (developer) => ({
  //   type: Types.Add_ONE_DEV_SUCCESS,
  //   developer,
  // }),
  addOneDevRequestActionCreator: (developer) => ({
    type: Types.Add_ONE_DEV_REQUEST,
    developer
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
      [Types.GET_ALL_DEVS_SUCCESS]: (state, action) => ({
        ...state,
        developers: action.developers,
      }),
      [Types.GET_ALL_DEVS_REQUEST]: (state) => ({
        state,
       
      }),
      [Types.Add_ONE_DEV_SUCCESS]: (state) => ({state}),
      [Types.Add_ONE_DEV_REQUEST]: (state) => ({
        state
       
      }),
      [Types.DELETE_ONE_DEV]: (state, action) => {
        const developers = state.developers.filter(
          (dev) => dev.id !== action.id
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
