package com.question.list.list_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.question.Question;
import com.question.list.list_answer.ListAnswer;

@Entity
public class ListQuestion extends Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ElementCollection
    private List<String> possibleAnswers;

    @ElementCollection
    private List<String> correctAnswers;

    @OneToMany(cascade = CascadeType.ALL)
    private List<ListAnswer> answers;

    public ListQuestion() {
        super();
        this.possibleAnswers = new ArrayList<>();
        this.correctAnswers = new ArrayList<>();
    }

    public ListQuestion(String questionText, List<String> possibleAnswers, List<String> correctAnswer) {
        super(questionText);
        this.possibleAnswers = possibleAnswers;
        this.correctAnswers = correctAnswer;
    }

    public void update(ListQuestion q) {
        if (q.getQuestionText() != null) {
            this.questionText = q.getQuestionText();
        }
        if (!q.getCorrectAnswers().equals(this.correctAnswers)) {
            this.correctAnswers = q.getCorrectAnswers();
        }
        if (!q.getPossibleAnswers().equals(this.possibleAnswers)) {
            this.possibleAnswers = q.getPossibleAnswers();
        }
    }

    public void addAnswer(ListAnswer answer) {
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

    public List<String> getCorrectAnswers() {
        return this.correctAnswers;
    }

    public List<String> getPossibleAnswers() {
        return this.possibleAnswers;
    }

    public List<ListAnswer> getAnswers() {
        return answers;
    }
}