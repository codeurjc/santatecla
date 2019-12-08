package com.card;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {

	@Autowired
	private CardRepository cardRepository;

	public Optional<Card> findOne(long id) {
		return cardRepository.findById(id);
	}

    public void save(Card theme) {
		cardRepository.save(theme);
	}

	public void delete(long id) {
		cardRepository.deleteById(id);
	}

}