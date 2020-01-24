package uned.master.java.service;


import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uned.master.java.entity.Elemento;
import uned.master.java.entity.Elementosrejilla;
import uned.master.java.repository.ElementosRepository;
import uned.master.java.repository.ElementosUsuarioRepository;


@Service
@Transactional
public class ElementoService {
	
	@Autowired
	ElementosRepository elementoRepository;
	
	@Autowired
	ElementosUsuarioRepository elementosRejillaRepository;

	/**
	 * Obtiene los elementos que debe de introducir el usuario
	 * 
	 * @return List<Elemento>
	 */
	
	public List<Elemento> getElementos(){
		return elementoRepository.findAll();
	}
	
	/**
	 * Obtiene los elementos de una rejilla
	 * 
	 * @param idrejilla
	 * @return List<Elementosrejilla>
	 */
	public List<Elementosrejilla> getElementosUsuario(Integer idrejilla) {
		return elementosRejillaRepository.findByRejilla(idrejilla);
	}
	
	
	/**
	 * Inserta los elementos introducidos por el usuario en la rejilla
	 * 
	 * @param elementos
	 */
	public void insertElementos(List<Elementosrejilla> elementos) {
		for(Elementosrejilla elemento:elementos){
			elementosRejillaRepository.save(elemento);
		}
	}
	

}