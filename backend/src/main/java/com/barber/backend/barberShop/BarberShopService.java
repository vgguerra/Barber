package com.barber.backend.barberShop;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.barber.backend.barberShop.dto.BarberShopDTO;

@Service
public class BarberShopService {

    private final BarberShopRepository repository;

    public BarberShopService(BarberShopRepository repository) {
        this.repository = repository;
    }

    public List<BarberShopDTO> findAll() {
        return repository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<BarberShopDTO> findByName(String term) {
        return repository.findByNameContainingIgnoreCase(term).stream().map(this::toDTO).collect(Collectors.toList());
    }

    private BarberShopDTO toDTO(BarberShopEntity entity) {
        return new BarberShopDTO(
                entity.getId(),
                entity.getName(),
                entity.getAddress(),
                entity.getPhones(),
                entity.getDescription(),
                entity.getImageUrl());
    }
}
