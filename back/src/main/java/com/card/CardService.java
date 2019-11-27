package com.card;

import java.io.IOException;
import java.util.Optional;

import javax.transaction.Transactional;

import com.card.Card;
import com.card.CardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
	
	/*@Transactional
	public void setImage(Card card, MultipartFile file) {
		try {
			Byte[] byteObjects = new Byte[file.getBytes().length];
			int i = 0;
			for (byte b : file.getBytes()) {
				byteObjects[i++] = b;
			}
			card.setImage(byteObjects);
		} catch (IOException ioe) {
			ioe.printStackTrace();
		}
	}*/

}