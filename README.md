# Chrome CarrotQuest Extension
Fast and simple users data searching

## Links
* [Getting Started](#getting-started)
* [Description](#description)
* [Dependencies](#dependencies)
* [Models](#models)
* [Utils](#utils)
* [Examples](#examples)
* [Build And Deploy](#build)
* [Changelog](#changelog)

<a name="getting-started"></a>
## Getting Started
Clone the repo
```bash
git clone
```

Install dependencies
```bash
npm install
or
yarn install
or
yarn
```

Build the extension
```bash
npm run build
or
yarn build
```
You can install builded extension in Chrome Extensions Page

<a name="description"></a>
## Description
### Main folder ```src```
```src/app``` - buttons folder. Contains react models, components etc. <br />
```src/background``` - Contains background files for extension. <br />
```src/images``` - Contains all images for extension. <br />
```src/models``` - Contains models for extension (example: NotificationModel.ts). <br />
```src/styles``` - Contains ```css``` files for extension. <br />
```src/background.ts``` - Background entry point for extension. <br />
```src/content.tsx``` - Content entry point for extension. <br />
```src/manifest.json``` - Config for a chrome extension. <br />

### App folder ```app```
```app/components``` - Contains all React components. <br />
```app/hoc``` - Contains HOC`s (High Order Component). <br />
```app/layouts``` - Contains layouts for elements. <br />
```app/services``` - Contains services (axios etc.). <br />
```app/ui``` - Contains smail ui-kit. <br />
```app/utils``` - Contains "Helpers" functions(classes). <br />

### Other
```.env``` - Contains env constants. (Configuration file)

<a name="dependencies"></a>
## Dependencies
```react``` - for render elements (includes: ```ReactDOM```) <br />
```typescript``` - (Includes ```webpack loader```) <br />
```webpack``` - for a building project <br />
```axios``` - for HTTP requests <br />
```cheerio``` - HTML crawler <br />

<a name="models"></a>
## Models
### List of extension models ```src/models```
```Notification.ts``` - Making browser native notify.
```BackgroundContextMenu``` - abstract class for context menu
```IBackgroundRequest``` - interface for all background requests

### List of React App models ```src/app/models```
```Button``` - Button ui component
```ts
// Interface
export interface Props {
  icon?: string,
  name?: string,
  onClick: () => void,
}
```

```Icon``` - Icon for Button
```ts
// Interface
export interface Props {
  className?: string,
}
```

```Tooltip``` - Tooltip for Button
```ts
// Interface
export interface Props {
  className?: string,
}
```

## Utils
### List of utils functions
```copy``` - Coping any string to clipboard

<a name="examples"></a>
## Examples
### Button Component Example
```ts
import React, { ReactElement } from 'react';

import { Button } from '../../ui/Button';
import { Copy } from '../../utils';

// Setting up a Props and Store (optionally)
type Props = {
  icon: string
}

// Register Component
export const ButtonComponent({icon}: Props) => {
  const icon: string = 'icon name';
  const handleClick = (): void => {
    alert('You are clicked me!');
  }

  return (
    <Button 
      onClick={handleClick}
      icon={icon}
    />
  )
}

```
<a name="build"></a>
## Build And Deploy

1. Need fill ```.env``` file with variables
* OLD_ADMIN_URI
* NEW_ADMIN_URI
* TEMP_ACCESS_URI
* FIND_SITE_URI
* USER_INFO_URI
* SITES_LIST_URI
* WHOIS_URI
* CARROT_LEADS_URI

2. Create ```.zip``` file with ```npm run zipping```
3. Upload a ```.zip``` file to chrome web store
4. ???
5. PROFIT.

<a name="deploy">
## DEPLOY
### before you begin
For deploying chrome extensions you need
1. Google account
2. Buy developer privilege (5$ once pay)

To use the Chrome Web Store Publish API, you need to enable the API for your project in the <a href="https://console.developers.google.com/">Google Developers Console.</a>

1. Visit the <a href="https://console.developers.google.com/">Google Developers Console.</a>
2. Create a new project or select an existing one.
3. In the sidebar on the left, select **APIs & auth**.
4. In the displayed list of available APIs, set the status of the Chrome Web Store API to **ON**.
5. Accept the Terms of Service.
6. In the sidebar on the left, select **Credentials**.
7. Find the lines labeled **Client ID** and **Client secret**. Note that there may be a client ID without a client secret for use with Compute Engine and App Engine. In that case, create a new client ID and client secret.
8. To create the client ID and client secret, click on **Create New Client ID**, select **Installed Application**, and **Other** under **Installed application type**.
9. Get an access token:

Once you have the client ID and client secret, you can retrieve an access token to work with the API. For example, enter this URL in your browser, replacing the $CLIENT_ID with the one for your app:

```
https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&client_id=$CLIENT_ID&redirect_uri=urn:ietf:wg:oauth:2.0:oob
```

You will see a page asking you to accept permission for the requested scope.

Use this value to request an access token. For example, using curl, you can get an access token by executing the following command (replacing the values of $CLIENT_ID, $CLIENT_SECRET, and $CODE with the values from above):

```
> curl "https://accounts.google.com/o/oauth2/token" -d \
"client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&code=$CODE&grant_type=authorization_code&redirect_uri=urn:ietf:wg:oauth:2.0:oob"
```

This will return a result such as:

```
{
  "access_token" : "ya29...",
  "token_type" : "Bearer",
  "expires_in" : 3600,
  "refresh_token" : "1/rwn..."
}
```

You can now use the access_token to call the API. You can also use the refresh token to get future access tokens. Note that tokens expire after 40 minutes.

You need building and zipping source code
```
npm run build
```
or
```
yarn build
```
then zipping
```
npm run zipping
```

Uploading a package
```
> curl \
-H "Authorization: Bearer $TOKEN"  \
-H "x-goog-api-version: 2" \
-X PUT \
-T $FILE_NAME \
-v \
https://www.googleapis.com/upload/chromewebstore/v1.1/items/$APP_ID
```

or uploading zip file from broser <a href="https://chrome.google.com/webstore/developer/dashboard">Link</a>

<a name="changelog"></a>
## Changelog

### 1.0.0
1. ```added``` <br />
  1.1 `New Buttons` <br />
    1.1.1 Find user by email in old Admin page <br />
    1.1.2 Find user by email in new admin page <br />
    1.1.3 Show user sites list <br />
    1.1.4 Find user by introduced email or userId <br />
    1.1.5 Copy users email to clipboard <br />
    1.1.6 Get temp access link for user (1 hour) <br />
  1.2 `New context menus` <br />
    1.2.1 Find site in old admin page <br />
    1.2.2 Get site whois info <br />
    1.2.3 Added .env configuration file <br />
    1.2.4 Code improvements <br />
    1.2.5 Added User info button <br />
    1.2.6 Fixed perfomance <br />
    1.2.7 Added button for searching in Leads page <br />
### 2.0.0
2. `Code improvements (Huge refactoring)` <br />
  2.0.1 Bugfix
  2.0.2 Added search button for leads page
