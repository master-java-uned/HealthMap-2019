package uned.master.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



import uned.master.java.entity.Rejilla;
import uned.master.java.repository.RejillaRepository;



@Service
@Transactional
public class RejillaService {

	@Autowired
   RejillaRepository rejillaRepository;
	
	
	 public int guardar(Rejilla rejilla){
	        Rejilla newRejilla=rejillaRepository.save(rejilla);
	        return newRejilla.getIdrejilla();
	    }
	 
	 public List<Rejilla> getRejillaUser(Long idUsuario){
		 return rejillaRepository.findByIdUsuario(idUsuario);
	 }
}
