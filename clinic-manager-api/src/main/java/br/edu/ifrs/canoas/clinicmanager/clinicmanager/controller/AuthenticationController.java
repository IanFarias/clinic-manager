package br.edu.ifrs.canoas.clinicmanager.clinicmanager.controller;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.infra.security.TokenService;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.user.AuthenticationDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.user.LoginResponseDTO;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.user.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var user = (User) auth.getPrincipal();

        var token = tokenService.generateToken(user);

        return ResponseEntity.ok(new LoginResponseDTO( user.getId(), user.getUsername(), user.getRole(), token ));
    }
}