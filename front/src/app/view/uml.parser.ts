import { RelationType } from '../relation/relation.type';

export class UmlParser {

  constructor() {}

  jsonToUml(json: any) {
    return 'classDiagram\n' + this.getRelationsDiagram(json);
  }

  private getRelationsDiagram(unit: any): string {
    let uml = '';
    unit.relations.forEach((relation: any) => {
      const relatedTo = relation.relatedTo;
      switch (relation.relationType) {
        case RelationType.ASSOCIATION: {
          uml += unit.id + unit.name + '<--' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
        case RelationType.AGGREGATION: {
          uml += unit.id + unit.name + '"1"o--"many"' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
        case RelationType.COMPOSITION: {
          uml += unit.id + unit.name + '"0"*--"0..n"' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
        case RelationType.INHERITANCE: {
          uml += unit.id + unit.name + '<|--' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
      }
      uml += this.getRelationsDiagram(relatedTo);
    });
    return uml;
  }

}
