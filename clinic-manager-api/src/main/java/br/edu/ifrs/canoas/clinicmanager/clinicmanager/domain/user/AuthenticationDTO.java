package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.user;

import jakarta.validation.constraints.NotNull;

public record AuthenticationDTO(@NotNull String login, @NotNull String password) {
}
