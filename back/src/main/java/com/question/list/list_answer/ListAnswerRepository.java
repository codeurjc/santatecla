package com.question.list.list_answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListAnswerRepository extends JpaRepository<ListAnswer, Long> {
}
