package com.unit;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UnitService {

	@Autowired
	private UnitRepository unitRepository;

	public Optional<Unit> findOne(long id) {
		return unitRepository.findById(id);
	}

	public List<Unit> findAll(){
		return this.unitRepository.findAll();
	}

    public void save(Unit theme) {
		unitRepository.save(theme);
	}

	public void delete(long id) {
		unitRepository.deleteById(id);
	}

}