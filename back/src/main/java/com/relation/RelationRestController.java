package com.relation;

import com.GeneralRestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/relations")
public class RelationRestController extends GeneralRestController {
    
	@Autowired
    protected RelationService relationService;

    @PutMapping(value="/")
    public ResponseEntity<Relation> updateRelation(@RequestBody Relation relation) {
        Relation savedRelation;
        if (!this.relationService.findOne(relation.getId()).isPresent()) {
            savedRelation = new Relation();
        } else {
            Optional<Relation> r = this.relationService.findOne(relation.getId());
            if (r.isPresent()) {
                savedRelation = r.get();
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        savedRelation.update(relation);
        this.relationService.save(savedRelation);
        return new ResponseEntity<>(savedRelation, HttpStatus.OK);
    }

}