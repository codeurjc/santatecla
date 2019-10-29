package com.slide.theorySlide;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TheorySlideService {

    @Autowired
    private TheorySlideRepository repository;
    
    public Optional<TheorySlide> findOne(long id) {
		return repository.findById(id);
	}

	public List<TheorySlide> findAll() {
		return repository.findAll();
	}

    public void save(TheorySlide slide) {
		repository.save(slide);
  	}

	public void delete(long id) {
		repository.deleteById(id);
    }
    
}