package uned.master.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "evaluaciones")
@IdClass(idEvaluacion.class)
public class Evaluacion {

	@Id
	@GeneratedValue
	public int idevaluacion;

	@Id
	public int idrejilla;

	public String comentariopaciente;

	public String comentariopsicologo;

	public Evaluacion() {
	}

	public Evaluacion(int idevaluacion, int idrejilla, String comentariopaciente, String comentariopsicologo) {
		this.idevaluacion = idevaluacion;
		this.idrejilla = idrejilla;
		this.comentariopaciente = comentariopaciente;
		this.comentariopsicologo = comentariopsicologo;
	}

	public int getIdevaluacion() {
		return idevaluacion;
	}

	public void setIdevaluacion(int idevaluacion) {
		this.idevaluacion = idevaluacion;
	}

	public int getIdrejilla() {
		return idrejilla;
	}

	public void setIdrejilla(int idrejilla) {
		this.idrejilla = idrejilla;
	}

	public String getComentariopaciente() {
		return comentariopaciente;
	}

	public void setComentariopaciente(String comentariopaciente) {
		this.comentariopaciente = comentariopaciente;
	}

	public String getComentariopsicologo() {
		return comentariopsicologo;
	}

	public void setComentariopsicologo(String comentariopsicologo) {
		this.comentariopsicologo = comentariopsicologo;
	}

}
