import * as VKConnect from "@vkontakte/vkui-connect";

export function fetchUser() {
  return () => {
    VKConnect.send("VKWebAppGetUserInfo", {});
  };
}
