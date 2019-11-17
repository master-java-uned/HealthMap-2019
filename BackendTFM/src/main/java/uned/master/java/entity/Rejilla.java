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
	    
	private String comentariopaciente;
	   
	private String comentariopsicologo;
	    
	    
	public Rejilla() {}
	    

	public Rejilla(int idRejilla, Long idpaciente, @NotNull Timestamp fechahora, String comentariopaciente,
				String comentariopsicologo) {
			this.idrejilla = idRejilla;
			this.idpaciente = idpaciente;
			this.fechahora = fechahora;
			this.comentariopaciente = comentariopaciente;
			this.comentariopsicologo = comentariopsicologo;
		}

		public int getIdRejilla() {
			return idrejilla;
		}

		public void setIdRejilla(int idRejilla) {
			this.idrejilla = idRejilla;
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
