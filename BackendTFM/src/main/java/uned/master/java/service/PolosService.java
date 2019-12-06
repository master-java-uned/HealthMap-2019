package uned.master.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.Constructo;
import uned.master.java.entity.Polos;
import uned.master.java.repository.ConstructosRepository;
import uned.master.java.repository.PolosRepository;

@Service
@Transactional
public class PolosService {
	@Autowired
	PolosRepository polosRepository;
	
	public void insertConstructos(List<Polos> polos) {
		for(Polos polo:polos){
		polosRepository.save(polo);
		}
	}

}
