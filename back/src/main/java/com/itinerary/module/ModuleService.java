package com.itinerary.module;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModuleService {
    @Autowired
    private ModuleRepository repository;

    public Optional<Module> findOne(long id) {
        return repository.findById(id);
    }

    public List<Module> findAll() {
        return repository.findAll();
    }

    public void save(Module slide) {
        repository.save(slide);
    }

    public void delete(long id) {
        repository.deleteById(id);
    }
}
