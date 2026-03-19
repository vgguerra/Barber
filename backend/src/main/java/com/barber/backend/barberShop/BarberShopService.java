package com.barber.backend.barberShop;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.barber.backend.barberShop.dto.BarberShopDTO;
import com.barber.backend.barberShopService.BarberShopServiceDTO;
import com.barber.backend.barberShopService.BarberShopServiceRepository;
import com.barber.backend.barberShopService.BarberShopServiceEntity;

@Service
public class BarberShopService {

    private final BarberShopRepository repository;
    private final BarberShopServiceRepository serviceRepository;

    public BarberShopService(BarberShopRepository repository, BarberShopServiceRepository serviceRepository) {
        this.repository = repository;
        this.serviceRepository = serviceRepository;
    }

    public List<BarberShopDTO> findAll() {
        return repository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public List<BarberShopDTO> findByName(String term) {
        return repository.findByNameContainingIgnoreCase(term).stream().map(this::toDTO).collect(Collectors.toList());
    }

    public java.util.Optional<BarberShopDTO> findById(java.util.UUID id) {
        return repository.findById(id).map(this::toDTO);
    }

    public List<BarberShopServiceDTO> findServicesByBarberShopId(java.util.UUID barberShopId) {
        return serviceRepository.findByBarberShopId(barberShopId).stream().map(this::toServiceDTO).collect(Collectors.toList());
    }

    private BarberShopDTO toDTO(BarberShopEntity entity) {
        List<BarberShopServiceDTO> services = serviceRepository
            .findByBarberShopId(entity.getId())
            .stream()
            .map(this::toServiceDTO)
            .collect(Collectors.toList());

        return new BarberShopDTO(
                entity.getId(),
                entity.getName(),
                entity.getAddress(),
                entity.getPhones(),
                entity.getDescription(),
                entity.getImageUrl(),
                services);
    }

    private BarberShopServiceDTO toServiceDTO(BarberShopServiceEntity entity) {
        return new BarberShopServiceDTO(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getImageUrl(),
                entity.getPrice());
    }
}
