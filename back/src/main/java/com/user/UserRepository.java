package com.user;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;


@Transactional
public interface UserRepository extends JpaRepository<User, Long> {

	public User findByName(String name);
	public User findById(long id);

}