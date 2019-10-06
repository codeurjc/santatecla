package com.unit;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnitService {

	private String UNIT_NAME_SEPARATOR = ".";
	private String UNIT_NAME_SPLITTER = "\\.";

	@Autowired
	private UnitRepository unitRepository;

	public List<Unit> findAll() {
		return unitRepository.findAll();
	}

	public Optional<Unit> findOne(long id) {
		return unitRepository.findById(id);
	}

    public void save(Unit theme) {
		unitRepository.save(theme);
	}

	public void delete(long id) {
		unitRepository.deleteById(id);
	}

	public List<Unit> findRootUnits() {
		return unitRepository.findRootUnits();
	}

	public List<Unit> findByNameContaining(String name) {
		return resolveDuplicateNames(unitRepository.findByNameContaining(name));
	}

	private List<Unit> resolveDuplicateNames(List<Unit> units) {
		Map<String, List<Unit>> duplicates = new HashMap<>();
		for (int i = 0; i < units.size(); i++) {
			for (int j = i + 1; j < units.size(); j++) {
				if (units.get(i).getName().equals(units.get(j).getName())) {
					List<Unit> ids = duplicates.get(units.get(i).getName());
					if (ids == null) {
						List<Unit> newList = new ArrayList<>();
						newList.add(units.get(i));
						newList.add(units.get(j));
						duplicates.put(units.get(i).getName(), newList);
					} else {
						if (!ids.contains(units.get(i))) {
							ids.add(units.get(i));
						}
						if (!ids.contains(units.get(j))) {
							ids.add(units.get(j));
						}
					}
				}
			}
		}
		for (String key : duplicates.keySet()) {
			List<Unit> dup = duplicates.get(key);
			for (int i = 0; i < dup.size(); i++) {
				for (int j = i + 1; j < dup.size(); j++) {
					Unit uniti = dup.get(i);
					Unit unitj = dup.get(j);
					while (uniti.getName().contains(unitj.getName()) || unitj.getName().contains(uniti.getName())) {
						if (uniti.getName().contains(unitj.getName())) {
							unitj.setName(getParent(unitj.getId(), getLevel(unitj.getName())).getName() + UNIT_NAME_SEPARATOR + unitj.getName());
						}
						if (unitj.getName().contains(uniti.getName())) {
							uniti.setName(getParent(uniti.getId(), getLevel(uniti.getName())).getName() + UNIT_NAME_SEPARATOR + uniti.getName());
						}
					}
				}
			}
		}
		return units;
	}

	private Unit getParent(Long id, int level) {
		Unit parent = unitRepository.getParent(id);
		for (int i = 0; i < level; i++) {
			parent = unitRepository.getParent(parent.getId());
		}
		return parent;
	}

	private int getLevel(String name) {
		return name.split(UNIT_NAME_SPLITTER).length - 1;
	}

}