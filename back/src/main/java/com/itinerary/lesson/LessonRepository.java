package com.itinerary.lesson;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

    @Query(value = "select module_id from block_blocks where blocks_id = ?1", nativeQuery = true)
    List<Long> findModulesContainingBlock(Long blockId);
    
}