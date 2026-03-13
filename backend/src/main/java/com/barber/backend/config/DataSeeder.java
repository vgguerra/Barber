package com.barber.backend.config;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.barber.backend.barberShop.BarberShopEntity;
import com.barber.backend.barberShop.BarberShopRepository;
import com.barber.backend.barberShopService.BarberShopServiceEntity;
import com.barber.backend.barberShopService.BarberShopServiceRepository;

@Component
public class DataSeeder implements CommandLineRunner {

    private final BarberShopRepository barbershopRepository;
    private final BarberShopServiceRepository serviceRepository;

    public DataSeeder(BarberShopRepository barbershopRepository, BarberShopServiceRepository serviceRepository) {
        this.barbershopRepository = barbershopRepository;
        this.serviceRepository = serviceRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        // Só popula se não houver barbearias no banco
        if (barbershopRepository.count() > 0) {
            System.out.println("Barbearias já existem no banco, seed ignorado.");
            return;
        }

        // Dados das barbearias
        List<String> names = Arrays.asList(
            "Barbearia Vintage",
            "Corte & Estilo",
            "Barba & Navalha",
            "The Dapper Den",
            "Cabelo & Cia.",
            "Machado & Tesoura",
            "Barbearia Elegance",
            "Aparência Impecável",
            "Estilo Urbano",
            "Estilo Clássico"
        );

        List<String> addresses = Arrays.asList(
            "Rua da Barbearia, 123",
            "Avenida dos Cortes, 456",
            "Praça da Barba, 789",
            "Travessa da Navalha, 101",
            "Alameda dos Estilos, 202",
            "Estrada do Machado, 303",
            "Avenida Elegante, 404",
            "Praça da Aparência, 505",
            "Rua Urbana, 606",
            "Avenida Clássica, 707"
        );

        List<String> images = Arrays.asList(
            "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
            "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
            "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
            "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
            "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
            "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
            "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
            "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
            "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
            "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png"
        );

        // Template de serviços
        List<BarberShopServiceEntity> servicesTemplate = Arrays.asList(
            new BarberShopServiceEntity() {{
                setName("Corte de Cabelo");
                setDescription("Estilo personalizado com as últimas tendências.");
                setPrice(BigDecimal.valueOf(60.0));
                setImageUrl("https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png");
            }},
            new BarberShopServiceEntity() {{
                setName("Barba");
                setDescription("Modelagem completa para destacar sua masculinidade.");
                setPrice(BigDecimal.valueOf(40.0));
                setImageUrl("https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png");
            }},
            new BarberShopServiceEntity() {{
                setName("Pézinho");
                setDescription("Acabamento perfeito para um visual renovado.");
                setPrice(BigDecimal.valueOf(35.0));
                setImageUrl("https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png");
            }},
            new BarberShopServiceEntity() {{
                setName("Sobrancelha");
                setDescription("Expressão acentuada com modelagem precisa.");
                setPrice(BigDecimal.valueOf(20.0));
                setImageUrl("https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png");
            }},
            new BarberShopServiceEntity() {{
                setName("Massagem");
                setDescription("Relaxe com uma massagem revigorante.");
                setPrice(BigDecimal.valueOf(50.0));
                setImageUrl("https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png");
            }},
            new BarberShopServiceEntity() {{
                setName("Hidratação");
                setDescription("Hidratação profunda para cabelo e barba.");
                setPrice(BigDecimal.valueOf(25.0));
                setImageUrl("https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png");
            }}
        );

        // Loop para criar barbearias e serviços
        for (int i = 0; i < names.size(); i++) {
            BarberShopEntity barbershop = new BarberShopEntity();
            barbershop.setName(names.get(i));
            barbershop.setAddress(addresses.get(i));
            barbershop.setImageUrl(images.get(i));
            barbershop.setPhones(Arrays.asList("(11) 99999-9999", "(11) 99999-9999"));
            barbershop.setDescription("Lorem ipsum dolor sit amet...");
            barbershopRepository.save(barbershop);

            // Serviços
            for (BarberShopServiceEntity template : servicesTemplate) {
                BarberShopServiceEntity service = new BarberShopServiceEntity();
                service.setName(template.getName());
                service.setDescription(template.getDescription());
                service.setPrice(template.getPrice());
                service.setImageUrl(template.getImageUrl());
                service.setBarberShop(barbershop);
                serviceRepository.save(service);
            }
        }

        System.out.println("DataSeeder executado com sucesso!");
    }
}