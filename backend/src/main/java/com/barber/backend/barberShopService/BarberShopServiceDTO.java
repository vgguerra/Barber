package com.barber.backend.barberShopService;

import java.math.BigDecimal;
import java.util.UUID;

public class BarberShopServiceDTO {

    private UUID id;
    private String name;
    private String description;
    private String imageUrl;
    private BigDecimal price;

    public BarberShopServiceDTO() {}

    public BarberShopServiceDTO(UUID id, String name, String description, String imageUrl, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}