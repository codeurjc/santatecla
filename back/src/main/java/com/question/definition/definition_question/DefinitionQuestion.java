package com.question.definition.definition_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.question.Question;
import com.question.definition.definition_answer.DefinitionAnswer;

@Entity
public class DefinitionQuestion{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String questionText;
    private String subtype;
    private int totalAnswers;
    private int totalCorrectAnswers;
    private int totalWrongAnswers;

    @OneToMany(cascade = CascadeType.ALL)
    private List<DefinitionAnswer> definitionAnswers;

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
        this.definitionAnswers.add(answer);
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
        return definitionAnswers;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getSubtype() {
        return subtype;
    }

    public void setSubtype(String subtype) {
        this.subtype = subtype;
    }

    public int getTotalCorrectAnswers() {
        return totalCorrectAnswers;
    }

    public void setTotalCorrectAnswers(int totalCorrectAnswers) {
        this.totalCorrectAnswers = totalCorrectAnswers;
    }

    public int getTotalWrongAnswers() {
        return totalWrongAnswers;
    }

    public void setTotalWrongAnswers(int totalWrongAnswers) {
        this.totalWrongAnswers = totalWrongAnswers;
    }

    public void setAnswers(List<DefinitionAnswer> answers) {
        this.answers = answers;
    }
}