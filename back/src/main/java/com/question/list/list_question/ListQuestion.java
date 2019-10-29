package com.question.list.list_question;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.question.Question;
import com.question.list.list_answer.ListAnswer;

@Entity
public class ListQuestion{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String questionText;
    private String subtype;
    private int totalAnswers;
    private int totalCorrectAnswers;
    private int totalWrongAnswers;

    @ElementCollection
    private List<String> possibleAnswers;

    @ElementCollection
    private List<String> correctAnswers;

    @OneToMany(cascade = CascadeType.ALL)
    private List<ListAnswer> listAnswers;

    public ListQuestion() {
        this.possibleAnswers = new ArrayList<>();
        this.correctAnswers = new ArrayList<>();
        this.listAnswers = new ArrayList<>();
    }

    public ListQuestion(String questionText, List<String> possibleAnswers, List<String> correctAnswer) {
        this.questionText = questionText;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswers = correctAnswer;
        this.listAnswers = new ArrayList<>();
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
        this.listAnswers.add(answer);
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

    public void setAnswers(List<ListAnswer> answers) {
        this.answers = answers;
    }

    public void addAnswer(ListAnswer answer){
        this.answers.add(answer);
    }

    public int getCorrectAnswerCount() {
        return this.totalCorrectAnswers;
    }

    public void setCorrectAnswerCount(int correctAnswerCount) {
        this.totalCorrectAnswers = correctAnswerCount;
    }

    public int getWrongAnswerCount() {
        return totalWrongAnswers;
    }

    public void setWrongAnswerCount(int wrongAnswerCount) {
        this.totalWrongAnswers = wrongAnswerCount;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
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

    public void setPossibleAnswers(List<String> possibleAnswers) {
        this.possibleAnswers = possibleAnswers;
    }

    public void setCorrectAnswers(List<String> correctAnswers) {
        this.correctAnswers = correctAnswers;
    }
}