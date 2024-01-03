package com.bluesoft.bluesoftbank.controller;

import com.bluesoft.bluesoftbank.exceptions.ResourceNotFoundException;
import com.bluesoft.bluesoftbank.model.Cliente;
import com.bluesoft.bluesoftbank.model.Transaccion;
import com.bluesoft.bluesoftbank.repository.ClienteRepository;
import com.bluesoft.bluesoftbank.service.ClienteService;
import com.bluesoft.bluesoftbank.utils.UtilidadesPruebas;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bluesoft.bluesoftbank.repository.TransaccionRepository;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "http://localhost:4200/")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private TransaccionRepository transaccionRepository;

    @Autowired
    private ClienteRepository clienteRepository;


    @GetMapping
    public List<Cliente> getAllClientes() {
        return clienteService.getAllClientes();
    }

    @GetMapping("/mayor-numero-transacciones-mes")
    public List<Cliente> getClientesConMasTransaccionesEnMes(int mes) {
        try {
            // Obtener todas las transacciones del mes
            List<Transaccion> transaccionesDelMes = transaccionRepository.findByFechaBetween(
                    UtilidadesPruebas.primerDiaDelMes(mes),
                    UtilidadesPruebas.ultimoDiaDelMes(mes)
            );

            // Contar transacciones por cliente
            Map<Cliente, Long> transaccionesPorCliente = transaccionesDelMes.stream()
                    .collect(Collectors.groupingBy(
                            transaccion -> transaccion.getCuenta().getCliente(),
                            Collectors.counting()
                    ));

            // Ordenar clientes por número de transacciones en orden descendente
            return transaccionesPorCliente.entrySet().stream()
                    .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                    .map(Map.Entry::getKey)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            // Manejo de excepciones
            throw new RuntimeException("Error al obtener clientes con más transacciones en el mes", e);
        }
    }


    @PostMapping("/clientes")
    public Cliente guardarCliente(@RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }

    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable Long id){
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el cliente con el ID : " + id));
        return ResponseEntity.ok(cliente);
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> actualizarEmpleado(@PathVariable Long id,@RequestBody Cliente cliente){
        Cliente clientes = clienteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));

        clientes.setNombre(cliente.getNombre());
        clientes.setCiudadOrigen(cliente.getCiudadOrigen());
        clientes.setCiudadActual(cliente.getCiudadActual());

        Cliente clienteActualizado = clienteRepository.save(cliente);
        return ResponseEntity.ok(clienteActualizado);
    }


    @PostMapping("/transacciones")
    public Transaccion guardarTransaccion(@RequestBody Transaccion transaccion){
        return transaccionRepository.save(transaccion);
    }


}

