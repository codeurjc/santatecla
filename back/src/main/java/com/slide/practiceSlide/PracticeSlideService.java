package com.slide.practiceSlide;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PracticeSlideService {

    @Autowired
    private PracticeSlideRepository repository;
    
    public Optional<PracticeSlide> findOne(long id) {
		return repository.findById(id);
	}

	public List<PracticeSlide> findAll() {
		return repository.findAll();
	}

    public void save(PracticeSlide slide) {
		repository.save(slide);
  	}

	public void delete(long id) {
		repository.deleteById(id);
    }
    
}