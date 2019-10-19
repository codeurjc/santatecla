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
import org.aspectj.weaver.loadtime.definition.Definition;

@Entity
public class DefinitionQuestion extends Question{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;

    public enum Type {Test, Open}

    private Type type;

    //ONLY FOR TRUE/FALSE YES/NO QUESTIONS
    private String correctAnswer;

    @OneToMany(cascade = CascadeType.ALL)
    private List<DefinitionAnswer> answers;

    public DefinitionQuestion(){
        this.answers = new ArrayList<>();
    }

    public DefinitionQuestion(String questionText, Type type){
        this.subtype = this.getClass().getSimpleName();
        this.questionText = questionText;
        this.type = type;
        this.answers = new ArrayList<>();
    }

    public DefinitionQuestion(String questionText, Type type, String correctAnswer){
        this.subtype = this.getClass().getSimpleName();
        this.questionText = questionText;
        this.type = type;
        this.correctAnswer = correctAnswer;
        this.answers = new ArrayList<>();
    }

    public void update(DefinitionQuestion q) {
        if(q.getQuestionText() != null){
            this.questionText = q.getQuestionText();
        }
        if(q.getType() != this.type){
            this.type = q.getType();
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Type getType() {
        return type;
    }

    public List<DefinitionAnswer> getAnswers() {
        return answers;
    }

    public void addAnswer(DefinitionAnswer answer) {
        this.answers.add(answer);
    }
    
}