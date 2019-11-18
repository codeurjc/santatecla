package com.user;

import javax.transaction.Transactional;

import com.course.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


@Transactional
public interface UserRepository extends JpaRepository<User, Long> {

	public User findByName(String name);
	public User findById(long id);

}