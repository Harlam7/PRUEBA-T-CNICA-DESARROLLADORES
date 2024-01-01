package com.bluesoft.bluesoftbank.service;

import com.bluesoft.bluesoftbank.model.Cliente;
import com.bluesoft.bluesoftbank.model.Transaccion;
import com.bluesoft.bluesoftbank.repository.ClienteRepository;
import com.bluesoft.bluesoftbank.repository.TransaccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import com.bluesoft.bluesoftbank.repository.TransaccionRepository;


import com.bluesoft.bluesoftbank.utils.UtilidadesPruebas;

import java.util.Comparator;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private TransaccionRepository transaccionRepository;

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public List<Cliente> getClientesConMasTransaccionesEnMes(int mes) {
        // Obtener todas las transacciones del mes
        List<Transaccion> transaccionesDelMes = transaccionRepository.findByFechaBetween(
                UtilidadesPruebas.primerDiaDelMes(mes),
                UtilidadesPruebas.ultimoDiaDelMes(mes)
        );

        // Contar transacciones por cliente
        Map<Cliente, Long> transaccionesPorCliente = transaccionesDelMes.stream()
                .collect(Collectors.groupingBy(transaccion -> transaccion.getCuenta().getCliente(), Collectors.counting()));

        // Ordenar clientes por número de transacciones en orden descendente
        List<Cliente> clientesOrdenados = transaccionesPorCliente.entrySet().stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        return clientesOrdenados;
    }

    public List<Cliente> getClientesConRetirosFueraCiudad(int mes) {
        // Obtener todas las transacciones del mes
        List<Transaccion> transaccionesDelMes = transaccionRepository.findByFechaBetween(
                UtilidadesPruebas.primerDiaDelMes(mes),
                UtilidadesPruebas.ultimoDiaDelMes(mes)
        );

        // Filtrar transacciones que son retiros y su valor es superior a $1.000.000
        List<Transaccion> retirosFueraCiudad = transaccionesDelMes.stream()
                .filter(transaccion -> "retiro".equals(transaccion.getTipo())
                        && transaccion.getMonto().compareTo(BigDecimal.valueOf(1000000)) > 0
                        && !transaccion.getCuenta().getCliente().getCiudadOrigen()
                        .equals(transaccion.getCuenta().getCliente().getCiudadActual()))
                .collect(Collectors.toList());

        // Obtener clientes correspondientes a las transacciones filtradas
        List<Cliente> clientesRetirosFueraCiudad = retirosFueraCiudad.stream()
                .map(transaccion -> transaccion.getCuenta().getCliente())
                .distinct()
                .collect(Collectors.toList());

        return clientesRetirosFueraCiudad;
    }
}
