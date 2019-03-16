import { BackgroundContextMenu, IBackgroundContentMenuProps } from 'src/models/BackgroundContextMenu';
import { WHOIS_URI } from 'src/config';

class ContextWhois extends BackgroundContextMenu {
  constructor (props: IBackgroundContentMenuProps) {
    super(props);
  }

  onclick (info ) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { message: 'getWhois' }, () => {
        const selectedLink: string = new URL(info.linkUrl).hostname;
        chrome.tabs.create({ url:  WHOIS_URI.replace('#site#', selectedLink) });
      });
    });
  }
}

export const contextWhois = new ContextWhois({ title: "Найти whoIs", contexts: ["link", "selection"] });