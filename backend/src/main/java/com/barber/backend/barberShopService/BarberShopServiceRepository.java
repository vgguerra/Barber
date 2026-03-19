package com.barber.backend.barberShopService;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BarberShopServiceRepository extends JpaRepository<BarberShopServiceEntity, UUID> {
    List<BarberShopServiceEntity> findByBarberShopId(UUID barberShopId);
}