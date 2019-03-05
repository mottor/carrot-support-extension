import { contextSearchSite } from './background/ContextSearchSite';
import { contextWhois } from './background/ContextWhois';
import { ChromeNotification } from './models/Notification';
import { IBackgroundRequest } from './models/IBackgroundRequest';

chrome.extension.onRequest.addListener(
  (request: IBackgroundRequest) => {
    switch (request.type) {
      case 'alert':
        ChromeNotification.Create(request.title, request.message);
        break;
    }
  }
);

/**
 * Creating context menu
 */
chrome.contextMenus.create(contextSearchSite);
chrome.contextMenus.create(contextWhois);