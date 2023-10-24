package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "appointment_types")
@Entity(name = "appointment_types")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class AppointmentTypes {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String name;

    @Column
    private double amount;
}
