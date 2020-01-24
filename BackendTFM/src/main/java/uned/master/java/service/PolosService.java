package uned.master.java.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uned.master.java.entity.Polos;
import uned.master.java.repository.PolosRepository;

@Service
@Transactional
public class PolosService {

	@Autowired
	PolosRepository polosRepository;

	/**
	 * Inserta los polos de una rejilla
	 * 
	 * @param polos
	 */
	public void insertConstructos(List<Polos> polos) {
		for (Polos polo : polos) {
			polosRepository.save(polo);
		}
	}

	/**
	 * Obtiene los polos de una rejilla concreta
	 * 
	 * @param idrejilla
	 * @return
	 */
	public List<Polos> findPolos(Integer idrejilla) {
		return polosRepository.findByRejilla(idrejilla);
	}
}
