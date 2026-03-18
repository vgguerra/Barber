package com.barber.backend.barberShop;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BarberShopRepository extends JpaRepository<BarberShopEntity, UUID> {
    List<BarberShopEntity> findByNameContainingIgnoreCase(String name);
}