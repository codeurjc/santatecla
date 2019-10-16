
const RELATION_TYPE_ASSOCIATION = 'ASSOCIATION';
const RELATION_TYPE_AGGREGATION = 'AGGREGATION';
const RELATION_TYPE_COMPOSITION = 'COMPOSITION';
const RELATION_TYPE_INHERITANCE = 'INHERITANCE';

export class UmlParser {

  constructor() {}

  jsonToUml(json: any) {
    let uml = 'classDiagram\n';
    json.forEach((unit: any) => {
      uml += this.getRelations(unit);
    });
    return uml;
  }

  private getRelations(unit: any) {
    let uml = '';
    unit.relations.forEach((relation: any) => {
      const relatedTo = relation.relatedTo;
      switch (relation.relationType) {
        case RELATION_TYPE_ASSOCIATION: {
          uml += unit.id + unit.name + ' <-- ' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
        case RELATION_TYPE_AGGREGATION: {
          uml += unit.id + unit.name + ' "1" o-- "many" ' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
        case RELATION_TYPE_COMPOSITION: {
          uml += unit.id + unit.name + ' "0" *-- "0..n" ' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
        case RELATION_TYPE_INHERITANCE: {
          uml += unit.id + unit.name + ' <|-- ' + relatedTo.id + relatedTo.name + '\n';
          break;
        }
      }
      uml += this.getRelations(relatedTo);
    });
    return uml;
  }

}
