package uned.master.java.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uned.master.java.entity.Puntuaciones;
import uned.master.java.entity.Rejilla;

public interface PuntuacionesRepository  extends JpaRepository<Puntuaciones, Integer>{

}
