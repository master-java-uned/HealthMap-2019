package uned.master.java.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uned.master.java.entity.Evaluacion;
import uned.master.java.entity.Rejilla;
import uned.master.java.repository.EvaluacionesRepository;
import uned.master.java.repository.RejillaRepository;

@Service
@Transactional
public class EvaluacionService {

	@Autowired
	  EvaluacionesRepository evaluacionRepository;
		
		
		 public int insertEvaluacion(Evaluacion evaluacion){
		        Evaluacion newEvaluacion=evaluacionRepository.save(evaluacion);
			
		        return newEvaluacion.getIdevaluacion();
		    }
}
