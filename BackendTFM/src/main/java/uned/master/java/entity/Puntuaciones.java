package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "puntuaciones")
public class Puntuaciones {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	
	public int idevaluacion;
	
	public int idconstructo;
	
	public int idelemento;
	
	public int puntuacion;

	public int getIdevaluacion() {
		return idevaluacion;
	}

	public void setIdevaluacion(int idevaluacion) {
		this.idevaluacion = idevaluacion;
	}

	public int getIdconstructo() {
		return idconstructo;
	}

	public void setIdconstructo(int idconstructo) {
		this.idconstructo = idconstructo;
	}

	public int getIdelemento() {
		return idelemento;
	}

	public void setIdelemento(int idelemento) {
		this.idelemento = idelemento;
	}

	public int getPuntuacion() {
		return puntuacion;
	}

	public void setPuntuacion(int puntuacion) {
		this.puntuacion = puntuacion;
	}
	
}