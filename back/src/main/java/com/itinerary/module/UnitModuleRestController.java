package com.itinerary.module;

import java.util.List;
import java.util.Optional;

import com.GeneralRestController;

import com.itinerary.block.Block;
import com.unit.Unit;
import com.unit.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/units")
public class UnitModuleRestController extends GeneralRestController {

    @Autowired
    protected UnitService unitService;

    @PostMapping(value = "/{unitId}/modules")
    @ResponseStatus(HttpStatus.CREATED)
    public Module addModule(@RequestBody Module module, @PathVariable long unitId) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        this.moduleService.save(module);

        unit.get().getModules().add(module);
        this.unitService.save(unit.get());

        return module;
    }

    @DeleteMapping(value = "/{unitId}/modules/{moduleId}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Module> deleteModule(@PathVariable long moduleId, @PathVariable long unitId) {

        Optional<Unit> unit = this.unitService.findOne(unitId);

        if (unit.isPresent()) {
            Optional<Module> module = this.moduleService.findOne(moduleId);
            if (module.isPresent()) {
                unit.get().getModules().remove(module.get());
                List<Module> modules = this.moduleService.findAll();
                for (Module m : modules) {
                    List<Block> blocks = m.getBlocks();
                    if (blocks.contains(module.get())) {
                        blocks.remove(module.get());
                    }
                }
                this.blockService.delete(moduleId);
                return new ResponseEntity<>(module.get(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
}
