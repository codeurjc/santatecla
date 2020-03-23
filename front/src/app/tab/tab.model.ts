import {LoginService} from '../auth/login.service';

export class Tab {
  link: string;
  isActive: boolean;
  closeLink: string;

  isAdmin = true;

  studentLessonSlideNumber: number;
  studentLessonSlideProgress: number;

  constructor(private _type: string, private _id: number, private _name: string, public _unitId: string, private _courseId: number, private _moduleId: number) {
    this.updateLink(_type, _id, _name, _unitId, _courseId, _moduleId);
    this.studentLessonSlideNumber = 0;
    this.studentLessonSlideProgress = 0;
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
      if (courseId !== null) {
        this.closeLink = '/courses';
      } else {
        this.closeLink = '/unit';
      }
    } else if (type === 'Lección') {
      if (this.isAdmin) {
        if (moduleId !== null) {
          this.link = '/units/' + unitId + '/modules/' + moduleId + '/lessons/' + id;
        } else {
          this.link = '/units/' + unitId + '/lessons/' + id;
        }
        this.closeLink = '/unit';
      } else {
        this.link = '/course/' + courseId + '/units/' + unitId + '/modules/' + moduleId + '/lessons/' + id;
        this.closeLink = '/course/' + this.courseId + '/modules/' + moduleId;
      }

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

  setIsNotAdmin() {
    this.isAdmin = false;
    this.updateLink(this.type, this.id, this.name, this.unitId, this.courseId, this.moduleId);
  }

}
