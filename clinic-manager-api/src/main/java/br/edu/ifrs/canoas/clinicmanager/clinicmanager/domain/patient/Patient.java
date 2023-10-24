package br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.patient;

import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.address.Address;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.appointment.Appointment;
import br.edu.ifrs.canoas.clinicmanager.clinicmanager.domain.guardian.Guardian;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Table(name = "patients")
@Entity(name = "patients")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String name;

    @Column
    private LocalDate birthdate;

    @Column
    private Integer age;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private Address address;

    @JoinColumn(name = "guardian_id")
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Guardian> guardians;

    @Column
    private LocalDateTime created_at;

    @Column
    private LocalDateTime updated_at;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Appointment> listAppointments;
  
    @Column
    private String observation;
}
