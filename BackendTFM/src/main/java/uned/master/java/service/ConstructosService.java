package uned.master.java.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uned.master.java.entity.Constructo;
import uned.master.java.repository.ConstructosRepository;

@Service
@Transactional
public class ConstructosService {
	@Autowired
	ConstructosRepository constructosRepository;

	/**
	 * Obtiene los constructos a partir de su id
	 * 
	 * @param id
	 * @return
	 */
	public Optional<Constructo> getConstructos(int id) {
		return constructosRepository.findById(id);
	}
}
