export class ChromeNotification {
  static async Create (title: string = "", message: string = ""): Promise<any> {
    return new Promise(resolve => {
      chrome.notifications.create({
        type: "basic",
        title: title,
        message: message,
        iconUrl: chrome.extension.getURL("images/kek.png"),
      }, id => {
        return resolve(id);
      });
    });
  }
}
