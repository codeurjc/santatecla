package com.card;

import java.util.Optional;

import com.GeneralRestController;

import javax.servlet.http.HttpServletResponse;

import com.unit.Unit;
import com.unit.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/units")
public class CardRestController extends GeneralRestController {

    @Autowired
    protected UnitService unitService;

    @Autowired
    protected CardService cardService;

    @GetMapping(value = "/{unitId}/cards")
    public ResponseEntity<Iterable<Card>> getCards(@PathVariable int unitId) {
        Optional<Unit> unit = this.unitService.findOne(unitId);
        return unit.map(value -> new ResponseEntity<>(value.getCards(), HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping(value = "/{unitId}/cards")
    public ResponseEntity<Card> createCard(@PathVariable long unitId, @RequestBody Card card) {
        Optional<Unit> unit = unitService.findOne(unitId);
        if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Card newCard = new Card();
        newCard.update(card);
        cardService.save(newCard);
        unit.get().addCard(newCard);
        unitService.save(unit.get());
        return new ResponseEntity<>(newCard, HttpStatus.OK);
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
        unitService.save(unit.get());
        return new ResponseEntity<>(updatedCard, HttpStatus.OK);
    }

    @GetMapping(value = "/{unitId}/cards/{cardId}")
    public ResponseEntity<Card> getCard(@PathVariable long unitId, @PathVariable long cardId) {
        Optional<Unit> unit = unitService.findOne(unitId);
        if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Optional<Card> card = cardService.findOne(cardId);
        return card.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping(value = "/{unitId}/cards/{cardId}")
    public ResponseEntity<Card> deleteCard(@PathVariable long unitId, @PathVariable long cardId) {
        Optional<Unit> unit = unitService.findOne(unitId);
        if (!unit.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Optional<Card> card = cardService.findOne(cardId);
        if (!card.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        unit.get().deleteCard(cardId);
        unitService.save(unit.get());
        cardService.delete(cardId);
        return new ResponseEntity<>(card.get(), HttpStatus.OK);
    }

}