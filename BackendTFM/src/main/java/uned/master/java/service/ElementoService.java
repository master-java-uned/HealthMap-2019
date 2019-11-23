package uned.master.java.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.Elemento;
import uned.master.java.repository.ElementosRepository;

@Service
@Transactional
public class ElementoService {
	
	@Autowired
	 ElementosRepository elementoRepository;
		
	public Optional<Elemento> getElemento(int id) {
		return elementoRepository.findById(id);
	}	 
	
}
