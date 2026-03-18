package com.barber.backend.barberShop;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.barber.backend.barberShop.dto.BarberShopDTO;

@RestController
@RequestMapping("/barber-shops")
public class BarberShopController {

    private final BarberShopService service;

    public BarberShopController(BarberShopService service) {
        this.service = service;
    }

    @GetMapping
    public List<BarberShopDTO> getAll(@RequestParam(value = "q", required = false) String q) {
        if (q == null || q.trim().isEmpty()) {
            return service.findAll();
        }
        return service.findByName(q.trim());
    }

}
