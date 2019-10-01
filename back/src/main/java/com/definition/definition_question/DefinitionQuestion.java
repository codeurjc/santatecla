package com.definition.definition_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.definition.definition_answer.DefinitionAnswer;

@Entity
public class DefinitionQuestion{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    private String questionText;

    private int type;

    //ONLY FOR TRUE/FALSE YES/NO QUESTIONS
    private String correctAnswer;

    @OneToMany(cascade = CascadeType.ALL)
    private List<DefinitionAnswer> answers;

    public DefinitionQuestion(){
        this.answers = new ArrayList<>();
    }

    public DefinitionQuestion(String questionText, int type){
        this.questionText = questionText;
        this.type = type;
        this.answers = new ArrayList<>();
    }

    public DefinitionQuestion(String questionText, int type, String correctAnswer){
        this.questionText = questionText;
        this.type = type;
        this.correctAnswer = correctAnswer;
        this.answers = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public List<DefinitionAnswer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<DefinitionAnswer> answers) {
        this.answers = answers;
    }

    public void update(DefinitionQuestion q) {
        if(q.getQuestionText() !=null){
            this.questionText = q.getQuestionText();
        }
        if(q.getType() != this.type){
            this.type = q.getType();
        }
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
    
    
}