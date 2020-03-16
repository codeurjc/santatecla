export class Tab {
  link: string;
  isActive: boolean;

  constructor(private _type: string, private _id: number, private _name: string) {
    if (this.type === 'Unidad') {
      this.link = '/unit/' + this.id;
    } else if (this.type === 'Curso') {
      this.link = '/course/' + this.id;
    }

    this.isActive = true;
  }

  get type(): string {
    return this._type;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

}
