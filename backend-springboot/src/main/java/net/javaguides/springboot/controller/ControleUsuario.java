package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import net.javaguides.springboot.exception.ExcecaoNaoEncontrada;
import net.javaguides.springboot.model.Usuario;
import net.javaguides.springboot.repository.UsuarioRepositorio;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class ControleUsuario {
	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	//Obtem a listagem de usuários
	@GetMapping("/usuarios")
	public List<Usuario> getTodosUsuarios(){
		return usuarioRepositorio.findAll();
	}
	//Criar usuarios rest api
@PostMapping("usuarios")
public Usuario criarUsuario(@RequestBody Usuario usuario) {
	return usuarioRepositorio.save(usuario);
}
	//Obter usuarios pelo id rest api
@GetMapping("/usuarios/{id}")
public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
	Usuario usuario = usuarioRepositorio.findById(id)
			.orElseThrow(() -> new ExcecaoNaoEncontrada("usuario não esxite com o identificador:" + id));
	return ResponseEntity.ok(usuario);
}

	//Atualizar usuarios rest api
@PutMapping("/usuarios/{id}")
public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id,@RequestBody Usuario usuarioDetalhes){
	Usuario usuario = usuarioRepositorio.findById(id)
			.orElseThrow(() -> new ExcecaoNaoEncontrada("usuario não esxite com o identificador:" + id));
	usuario.setPrimeiroNome(usuarioDetalhes.getPrimeiroNome());
	usuario.setUltimoNome(usuarioDetalhes.getUltimoNome());
	usuario.setEmail(usuarioDetalhes.getEmail());
	
	Usuario updateUsuario = usuarioRepositorio.save(usuario);
	return ResponseEntity.ok(updateUsuario);
	}

	//Deletar usuario rest api
@DeleteMapping("/usuarios/{id}")
public ResponseEntity<Map<String, Boolean>> deleteUsuario(@PathVariable Long id){
	Usuario usuario = usuarioRepositorio.findById(id)
			.orElseThrow(() -> new ExcecaoNaoEncontrada("usuario não esxite com o identificador:" + id));
	
	usuarioRepositorio.delete(usuario);
	Map<String, Boolean> response = new HashMap<>();
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}


}