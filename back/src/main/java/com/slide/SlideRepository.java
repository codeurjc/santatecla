package com.slide;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SlideRepository extends JpaRepository<Slide, Long> {
        
    @Query(value = "select * from slide where slide.dtype = 'TheorySlide' ", nativeQuery = true)
    public List<TheorySlide> getTheorySlides();

    @Query(value = "select * from slide where slide.dtype = 'PracticeSlide' ", nativeQuery = true)
    public List<PracticeSlide> getPracticeSlides();
    
}