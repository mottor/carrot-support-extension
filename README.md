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
  2.0.1 Supported conversation page <br />
  2.0.2 Added leads finder <br />