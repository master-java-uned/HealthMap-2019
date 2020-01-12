package uned.master.java.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import uned.master.java.entity.ElementosRejilla;
import uned.master.java.repository.ElementosUsuarioRepository;

@Service
@Transactional
public class ElementosUsuarioService {

	@Autowired
	 ElementosUsuarioRepository elementoUsuarioRepository;
		
	
	public List<ElementosRejilla> getElementosUsuario(Integer idrejilla){
		return elementoUsuarioRepository.findByRejilla(idrejilla);
	}
}
