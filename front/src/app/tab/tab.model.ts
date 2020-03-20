export class Tab {
  link: string;
  isActive: boolean;
  closeLink: string;

  constructor(private _type: string, private _id: number, private _name: string, public _unitId: string, private _courseId: number, private _moduleId: number) {
    this.updateLink(_type, _id, _name, _unitId, _courseId, _moduleId);
  }

  updateLink(type: string, id: number, name: string, unitId: string, courseId: number, moduleId: number) {
    if (type === 'Unidad') {
      if (this.id === 0) {
        this.link = '/unit';
      } else {
        this.link = '/unit/' + id;
      }
      this.closeLink = '/unit';
    } else if (type === 'Curso') {
      if (this.id === 0) {
        this.link = '/courses';
      } else {
        this.link = '/course/' + id;
      }
      this.closeLink = '/courses';
    } else if (type === 'Itinerario') {
      if (unitId !== null) {
        this.link = '/units/' + unitId + '/modules/' + id;
      } else {
        this.link = '/course/' + courseId + '/modules/' + id;
      }
      this.closeLink = '/unit';
    } else if (type === 'Lección') {
      if (moduleId !== null) {
        this.link = '/units/' + unitId + '/modules/' + moduleId + '/lessons/' + id;
      } else {
        this.link = '/units/' + unitId + '/lessons/' + id;
      }
      this.closeLink = '/unit';
    } else if (type === 'DefinitionQuestion') {
        this.link = '/unit/' + this.unitId + '/question/DefinitionQuestion/' + this.id;
        this.closeLink = '/unit';
    } else if (type === 'TestQuestion') {
      this.link = '/unit/' + this.unitId + '/question/TestQuestion/' + this.id;
      this.closeLink = '/unit';
    } else if (type === 'ListQuestion') {
      this.link = '/unit/' + this.unitId + '/question/ListQuestion/' + this.id;
      this.closeLink = '/unit';
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
