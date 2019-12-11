package com.unit;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.relation.Relation;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/units")
public class UnitRestController extends GeneralRestController {

    @GetMapping(value = "/")
    public ResponseEntity<List<Unit>> getUnits() {
        return new ResponseEntity<>(this.unitService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Unit> getUnit(@PathVariable int id) {
        Optional<Unit> unit = this.unitService.findOne(id);
        if (unit.isPresent()) {
            return new ResponseEntity<>(unit.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/")
    public ResponseEntity<Unit> createUnit(@RequestBody Unit unit) {
        Unit savedUnit = new Unit();
        updateUnit(savedUnit, unit);
        this.unitService.save(savedUnit);
        return new ResponseEntity<>(savedUnit, HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<List<Unit>> updateUnits(@RequestBody List<Unit> units) {
        List<Unit> savedUnits = new ArrayList<>();
        for (Unit unit : units) {
            Optional<Unit> savedUnit = this.unitService.findOne(unit.getId());
            if (savedUnit.isPresent()) {
                updateUnit(savedUnit.get(), unit);
                this.unitService.save(savedUnit.get());
                savedUnits.add(savedUnit.get());
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(savedUnits, HttpStatus.OK);
    }

    private void updateUnit(Unit savedUnit, Unit unit) {
        savedUnit.setName(unit.getName());
        for (Relation relation : unit.getIncomingRelations()) {
            if ((relation.getIncoming() != 0) && (relation.getOutgoing() != 0)) {
                if (relation.getId() > 0) {
                    savedUnit.addIncomingRelation(relation);
                } else {
                    Relation r;
                    Optional<Relation> relationByIncomingAndOutgoing = relationService.findRelationByIncomingAndOutgoing(relation.getIncoming(), relation.getOutgoing());
                    r = relationByIncomingAndOutgoing.orElseGet(() -> new Relation(relation.getRelationType(), relation.getIncoming(), relation.getOutgoing()));
                    relationService.save(r);
                    savedUnit.addIncomingRelation(r);
                }
            }
        }
        for (Relation relation : unit.getOutgoingRelations()) {
            if ((relation.getIncoming() != 0) && (relation.getOutgoing() != 0)) {
                if (relation.getId() > 0) {
                    savedUnit.addOutgoingRelation(relation);
                } else {
                    Relation r;
                    Optional<Relation> relationByIncomingAndOutgoing = relationService.findRelationByIncomingAndOutgoing(relation.getIncoming(), relation.getOutgoing());
                    r = relationByIncomingAndOutgoing.orElseGet(() -> new Relation(relation.getRelationType(), relation.getIncoming(), relation.getOutgoing()));
                    relationService.save(r);
                    savedUnit.addOutgoingRelation(r);
                }
            }
        }
    }

    @GetMapping(value = "/{id}/absoluteName")
    public ResponseEntity<Unit> getUnitAbsoluteName(@PathVariable int id) {
        Optional<Unit> unit = this.unitService.findOne(id);
        return unit.map(value -> new ResponseEntity<>(new Unit(unitService.getAbsoluteName(value)), HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/{id}/parent")
    public ResponseEntity<Unit> getUnitParent(@PathVariable int id) {
        Optional<Unit> unit = this.unitService.findOne(id);
        return unit.map(value -> new ResponseEntity<>(unitService.getParent(value), HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/search")
    public ResponseEntity<List<Unit>> searchUnits(@RequestParam String name) {
        List<Unit> units = this.unitService.findByNameContaining(name);
        return new ResponseEntity<>(units, HttpStatus.OK);
    }

}