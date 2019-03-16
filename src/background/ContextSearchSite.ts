import { BackgroundContextMenu, IBackgroundContentMenuProps } from 'src/models/BackgroundContextMenu';
import { FIND_SITE_URI } from 'src/config';

class ContextSearchSite extends BackgroundContextMenu {
  constructor (props: IBackgroundContentMenuProps) {
    super(props);
  }

  onclick (info ) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { message: 'findSite' }, () => {
        const selectedLink: string = new URL(info.linkUrl).hostname;
        chrome.tabs.create({ url:  `${FIND_SITE_URI}${selectedLink}` });
      });
    });
  }
}

export const contextSearchSite = new ContextSearchSite({ title: "Найти сайт", contexts: ["link", "selection"] });