package com.question.test.test_question;

import com.question.test.test_answer.TestAnswer;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class TestQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String questionText;
    private String subtype;

    @ElementCollection
    private List<String> possibleAnswers;

    private String correctAnswer;

    @OneToMany(cascade = CascadeType.ALL)
    private List<TestAnswer> answers;

    public TestQuestion() {
        this.subtype = this.getClass().getSimpleName();
        this.possibleAnswers = new ArrayList<>();
        this.answers = new ArrayList<>();
    }

    public TestQuestion(String questionText, List<String> possibleAnswers, String correctAnswer) {
        this.subtype = this.getClass().getSimpleName();
        this.questionText = questionText;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
        this.answers = new ArrayList<>();
    }

    public void update(TestQuestion q) {
        if (q.getQuestionText() != null) {
            this.questionText = q.getQuestionText();
        }
        if (!q.getCorrectAnswer().equals(this.correctAnswer)) {
            this.correctAnswer = q.getCorrectAnswer();
        }
        if (!q.getPossibleAnswers().equals(this.possibleAnswers)) {
            this.possibleAnswers = q.getPossibleAnswers();
        }
    }

    public void addAnswer(TestAnswer answer) {
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

    public List<String> getPossibleAnswers() {
        return possibleAnswers;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public List<TestAnswer> getAnswers() {
        return answers;
    }

    public String getQuestionText() {
        return questionText;
    }

    public String getSubtype() {
        return subtype;
    }

}
