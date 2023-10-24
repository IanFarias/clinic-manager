package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient.Patient;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.professional.Professional;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Table(name = "appointments")
@Entity(name = "appointments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String name;

    @Column
    private LocalDate appointment_date;

    @Column
    private String payment_type;

    @Column
    private LocalDateTime payment_date;

    @Column
    private String observation;

    @ManyToOne
    @JoinColumn(name = "professional_id")
    private Professional professional;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @OneToOne
    @JoinColumn(name = "appointment_type")
    private AppointmentTypes appointmentTypes;
}
