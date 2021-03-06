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

    public void save(Module module) {
        repository.save(module);
    }

    public void delete(long id) {
        repository.deleteById(id);
    }

    public boolean containsRecursiveParent(Module module, long moduleId){
        Module parent;
        if(module.getParentsId().isEmpty()) {
            return false;
        } else {
            for (long id : module.getParentsId()) {
                if (id == moduleId) {
                    return true;
                } else {
                    Optional<Module> optional = findOne(id);
                    if(optional.isPresent()) {
                        parent = optional.get();
                        if (containsRecursiveParent(parent, moduleId)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    }
}
