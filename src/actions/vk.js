import * as VKConnect from "@vkontakte/vkui-connect";

import * as userTypes from "../constants/userActionsConstants";

export function initApp() {
  return dispatch => {
    VKConnect.subscribe(e => {
      let vkEvent = e.detail;
      let type = vkEvent.type;
      let data = vkEvent.data;

      switch (type) {
        case "VKWebAppGetUserInfoResult":
          dispatch({
            type: userTypes.USER_FETCHED_SUCCESS,
            payload: data
          });
          break;
        case "VKWebAppGetUserInfoFailed":
          dispatch({
            type: userTypes.USER_FETCHED_FAILD,
            payload: data,
            error: true
          });
          break;
        default:
          console.log("wtf");
      }
    });
  };
}
