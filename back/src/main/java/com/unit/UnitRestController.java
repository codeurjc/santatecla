package com.unit;

import java.util.List;
import java.util.Optional;

import com.GeneralRestController;
import com.card.Card;
import com.card.CardService;
import com.itinerary.Itinerary;
import com.question.Question;
import com.question.definition.definition_question.DefinitionQuestion;
import com.question.list.list_question.ListQuestion;
import com.question.test.test_question.TestQuestion;
import com.relation.Relation;
import com.relation.RelationService;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/units")
public class UnitRestController extends GeneralRestController {
    
	@Autowired
    protected UnitService unitService;

	@Autowired
    protected CardService cardService;
    
	@Autowired
    protected RelationService relationService;
    
    @PutMapping(value="/")
    public ResponseEntity<Unit> updateUnit(@RequestBody Unit unit) {
        Unit savedUnit;
        if (!this.unitService.findOne(unit.getId()).isPresent()) {
            savedUnit = new Unit(unit.getName());
        } else {
            Optional<Unit> u = this.unitService.findOne(unit.getId());
            if (u.isPresent()) {
                savedUnit = this.unitService.findOne(unit.getId()).get();
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        savedUnit.update(unit);
        for (Relation relation : unit.getRelations()) {
            Relation savedRelation;
            boolean newRelation = !this.relationService.findOne(relation.getId()).isPresent();
            if (newRelation) {
                savedRelation = new Relation(relation.getRelationType(), relation.getRelatedTo());
            } else {
                savedRelation = this.relationService.findOne(relation.getId()).get();
                savedRelation.update(relation);
            }
            savedRelation.setRelatedTo(updateUnit(relation.getRelatedTo()).getBody());
            this.relationService.save(savedRelation);
            if (newRelation) {
                savedUnit.addRelation(savedRelation);
            }
        }
        this.unitService.save(savedUnit);
        return new ResponseEntity<>(savedUnit, HttpStatus.OK);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Unit> getUnit(@PathVariable int id) {
        Optional<Unit> unit = this.unitService.findOne(id);
        return (unit.isPresent())?(new ResponseEntity<>(unit.get(), HttpStatus.OK)):(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/")
    public ResponseEntity<List<Unit>> getUnits() {
        return new ResponseEntity<List<Unit>>(this.unitService.findAll(), HttpStatus.OK);
    }
    
    @GetMapping(value="/search/{name}")
    public ResponseEntity<List<Unit>> searchUnits(@PathVariable String name) {
        List<Unit> units = this.unitService.findByNameContaining(name);
        return new ResponseEntity<>(units, HttpStatus.OK);
    }

    @GetMapping(value="/{unitId}/cards")
    public ResponseEntity<Iterable<Card>> getCards(@PathVariable int unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return (unit.isPresent())?(new ResponseEntity<Iterable<Card>>(unit.get().getCards(), HttpStatus.OK)):(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/{unitId}/question/definition")
    public ResponseEntity<List<DefinitionQuestion>> getDefinitionQuestions(@PathVariable int unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return (unit.isPresent())?(new ResponseEntity<>(unit.get().getDefinitionQuestions(), HttpStatus.OK)):(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/{unitId}/question/list")
    public ResponseEntity<List<ListQuestion>> getListQuestions(@PathVariable int unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return (unit.isPresent())?(new ResponseEntity<>(unit.get().getListQuestions(), HttpStatus.OK)):(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value="/{unitId}/question/test")
    public ResponseEntity<List<TestQuestion>> getTestQuestions(@PathVariable int unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return (unit.isPresent())?(new ResponseEntity<>(unit.get().getTestQuestions(), HttpStatus.OK)):(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping(value = "/{unitId}/cards/{cardId}")
	public ResponseEntity<Card> uploadCard(@PathVariable long unitId, @PathVariable long cardId, @RequestBody Card card) {
		Optional<Unit> unit = unitService.findOne(unitId);
		if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Card updatedCard = unit.get().getCard(cardId);
        if (updatedCard == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedCard.update(card);
        cardService.save(updatedCard);
        return new ResponseEntity<>(updatedCard, HttpStatus.OK);
    }

    @RequestMapping(value = "/{unitId}/cards/{cardId}/image", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Card> uploadCardImage(@PathVariable long unitId, @PathVariable long cardId, @RequestParam(value = "image") MultipartFile image) {
		Optional<Unit> unit = unitService.findOne(unitId);
		if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Card card = unit.get().getCard(cardId);
        if (card == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        cardService.setImage(card, image);
        cardService.save(card);
        return new ResponseEntity<Card>(card, HttpStatus.OK);	
    }

    @RequestMapping(value = "/{unitId}/cards/{cardId}", method = RequestMethod.GET)
	public ResponseEntity<Card> getCardImage(@PathVariable long unitId, @PathVariable long cardId, HttpServletResponse response) {
        Optional<Unit> unit = unitService.findOne(unitId);
		if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Card card = unit.get().getCard(cardId);
        return new ResponseEntity<Card>(card, HttpStatus.OK);
    }

    @PostMapping(value="/{unitId}/itineraries")
    @ResponseStatus(HttpStatus.CREATED)
    public Itinerary addItinerary(@RequestBody Itinerary itinerary, @PathVariable long unitId){

        Optional<Unit> unit = this.unitService.findOne(unitId);

        this.itineraryService.save(itinerary);

        unit.get().getItineraries().add(itinerary);
        this.unitService.save(unit.get());

        return itinerary;
    }

}