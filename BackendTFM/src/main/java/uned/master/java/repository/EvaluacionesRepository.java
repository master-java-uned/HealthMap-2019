package uned.master.java.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uned.master.java.entity.Evaluacion;
import uned.master.java.entity.Polos;

public interface EvaluacionesRepository extends JpaRepository<Evaluacion, Integer>{

}
