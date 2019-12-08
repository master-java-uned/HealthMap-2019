package uned.master.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.OrdenConstructos;
import uned.master.java.entity.Puntuaciones;
import uned.master.java.entity.Rejilla;
import uned.master.java.repository.OrdenConstructosRepository;
import uned.master.java.repository.PuntuacionesRepository;
import uned.master.java.repository.RejillaRepository;

@Service
@Transactional
public class PuntuacionesService {
	
	@Autowired
	   PuntuacionesRepository puntuacionesRepository;
		
	@Autowired
	   OrdenConstructosRepository ordenRepository;
	
		 public void guardar(List<Puntuaciones> puntuaciones){
		     for(Puntuaciones puntuacion:puntuaciones) { 
		    	 puntuacionesRepository.save(puntuacion);
		     }      
		    }
		 
		 public void guardarOrdenConstructos(List<OrdenConstructos> ordenConstructos){
		     for(OrdenConstructos orden:ordenConstructos) {
		    	 ordenRepository.save(orden);
		     }      
		    }
}
