package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "puntuaciones")
@IdClass(idPuntuaciones.class)
public class Puntuaciones {

	@Id
	public int idevaluacion;
	@Id
	public int idconstructo;
	@Id
	public int idelemento;

	public int puntuacion;

	public Puntuaciones() {
	}

	public Puntuaciones(int idevaluacion, int idconstructo, int idelemento, int puntuacion) {
		super();
		this.idevaluacion = idevaluacion;
		this.idconstructo = idconstructo;
		this.idelemento = idelemento;
		this.puntuacion = puntuacion;
	}

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
