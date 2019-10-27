package com;

import com.card.CardService;
import com.itinerary.ItineraryService;
import com.question.definition.definition_question.DefinitionQuestionService;
import com.question.list.list_question.ListQuestionService;
import com.question.test.TestQuestionRestController;
import com.question.test.test_question.TestQuestionService;
import com.slide.*;
import com.user.UserComponent;
import com.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GeneralRestController {
    
    @Autowired
	protected UserComponent userComponent;
	
	@Autowired
	protected UserService userService;

	@Autowired
	protected SlideService slideService;

	@Autowired
	protected ItineraryService itineraryService;

	@Autowired
	protected CardService cardService;

	@Autowired
	protected DefinitionQuestionService definitionQuestionService;

	@Autowired
	protected ListQuestionService listQuestionService;

	@Autowired
	protected TestQuestionService testQuestionService;
}