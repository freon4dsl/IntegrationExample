export class MenuItem {
  title: string = "";
  action: (id: number) => void = () => {};
  icon?: Object;
  id: number = -1;
}

export class ProjectionItem {
  name: string = "";
  selected: boolean = false;
}
