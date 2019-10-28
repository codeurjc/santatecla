package com.question.definition.definition_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.JViews.Summary;
import com.fasterxml.jackson.annotation.JsonView;
import com.question.Question;
import com.question.definition.definition_answer.DefinitionAnswer;
import org.aspectj.weaver.loadtime.definition.Definition;

@Entity
public class DefinitionQuestion extends Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(Summary.class)
    private long id;

    @OneToMany(cascade = CascadeType.ALL)
    private List<DefinitionAnswer> answers;

    public DefinitionQuestion() {
        super();
        this.answers = new ArrayList<>();
    }

    public DefinitionQuestion(String questionText) {
        super(questionText);
        this.answers = new ArrayList<>();
    }

    public void update(DefinitionQuestion q) {
        if (q.getQuestionText() != null) {
            this.questionText = q.getQuestionText();
        }
    }

    public void addAnswer(DefinitionAnswer answer) {
        this.answers.add(answer);
    }

    /**
     * Getters and Setters
     */

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<DefinitionAnswer> getAnswers() {
        return answers;
    }
}