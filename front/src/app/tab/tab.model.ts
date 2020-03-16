export class Tab {
  link: string;
  isActive: boolean;

  constructor(private _type: string, private _id: number, private _name: string, private _unitId: string, private _courseId: number, private _moduleId: number) {
    if (this.type === 'Unidad') {
      if (this.id === 0) {
        this.link = '/unit';
      } else {
        this.link = '/unit/' + this.id;
      }
    } else if (this.type === 'Curso') {
      if (this.id === 0) {
        this.link = '/courses';
      } else {
        this.link = '/course/' + this.id;
      }
    } else if (this.type === 'Itinerario') {
      if (this.unitId !== null) {
        this.link = '/units/' + this.unitId + '/modules/' + this.id;
      } else {
        this.link = '/course/' + this.courseId + '/modules/' + this.id;
      }
    } else if (this.type === 'Lección') {
      if (this.moduleId !== null) {
        this.link = '/units/' + this.unitId + '/modules/' + this.moduleId + '/lessons/' + this.id;
      } else {
        this.link = '/units/' + this.unitId + '/lessons/' + this.id;
      }
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

  get courseId(): number {
    return this._courseId;
  }

  get unitId(): string {
    return this._unitId;
  }

  get moduleId(): number {
    return this._moduleId;
  }

}
