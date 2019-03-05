export interface IBackgroundContentMenuProps {
  title: string,
  contexts: string[],
}

export abstract class BackgroundContextMenu {
  public readonly title:string;
  public readonly contexts: string[];

  constructor (props: IBackgroundContentMenuProps) {
    this.title = props.title;
    this.contexts = props.contexts;

    this.onclick = this.onclick.bind(this);
  }

  abstract onclick(info): any;
}
