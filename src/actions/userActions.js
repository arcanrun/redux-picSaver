import * as VKConnect from "@vkontakte/vkui-connect";

export function fetchUser() {
  return () => {
    VKConnect.send("VKWebAppGetUserInfo", {});
  };
}

export function fetchEmail() {
  return () => {
    VKConnect.send("VKWebAppGetEmail", {});
  };
}
