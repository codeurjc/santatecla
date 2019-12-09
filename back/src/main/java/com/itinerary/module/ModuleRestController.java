package com.itinerary.module;

import com.GeneralRestController;
import com.slide.Slide;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/modules")
public class ModuleRestController extends GeneralRestController {

    @GetMapping(value="/")
    public MappingJacksonValue modules(){
        MappingJacksonValue result = new MappingJacksonValue(this.moduleService.findAll());
        return result;
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<Module> module(@PathVariable long id){
        Optional<Module> module = this.moduleService.findOne(id);
        if (module.isPresent()) {
            return new ResponseEntity<>(module.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
