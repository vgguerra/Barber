package com.barber.backend.barberShop.dto;

import java.util.List;
import java.util.UUID;

public class BarberShopDTO {

    private UUID id;
    private String name;
    private String address;
    private List<String> phones;
    private String description;
    private String imageUrl;

    public BarberShopDTO() {}

    public BarberShopDTO(UUID id, String name, String address, List<String> phones, String description, String imageUrl) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phones = phones;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public List<String> getPhones() { return phones; }
    public void setPhones(List<String> phones) { this.phones = phones; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
