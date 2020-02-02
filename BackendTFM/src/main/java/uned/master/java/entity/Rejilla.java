package uned.master.java.entity;

import java.sql.Timestamp;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "rejillas")
public class Rejilla {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idrejilla;

	private Long idpaciente;

	private Timestamp fechahora;

	private Timestamp fechahorafin;

	private String comentariopaciente;

	private String comentariopsicologo;

	public Rejilla() {
	}

	public Rejilla(int idrejilla, Long idpaciente, @NotNull Timestamp fechahora, Timestamp fechahorafin,
			String comentariopaciente, String comentariopsicologo) {
		this.idrejilla = idrejilla;
		this.idpaciente = idpaciente;
		this.fechahora = fechahora;
		this.fechahorafin = fechahorafin;
		this.comentariopaciente = comentariopaciente;
		this.comentariopsicologo = comentariopsicologo;
	}

	public int getIdrejilla() {
		return idrejilla;
	}

	public void setIdrejilla(int idrejilla) {
		this.idrejilla = idrejilla;
	}

	public Long getIdpaciente() {
		return idpaciente;
	}

	public void setIdpaciente(Long idpaciente) {
		this.idpaciente = idpaciente;
	}

	public Timestamp getFechahora() {
		return fechahora;
	}

	public void setFechahora(Timestamp fechahora) {
		this.fechahora = fechahora;
	}

	public Timestamp getFechahorafin() {
		return fechahorafin;
	}

	public void setFechahorafin(Timestamp fechahorafin) {
		this.fechahorafin = fechahorafin;
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
