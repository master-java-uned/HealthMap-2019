package uned.master.java.entity;


import java.util.List;


public class RejillaDatosFront {
	private int idrejilla;
	private List<ElementosRejilla> elementosusuario;
	private List<Polos> polos;


	public RejillaDatosFront() {
	}


	public RejillaDatosFront(int idrejilla, List<ElementosRejilla> elementosusuario, List<Polos> polos) {
		super();
		this.idrejilla = idrejilla;
		this.elementosusuario = elementosusuario;
		this.polos = polos;
	}


	public int getIdrejilla() {
		return idrejilla;
	}


	public void setIdrejilla(int idrejilla) {
		this.idrejilla = idrejilla;
	}


	public List<ElementosRejilla> getElementosUsuario() {
		return elementosusuario;
	}


	public void setElementosUsuario(List<ElementosRejilla> elementosusuario) {
		this.elementosusuario = elementosusuario;
	}


	public List<Polos> getPolos() {
		return polos;
	}


	public void setPolos(List<Polos> polos) {
		this.polos = polos;
	}

}
